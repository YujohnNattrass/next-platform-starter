export default async function nothing(request, context) {
    console.log(`req made to ${request.url}`);
    return await context.next();
}

export const config = {
    path: '/*'
};
