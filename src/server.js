require('dotenv').config();
const express = require('express');
const swaggerUi = require('swagger-ui-express');
const YAML = require('yamljs');
const userRoutes = require('./routes/userRoutes');
const foodRoutes = require('./routes/foodRoutes');
const mealRoutes = require('./routes/mealRoutes');

const app = express();
app.use(express.json());

// Defaults for environment variables for ease of testing / execução em memória
process.env.JWT_SECRET = process.env.JWT_SECRET || 'dev_secret_change_me';

// Swagger
const swaggerDocument = YAML.load('./swagger.yaml');
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

// Routes
app.use('/users', userRoutes);
app.use('/foods', foodRoutes);
app.use('/meals', mealRoutes);

// Error handler
app.use((err, req, res, next) => {
  res.status(err.status || 500).json({ error: err.message });
});

// Start server only when executed directly. Tests can import the app without starting the server.
if (require.main === module) {
  const port = process.env.PORT || 3000;
  app.listen(port, () => console.log('Servidor rodando na porta', port));
}

module.exports = app;
