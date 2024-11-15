import { MiddlewareRequest } from '@netlify/next';

export async function middleware(nextRequest) {
    const request = new MiddlewareRequest(nextRequest);
    request.headers.set('x-hello', 'world');
    return request.next();
}

export const config = {
    matcher: '/*'
};
