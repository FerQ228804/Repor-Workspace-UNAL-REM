import {Router} from 'express';
const router = Router();


//3. Boton "crear usuario"

//router.get('/registro', (req, res) => {
//    res.send('Formulario de registro de usuario');
//});

// 4. Enlace para recuperar contraseña
router.get('/recuperar-password', (req, res) => {
    res.send('Vista o logica para enviar el correo para recuperar contraseña');
});

// 5. Enlace para recordar usuario
router.get('/recordar-usuario', (req, res) => {
    res.send('Vista o logica para recordar el nombre de usuario');
});

//Ruta de ejemplo para mostrar un mensaje de exito en el login
router.get('/dashboard', (req, res) => {
    res.send('Bienvenido al Sistema');
});

export default router;