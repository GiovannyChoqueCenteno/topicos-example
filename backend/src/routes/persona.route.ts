import {Router } from 'express'
import  * as personaController from '../controllers/persona.controller'

const router = Router();


router.get('/' , personaController.obtenerPersonas )

router.post('/' , personaController.anadirPersona)

router.delete('/:id',personaController.eliminarPersona)

export default router