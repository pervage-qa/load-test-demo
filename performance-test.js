import http from 'k6/http';
import { check, sleep } from 'k6';

export let options = {
  discardResponseBodies: true,
  scenarios: {
    contacts: {
      executor: 'ramping-vus',
      startVUs: 0,
      stages: [
        { duration: '60s', target: 100 },
        { duration: '1m', target: 200 },
        { duration: '60s', target: 100 },
        { duration: '30s', target: 0 },
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

  let res = http.get(url,params);

  check(res, { 'status was 200': (r) => r.status == 200 });
  sleep(1);
}