import Sequelize from 'sequelize';
import dotenv from 'dotenv';

import Log from './Log.js';

dotenv.config();

const BD_NAME = process.env.BD_NAME;
const BD_USER = process.env.BD_USER;
const BD_PASSWORD = process.env.BD_PASSWORD;

const BD_HOST = process.env.BD_HOST;
const BD_TYPE = process.env.BD_TYPE;

export const sequelize = new Sequelize(BD_NAME, BD_USER, BD_PASSWORD, {
    host: BD_HOST,
    dialect: BD_TYPE
});

export const DBLog = Log(sequelize);

await sequelize.sync();