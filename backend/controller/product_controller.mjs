import axios from 'axios';

export class ProductController{
    
    constructor(tokenService){
        this._tokenService = tokenService;
    }

    async first_call() {

        const header = {'Authorization': this._tokenService.get_token()}

        const url = 'https://api.mercadolibre.com/products/search'
        const params = {
            'status': 'active',
            'site_id': 'MLA',
            'q': 'Samsung 20 Galaxy S8 64 GB rosa',

        };


        try {
            const response = await axios.get(url, {params, headers: header});
            console.log(response.data);
            return 'completo';

        } catch (error) {
            // Manejar errores aquí
            console.error('Error en la solicitud de eventos:', error);
            throw error;
        }
    }

}
