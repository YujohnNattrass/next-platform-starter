export default async function nothing(req, context) {
    console.log(`req made to ${req.url} has header: ${!!req.headers.get(`x-nothing`)}`);
    if (req.headers.get(`x-nothing`)) {
        return await context.next();
    }

    const headers = new Headers(Array.from(req.headers.entries()));
    headers.set('x-nothing', '1');
    const newReq = new Request(req, {
        headers
    });

    return await fetch(newReq);
}

export const config = {
    path: '/*'
};
