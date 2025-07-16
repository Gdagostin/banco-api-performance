
import http from 'k6/http';
const postLogin = JSON.parse(open('../fixtures/postLogin.json'));


export function obterToken() {
    // Define the URL for the login endpoint
    const url = 'http://localhost:3000/login';

    // Define the payload for the login request
    const payload = JSON.stringify(postLogin);

    const params = {
        headers: {
            'Content-Type': 'application/json',
        },
    };

    const res = http.post(url, payload, params);

    return res.json('token');
};