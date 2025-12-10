const express = require("express");
const router = express.Router();
const Product = require("../models/product");

router.get("/product/:productId", async (req, res) => {
    try {
        const product = await Product.findOne({ productId: req.params.productId });

        if (!product) {
            return res.status(404).json({ message: "product not found" });
        }

        res.json(product);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});


router.put("/product/:productId", async (req, res) => {
    try {
        const updatedProduct = await Product.findOneAndUpdate(
            { productId: req.params.productId },
            req.body,
            { new: true } // devuelve el actualizado
        );

        if (!updatedProduct) {
            return res.status(404).json({ message: "product not found" });
        }

        res.json(updatedProduct);

    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

module.exports = router;