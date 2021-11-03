import express from 'express';
import * as path from 'path';
import refParser from '@apidevtools/json-schema-ref-parser';
import swaggerUi from 'swagger-ui-express';

const port = 3100;
const app = express();

app.get('/', async (req, res) => {
  res.redirect('/api-docs')
});

app.use(
  '/api-docs',
  async function (req: express.Request, res: express.Response, next: express.NextFunction) {
    const schemaFilePath = path.join(__dirname, 'schema', 'openapi.yml');

    try {
      // Resolve $ref in schema
      const swaggerDocument = await refParser.dereference(schemaFilePath);
      (req as any).swaggerDoc = swaggerDocument;

      next();
    } catch (err) {
      console.error(err);
      next(err);
    }
  },
  swaggerUi.serve,
  swaggerUi.setup()
);

app.listen(port, () => console.log(`Local web server listening on port ${port}!`));
