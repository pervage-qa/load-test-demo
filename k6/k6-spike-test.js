import http from 'k6/http';
import { check, sleep } from 'k6';
import { Rate } from 'k6/metrics';

const failures = new Rate('failed_requests');

export const options = {
  discardResponseBodies: true,
  scenarios: {
    contacts: {
      executor: 'ramping-vus',
      startVUs: 0,
      stages: [
        { duration: '30s', target: 10 }, // below normal load
        { duration: '20s', target: 10 },
        { duration: '10s', target: 140 }, // spike to 1400 users
        { duration: '30s', target: 140 }, // stay at 1400 for 3 minutes
        { duration: '10s', target: 10 }, // scale down. Recovery stage.
        { duration: '30s', target: 10 },
        { duration: '10s', target: 0 },
      ],
      gracefulRampDown: '0s',
    },
  },
};

export default function () {
  var url = 'https://reqres.in/api/users?page=2';

  const result = http.get(url);
  check(result, { 'status was 200': (r) => r.status == 200 });
  failures.add(result.status !== 200);
  sleep(3);
}