"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require('dotenv').config();
;
const config = {
    PORT: process.env.PORT || 8000,
    NODE_ENV: process.env.NODE_ENV || 'development',
    CLIENT_ORIGIN: process.env.CLIENT_ORIGIN || 'https://symetra-store.vercel.app'
};
exports.default = config;
//# sourceMappingURL=config.js.map