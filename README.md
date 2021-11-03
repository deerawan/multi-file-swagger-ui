# Multi File Swagger UI

Example of how to generate Swagger UI based on multiple YAML file. There are two schema files:

1. openapi.yml => the main yaml file to define Open API
2. entities.yml => store entities schema used by openapi.y/ml

Tools used:

- [Express](https://expressjs.com/)
- [Swagger UI Express](https://www.npmjs.com/package/swagger-ui-express)
- [JSON Schema Ref Parser](https://www.npmjs.com/package/json-schema-ref-parser)

## Start

Run

```sh
npm start
```

Then open URL http://localhost:3100/api-docs
