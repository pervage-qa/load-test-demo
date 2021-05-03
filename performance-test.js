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
        { duration: '10s', target: 5 },
        { duration: '10s', target: 10 },
        { duration: '10s', target: 5 },
        { duration: '5s', target: 0 },
      ],
      gracefulRampDown: '0s',
    },
  },
};

export default function () {
  var url = 'https://dev-dot-team-service-non-prod.appspot.com/teams/';

  var params = {
    headers: {
      'x-api-key' : 'aVLcrQJsO9sWxUzG5TnVF',
      'OKTA-scp': 'manage-teams-dev',
      'OKTA-cid' : '0oaxvxs33bUWnwP1J0h7',
    },
  };

  const result = http.get(url,params);
  check(result, { 'status was 200': (r) => r.status == 200 });
  failures.add(result.status !== 200);
  sleep(3);
}