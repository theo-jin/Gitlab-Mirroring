import { model } from "mongoose";
import { ProductSchema } from "../schemas/product-schema";

const Product = model("products", ProductSchema);

export class ProductModel {
  async findByProductName(productName) {
    const product = await Product.findOne({ productName });
    return product;
  }

  async findById(productId) {
    const product = await Product.findOne({ _id: productId });
    return product;
  }

  async findByCategory(category) {
    const products = await Product.find({ category });
    return products;
  }

  async create(productInfo) {
    const createdNewProduct = await Product.create(productInfo);
    return createdNewProduct;
  }

  async findAll() {
    const products = await Product.find({});
    return products;
  }

  async update({ productInfoRequired, toUpdate }) {
    const filter = { productName: productInfoRequired.productName };
    const option = { returnOriginal: false };

    const updatedProduct = await Product.findOneAndUpdate(
      filter,
      toUpdate,
      option
    );
    return updatedProduct;
  }

  async deleteProduct(productName) {
    const deletedProduct = await Product.deleteOne({ productName });
    return deletedProduct;
  }
}

const productModel = new ProductModel();

export { productModel };