const isValidUUID = require('../../helpers/uuid-validator.helper');
module.exports = class GetSellerByIdService {
    constructor(repository) {
        this.repository = repository;
    }
    async getById(id) {
        try {
            if (!isValidUUID(id)) throw new Error('Id is not a valid uuid id');
            return await this.repository.getById(id);
        } catch (error) {
            throw new Error(
                JSON.stringify({ error: error.message, statusCode: 400 })
            );
        }
    }
};
