"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const ProductsService = {
    // Generally these methods will interact with a DB of some kind.
    // The implementation is basic here since we do not need a
    // persistent data layer or any sort of authentication
    // Get all products
    getProducts: (dataSrc) => __awaiter(void 0, void 0, void 0, function* () {
        return dataSrc.products;
    })
};
exports.default = ProductsService;
//# sourceMappingURL=products-service.js.map