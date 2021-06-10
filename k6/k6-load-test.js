import http from 'k6/http';
import { check, group, sleep } from 'k6';

export let options = {
  stages: [
    { duration: '30s', target: 10 }, // simulate ramp-up of traffic from 1 to 60 users over 5 minutes.
    { duration: '30s', target: 100 }, // stay at 60 users for 10 minutes
    { duration: '30s', target: 100 }, // ramp-up to 100 users over 3 minutes (peak hour starts)
    { duration: '30s', target: 100 }, // stay at 100 users for short amount of time (peak hour)
    { duration: '30s', target: 10 }, // ramp-down to 60 users over 3 minutes (peak hour ends)
    { duration: '30s', target: 1 }, // continue at 60 for additional 10 minutes
    { duration: '30s', target: 0 }, // ramp-down to 0 users
  ],
};

export default function () {

  const BASE_URL = 'https://reqres.in'; 

  let responses = http.batch([
    [
      'GET',
      `${BASE_URL}/api/users?page=2`,
      null,
      { tags: { name: 'User List' } },
      console.log("Get Request")
    ],

    [
      'POST',
      `${BASE_URL}/api/users`,
      {
        name: 'Morpheus',
        job: 'leader'
      },
      { tags: { name: 'Create User' } },
      console.log("Crate Request")
    ],

    [
      'PUT',
      `${BASE_URL}/api/users/2`,
      {
        name: 'Morpheus',
        job: 'leader'
      },
      { tags: { name: 'Update User' } },
      console.log("update Request")
    ],

    [
      'POST',
      `${BASE_URL}/api/login`,
      {
        email: 'eve.holt@reqres.in',
        password: 'cityslicka'
      },
      { tags: { name: 'User Login Token' } },
      console.log("Login Request")
    ],
  ]);
  check(responses[0], {
    'Status was 200': (res) => res.status === 200,
  });
  sleep(1);
}
