import http from 'k6/http';
import { check, sleep } from 'k6';

export const options = {
    // Define the number of iterations for the test
    iterations: 50,
    thresholds: {
        http_req_failed: ['rate<0.01'], // http errors should be less than 1%
        http_req_duration: ['p(90)<2', 'max<1'] // 90% of requests should be below 2ms, max should be below 1ms
    },
};

export default function () {
    // Define the URL for the login endpoint
    const url = 'http://localhost:3000/login';

    // Define the payload for the login request
    const payload = JSON.stringify({
        username: 'julio.lima',
        senha: '123456',
    });

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