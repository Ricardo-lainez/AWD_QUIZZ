const mongoose = require("mongoose");
const productSchema = new mongoose.Schema({
    productId: { type: Number, required: true, unique: true },   // ID único del producto
    name: { type: String, required: true },
    description: { type: String },
    price: { type: Number, required: true },
    img: { type: String }, // URL o ruta
    available: { type: Boolean, default: true },
    category: { type: String },
    subcategory: { type: String },
    currentStock: { type: Number, default: 0 },
    creationDate: { type: Date, default: Date.now },
    ingredients: { type: [String], default: [] },
    nutritionalInfo: {
        calories: Number,
        protein: String,
        carbs: String,
        fat: String
    },

    allergens: { type: [String], default: [] },
    spiceLevel: { type: String }, 
    preparationTime: { type: Number }, // min
    tags: { type: [String], default: [] },
    updatedAt: { type: Date, default: Date.now }
},
{collection: "products"});

module.exports = mongoose.model("products", productSchema);