import { ProductController } from "./controller/product_controller.mjs"
import { TokenService } from "./service/token_service.mjs"

const token_service = new TokenService();
const product_controller = new ProductController(token_service);


async function main(){
    await token_service.update_token();
    await product_controller.first_call();
}

main()


