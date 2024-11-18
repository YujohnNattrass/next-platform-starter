import { MiddlewareRequest } from '@netlify/next';

export async function middleware(nextRequest) {
    const request = new MiddlewareRequest(nextRequest);
    const resp = await request.next();
    console.log(`### RESP`, resp);
    return resp.headers.set('x-hello', 'world');
}
