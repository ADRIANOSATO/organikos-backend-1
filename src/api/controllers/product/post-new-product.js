module.exports = class PostNewProductController {
    constructor(service) {
        this.product = service;
    }
    async execute(req, res) {
        try {
            const product = await this.product.create(req.body);
            res.status(201).send(JSON.stringify(product));
        } catch (error) {
            const errorObj = JSON.parse(error.message);
            if (errorObj.statusCode) {
                return res
                    .status(errorObj.statusCode)
                    .send(JSON.stringify(errorObj));
            } else {
                return res.status(500).send(error.message);
            }
        }
    }
};
