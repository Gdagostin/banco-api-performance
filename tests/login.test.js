import http from 'k6/http';
import { check, sleep } from 'k6';
import { pegarBaseURL } from '../Utils/variaveis.js';
const postLogin = JSON.parse(open('../fixtures/postLogin.json'));

export const options = {
    // stages: [
    //     { duration: '5s', target: 10 },
    //     { duration: '20s', target: 10 },
    //     { duration: '10s', target: 30 },
    //     { duration: '20s', target: 30 },
    //     { duration: '20s', target: 0 }
    // ],
    iterations: 1,
    // vus: 10,
    // duration: '30s',
    thresholds: {
        http_req_failed: ['rate<0.01'], // http errors should be less than 1%
        http_req_duration: ['p(90)<1000', 'max<2000'] // 90% of requests should be below 2ms, max should be below 1ms
    }
};
export default function () {

        // Define the URL for the login endpoint
        const url = pegarBaseURL() + '/login';

        // Define the payload for the login request
        const payload = JSON.stringify(postLogin);

        const params = {
            headers: {
                'Content-Type': 'application/json',
            },
        };

        const res = http.post(url, payload, params);

        // Check if the response status is 200
        check(res, {
            'validar que o status é 200': (r) => r.status === 200,
            'validar que o token é string': (r) => typeof (r.json().token) === 'string',
            'response time < 200ms': (r) => r.timings.duration < 200,
        });

        sleep(1);
    };