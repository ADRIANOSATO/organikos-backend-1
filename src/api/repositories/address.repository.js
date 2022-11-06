const Address = require('../database/models/address.model');

async function findSellerAddress(id) {
    try {
        return await Address.findOne({
            where: {
                id_sellers: id,
            },
        });
    } catch (error) {
        console.log(error);
    }
}

async function createSellerAddress(address, id) {
    try {
        return await Address.create({
            id_sellers: id,
            street: address.street,
            number: address.number,
            complement: address.complement,
            city: address.city,
            state: address.state,
            zip_code: address.zipCode,
            country: address.country,
        });
    } catch (error) {
        throw new Error(error);
    }
}

async function createUserAddress(address, id) {
    try {
        return await Address.create({
            id_users: id,
            street: address.street,
            number: address.number,
            complement: address.complement,
            city: address.city,
            state: address.state,
            zip_code: address.zipCode,
            country: address.country,
        });
    } catch (error) {
        throw new Error(error);
    }
}

module.exports = {
    findSellerAddress,
    createSellerAddress,
    createUserAddress,
};
