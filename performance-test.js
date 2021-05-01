import http from 'k6/http';
import { check, sleep } from 'k6';

export let options = { 
  stages: [
    { duration: '30s', target: 50 },
    { duration: '1m30s', target: 50 },
    { duration: '20s', target: 0 },
  ],
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