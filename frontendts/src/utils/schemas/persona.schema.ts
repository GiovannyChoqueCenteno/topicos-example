import * as yup from 'yup'

export const personaSchema = yup.object({
    nombre : yup.string().required('El nombre es requerido'),
    apellido : yup.string().required('El apellido es requerido'),
    email : yup.string().required('El email es requerido').email('Debe ser email'),
    telefono : yup.number().typeError('Debe ser un numero').required('El numero no puede estar vacio')
})