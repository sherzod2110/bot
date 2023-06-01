"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.myDataSource = void 0;
const dotenv = require("dotenv");
const typeorm_1 = require("typeorm");
const user_entity_1 = require("../entities/user.entity");
const count_entity_1 = require("../entities/count.entity");
dotenv.config();
exports.myDataSource = new typeorm_1.DataSource({
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    password: 'sherzod2110',
    username: 'postgres',
    database: 'bot',
    entities: [user_entity_1.UsersEntity, count_entity_1.CountEntity],
    synchronize: true,
});
//# sourceMappingURL=typeorm.js.map