"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppDataSource = void 0;
const typeorm_1 = require("typeorm");
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
exports.AppDataSource = new typeorm_1.DataSource({
    "type": "mysql",
    "host": "localhost",
    "port": 3306,
    "username": "root",
    "password": "Amma@431",
    "database": "bookie",
    "synchronize": false,
    "logging": true,
    "entities": [
        "dist/entity/*.js"
    ],
    "migrations": [
        "src/database/migrations  /**/*.ts"
    ],
    "subscribers": [
    // "src/subscriber/**/*.ts"
    ],
    // "cli": {
    // 	"entitiesDir": "src/entity",
    // 	"migrationsDir": "src/migration",
    // 	"subscribersDir": "src/subscriber"
    // } 
});
