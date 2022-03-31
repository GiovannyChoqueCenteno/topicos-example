import { Button, Form,  Modal } from 'react-bootstrap'
import { useForm } from 'react-hook-form'
import { useDispatch  } from 'react-redux'
import { IPersona } from '../../types/IPersona'
import {yupResolver} from '@hookform/resolvers/yup'
import { anadirPersona } from '../../store/slices/personas'
import useModal from '../../hooks/useModal'
import { personaSchema } from '../../utils/schemas/persona.schema'

const CustomModal = () => {
    const {register , handleSubmit , formState : {errors} , clearErrors ,reset} = useForm<IPersona>({
        mode : 'onSubmit',
        reValidateMode : 'onChange',
        resolver : yupResolver(personaSchema)
    })
    const  { isOpen, switchModal} = useModal(false);
    const dispatch = useDispatch()
          
    const onSubmit = (data: IPersona) => {
        dispatch(anadirPersona(data))
        switchModal()
        reset()
    };

    const resetForm = ()=>{
        switchModal();
        setTimeout(() => {
            reset();
            clearErrors()
        }, 300)
    }
    return (
        <>
            <Button variant='primary' onClick={switchModal}>
                Anadir Persona
            </Button>
            <Modal show={isOpen} onHide={resetForm} >
                <Form onSubmit={handleSubmit(onSubmit)}>
                    <Modal.Header closeButton>
                        <Modal.Title>Añadir Persona</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Form.Group className='mb-3' >
                            <Form.Label>Nombre </Form.Label>
                            <Form.Control {...register('nombre')} type="text" placeholder='Ingresar nombre' autoComplete='off' />
                        </Form.Group>
                        <p className='text-danger'>{errors.nombre?.message}</p>
                        <Form.Group className='mb-3' >
                            <Form.Label>Apellido</Form.Label>
                            <Form.Control {...register('apellido')}  type="text" placeholder='Ingresar apellido' autoComplete='off'/>

                        </Form.Group >
                        <p className='text-danger'>{errors.apellido?.message}</p>

                        <Form.Group className='mb-3' >
                            <Form.Label>Email</Form.Label>
                            <Form.Control {...register('email')}  type='email' placeholder='Ingresar edad'  autoComplete='off'/>

                        </Form.Group>
                        <p className='text-danger'>{errors.email?.message}</p>

                        <Form.Group className='mb-3' >
                            <Form.Label>Registro</Form.Label>
                            <Form.Control {...register('telefono')} type="number" placeholder='Ingresar registro' autoComplete='off' />

                        </Form.Group>
                        <p className='text-danger'>{errors.telefono?.message}</p>

                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant='danger' onClick={resetForm} >Cancelar</Button>
                        <Button variant='success' type="submit">Aceptar</Button>
                    </Modal.Footer>
                </Form>
            </Modal>
        </>
    )
}

export default CustomModal