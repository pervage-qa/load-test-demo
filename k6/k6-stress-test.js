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
        { duration: '2m', target: 1000 }, // below normal load
        { duration: '5m', target: 1000 },
        { duration: '2m', target: 2000 }, // normal load
        { duration: '5m', target: 2000 },
        { duration: '2m', target: 3000 }, // around the breaking point
        { duration: '5m', target: 3000 },
        { duration: '2m', target: 4000 }, // beyond the breaking point
        { duration: '5m', target: 4000 },
        { duration: '10m', target: 0 }, // scale down. Recovery stage.
      ],
      gracefulRampDown: '0s',
    },
  },
};

export default function () {
  var url = 'https://gorest.co.in/public-api/users';

  const result = http.get(url);
  check(result, { 'status was 200': (r) => r.status == 200 });
  failures.add(result.status !== 200);
  sleep(3);
}