const express = require("express");
const router = express.Router();

const auth = require("../middleware/userMiddleware");
const {addProduct,deleteProduct,updateProduct} = require("../controller/productController");

router.post("/add", auth,addProduct );
router.post("/delete", auth,deleteProduct );
router.get("/update", auth, updateProduct);

module.exports = router;