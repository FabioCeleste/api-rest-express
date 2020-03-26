import Sequelize from 'sequelize';
import dataBaseConfig from '../config/database';

import User from '../models/UserModel';

const models = [User];

const connection = new Sequelize(dataBaseConfig);

models.forEach((model) => model.init(connection));
