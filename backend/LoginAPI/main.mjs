/*import { LoginController } from "./controller/login_controller.mjs";
import axios from 'axios';


const login_controller = new LoginController(); 

const axiosClient = axios.create({
    baseURL: `https://api.example.com`,
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    }
  });

async function main(){
    login_controller.logIn("user1", "password1")
}
*/
import {express} from 'express';
//import { MongoClient } from "mongodb";
import mongoose from 'mongoose';
const axios = require('axios');

// Conecta a la base de datos MongoDB
mongoose.connect('mongodb://localhost:27017/nombre-de-tu-base-de-datos', { useNewUrlParser: true, useUnifiedTopology: true });
const db = mongoose.connection;

db.on('error', console.error.bind(console, 'Error de conexión a MongoDB:'));
db.once('open', () => console.log('Conectado a la base de datos MongoDB'));

// Definir el esquema del usuario
const userSchema = new mongoose.Schema({
  username: String,
  password: String
});

const User = mongoose.model('User', userSchema);

const app = express();
app.use(express.json());

// Ruta para registrar un nuevo usuario
app.post('/register', async (req, res) => {
  try {
    const { username, password } = req.body;
    const user = new User({ username, password });
    await user.save();
    res.send('Usuario registrado correctamente');
  } catch (error) {
    res.status(500).send('Error al registrar el usuario');
  }
});

// Ruta para iniciar sesión
app.post('/login', async (req, res) => {
  try {
    const { username, password } = req.body;
    const user = await User.findOne({ username, password });
    if (user) {
      res.send('Inicio de sesión exitoso');
    } else {
      res.status(401).send('Credenciales incorrectas');
    }
  } catch (error) {
    res.status(500).send('Error al iniciar sesión');
  }
});

const PORT = 8000;
app.listen(PORT, () => console.log(`Servidor corriendo en http://localhost:${PORT}`));