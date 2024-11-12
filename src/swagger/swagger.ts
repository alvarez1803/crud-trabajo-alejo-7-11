import swaggerJsdoc, { Options } from 'swagger-jsdoc';

const swaggerOptions: Options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Backend Service API",
      version: "1.0.0",
      description: "API para Catálogo de Perros y sus caracteristicas",
    },
    servers: [
      {
        url: "http://localhost:3000/",
      },
    ],
  },
  apis: ["./src/routes/productRoutes.ts"],
};

const swaggerSpec = swaggerJsdoc(swaggerOptions);

export default swaggerSpec;