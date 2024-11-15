import { MiddlewareRequest } from '@netlify/next';

export async function middleware(nextRequest) {
    const request = new MiddlewareRequest(nextRequest);
    const resp = await request.next();
    return resp.headers.set('x-hello', 'world');
}
