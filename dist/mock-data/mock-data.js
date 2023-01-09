"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const generate_data_1 = require("./generate-data");
let mockData = {
    products: generate_data_1.generateProducts(10),
    users: generate_data_1.generateUsers(5),
    purchases: [],
    couponCode: "ABC123",
    couponInterval: 3
};
exports.default = mockData;
//# sourceMappingURL=mock-data.js.map