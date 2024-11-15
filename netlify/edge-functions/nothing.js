const rewrite = async (request, context) => {
    return await context.next();
};

export const config = {
    path: '/*'
};

export default rewrite;
