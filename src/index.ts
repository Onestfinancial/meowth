import 'module-alias/register';
import 'reflect-metadata';
import { AppDataSource } from '@config/data-source';
import app from './app';
import config from '@config/index';
import serverless from 'serverless-http';

let dataSourceInitialized = false;

const initializeDataSource = async () => {
  if (!dataSourceInitialized) {
    try {
      console.log('Initializing Data Source...');
      await AppDataSource.initialize();
      dataSourceInitialized = true;
      console.info(
        'Loaded Entities:',
        AppDataSource.entityMetadatas.map((e) => e.name),
      );
      console.log('Data source initialized.');
    } catch (error) {
      console.error('Error initializing data source:', error);
      throw new Error('Database initialization failed');
    }
  }
};

// For Lambda environment, ensure the data source is initialized
export const handler = serverless(async (req: any, res: any) => {
  if (!dataSourceInitialized) {
    await initializeDataSource();
  }
  return app(req, res);
});

// For non-Lambda (local development or other environments)
if (!process.env.LAMBDA_TASK_ROOT) {
  initializeDataSource()
    .then(() => {
      const port = config.environment.port;
      app.listen(port, () => {
        console.log(`Server is running on port ${port}`);
      });
    })
    .catch((error) => {
      console.error(
        'Failed to initialize data source in non-Lambda environment:',
        error,
      );
    });
}
