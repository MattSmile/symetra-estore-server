"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require('dotenv').config();
const express_1 = __importDefault(require("express"));
const morgan_1 = __importDefault(require("morgan"));
const cors_1 = __importDefault(require("cors"));
const helmet_1 = __importDefault(require("helmet"));
const config_1 = __importDefault(require("./config"));
const admin_router_1 = __importDefault(require("./admin/admin-router"));
const users_router_1 = __importDefault(require("./users/users-router"));
const products_router_1 = __importDefault(require("./products/products-router"));
const purchases_router_1 = __importDefault(require("./purchases/purchases-router"));
const app = express_1.default();
const morganOpt = (config_1.default.NODE_ENV === 'production') ? 'tiny' : 'common';
app.use(morgan_1.default(morganOpt), helmet_1.default(), cors_1.default(config_1.default.CLIENT_ORIGIN));
// API Endpoint Routers
app.use('/api/admin', admin_router_1.default);
app.use('/api/users', users_router_1.default);
app.use('/api/products', products_router_1.default);
app.use('/api/purchases', purchases_router_1.default);
const errorHandler = (err, req, res, next) => {
    let response;
    if (config_1.default.NODE_ENV === 'production') {
        response = {
            error: {
                message: 'server error'
            }
        };
    }
    else {
        // tslint:disable-next-line:no-console
        console.error(err);
        response = {
            message: err.message, err
        };
    }
    res.status(500).json(response);
};
app.use(errorHandler);
exports.default = app;
//# sourceMappingURL=app.js.map