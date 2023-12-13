const options = {
    definition: {
        openapi: '3.0.0',
        info: {
            title: 'Music Store API',
            version: '1.0.0',
        },
    },
    apis: ['./src/controllers/*.ts'], // path to the API docs
};

export default options;