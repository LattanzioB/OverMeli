import axios from 'axios';

export class TokenController{
    
    async update_token(tokenService){
        const body = {
            'grant_type': 'authorization_code',
            'client_id': '275195427390645',
            'client_secret': 'cMmJPpuM8oCgEpOQFguKNqgbL6l9PqGi',
            //en un futuro pasar el code a token_service para actualizacion automatica
            'code': 'TG-6611a5283cbba900011dae6c-165015102',
            'redirect_uri': 'https://localhost/overmeli'
        }


        const url = 'https://api.mercadolibre.com/oauth/token';

        try {
            const response = await axios.post(url, body );

            let token = 'Bearer' + response.data.access_token;
            tokenService.set_token(token)
            console.log(token)
            return 'completo';

        } catch (error) {
            // Manejar errores aquí
            console.error('Error en la solicitud de eventos:', error);
            throw error;
        }

    }

}