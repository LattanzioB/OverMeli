import axios from 'axios';

const body = {
    'grant_type': 'authorization_code',
    'client_id': '275195427390645',
    'client_secret': 'cMmJPpuM8oCgEpOQFguKNqgbL6l9PqGi',
    'code': 'TG-660efbd89c21a40001269961-165015102',
    'redirect_uri': 'https://localhost/overmeli'
}

let token = 'BearerAPP_USR-275195427390645-040415-43e65a3a3d9d9fc4acff3e1e97063055-165015102';

async function updateToken(){
    const url = 'https://api.mercadolibre.com/oauth/token';

    try {
        const response = await axios.post(url, body );

        token = 'Bearer' + response.data.access_token;
        console.log(token)
        return 'completo';

    } catch (error) {
        // Manejar errores aquí
        console.error('Error en la solicitud de eventos:', error);
        throw error;
    }

}



async function firstCall() {

    const header = {'Authorization': token}

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


firstCall()