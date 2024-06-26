import { IService } from "../../interfaces/service";
import { Product, ProductWithoutId } from "./product.model";

export class ProductService implements IService<Product> {
  constructor() {}

  create(item: ProductWithoutId) {
    return Product.create({ data: { ...item } });
  }
  getAll() {
    return Product.findMany();
  }
  getById(id: number) {
    return Product.findUnique({ where: { id } });
  }
  delete(id: number) {
    return Product.delete({ where: { id } });
  }
  update(id: number, item: ProductWithoutId | Product) {
    return Product.update({ where: { id: id }, data: item });
  }
}
