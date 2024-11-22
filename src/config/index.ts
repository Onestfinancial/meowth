// src/config/index.ts
import { databaseConfig } from './database';
import { environmentConfig } from './environment';
import { serverConfig } from './server';

export default {
  database: databaseConfig,
  environment: environmentConfig,
  server: serverConfig,
};
