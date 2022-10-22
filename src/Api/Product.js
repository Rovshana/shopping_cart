
 import Data from '../mocks/products/product.json'
import { mock, mockRequest } from '../mocks';


mock.onGet("/products").reply(200, {
    users: Data,
  });

  export const productApi = mockRequest('/products');