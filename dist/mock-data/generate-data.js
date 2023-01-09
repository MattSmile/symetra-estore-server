"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateUsers = exports.generateProducts = void 0;
// Creates fake data for use on this demo eCommerce site
// It is intended to demonstrate scalability
const faker_1 = __importDefault(require("faker"));
// Generates data about products
// Generates a set number of random products
exports.generateProducts = (count) => {
    const mockProducts = [];
    for (let i = 0; i < count; i++) {
        const mockProduct = {
            id: faker_1.default.random.uuid(),
            name: faker_1.default.random.words(2),
            // Forcing a float value on a random number. Forcing 2 decimal places for currency
            price: parseFloat(faker_1.default.random.number({ min: 1, max: 2000, precision: 0.01 }).toFixed(2)),
            details: faker_1.default.lorem.paragraph(4)
        };
        mockProducts.push(mockProduct);
    }
    return mockProducts;
};
// Generates data about users
// Generates a set number of random products
exports.generateUsers = (count) => {
    const mockUsers = [];
    for (let i = 0; i < count; i++) {
        const mockUser = {
            id: faker_1.default.random.uuid(),
            name: `${faker_1.default.name.firstName()} ${faker_1.default.name.lastName()}`,
            hasCoupon: false,
            couponCode: null,
            purchases: []
        };
        mockUsers.push(mockUser);
    }
    return mockUsers;
};
//# sourceMappingURL=generate-data.js.map