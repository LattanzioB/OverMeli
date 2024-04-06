import { TokenController } from "../controller/token_controller.mjs";

export class TokenService{

    constructor(){
        this._auth_token = 'BearerAPP_USR-275195427390645-040415-43e65a3a3d9d9fc4acff3e1e97063055-165015102';
        this._token_controller = new TokenController();
    }

    async update_token(){
        await this._token_controller.update_token(this);
    }

    get_token(){

        return this._auth_token;
    }

    set_token(token){
        this._auth_token = token;
    }

}