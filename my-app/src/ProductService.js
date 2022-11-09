import axios from "axios";
const PRODUCT_API_BASE_URL = "http://localhost:8080/api/v1/product/id";
class ProductService {
  getProductById(productId) {
    console.log(`${PRODUCT_API_BASE_URL}`);
    const data = { id: `${productId}` };
    console.log(`${productId}`);
    const options = {
      method: "GET",
      mode: "no-cors",
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Content-Type": "application/json",
        Accept: "*",
      },
      data: JSON.stringify(data),
      url: `${PRODUCT_API_BASE_URL}`,
    };
    return axios(options);
  }
}
export default new ProductService();
