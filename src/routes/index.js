import { Router } from 'express';
const router = Router();

const hora = new Date().toLocaleString('es-CO');
router.get('/', (req,res) => res.render ('index', {etiqueta: 'Mi primer sitio NodeJ', hora:hora}));
router.get('/sobre_nosotros', (req,res) => res.render ('sobre_nosotros', {etiqueta: 'Sobre nosotros'}));
router.get('/menu', (req,res) => res.render ('menu', {etiqueta: 'Menu'}));
router.get('/contactos', (req,res) => res.render ('contactos', {etiqueta: 'Página de contactos'}));
router.get('/registro', (req,res) => res.render ('registro', {etiqueta: 'Página de registro'}));

//Ruta GET para login (unica con mensajes incluidos)
router.get('/login', (req, res) => {
    res.render('login', { 
        etiqueta:'Vista de inicio de sesión', mensaje: null });
});


//Ruta POST para login
router.post('/login', (req, res) => {
    const { usuario, contrasena } = req.body;

    if (usuario === 'admin' && contrasena === '1234') {
        return res.redirect('/menu');    
    }
    return res.render('login', {
        etiqueta:'Vista de inicio de sesión',
        mensaje:'Usuario o contraseña incorrectos'
    });
});

export default router;
