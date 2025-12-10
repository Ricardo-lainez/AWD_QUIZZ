require('dotenv').config();
const express = require("express");
const mongoose = require("mongoose");
const app = express();

// Middleware para leer JSON del body
app.use(express.json());

// ================================
// Conexión a MongoDB
// ================================
mongoose.connect(process.env.MONGODB_URI);
const db = mongoose.connection;
db.on("error", (error) => console.error("error:", error));
db.once("open", () => console.log("BocattoValley connect successful to MongoDB"));

// ================================
// Ruta base para comprobar que funciona
// ================================
app.get("/", (req, res) => {
  res.send("API BocattoValley is running");
});

// ================================
// Rutas
// ================================
const productRouter = require("./routes/productRoutes");
app.use("/bocattovalley", productRouter);

// ================================
// Servidor
// ================================
const port = process.env.PORT || 4014;
app.listen(port, () => console.log(`Servidor BocattoValley in port${port}`));