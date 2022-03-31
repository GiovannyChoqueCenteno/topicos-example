import { Button, Modal } from 'react-bootstrap'
import { useDispatch } from 'react-redux';
import useModal from '../../hooks/useModal'
import { eliminarPersona } from '../../store/slices/personas';
const ConfirmModal : React.FC<{id : number}> = ({id}) => {

    const { isOpen, switchModal } = useModal(false);

    const dispatch = useDispatch();

    const eliminar = ()=>{
        dispatch(eliminarPersona(id))
    }
    return (
        <>
            <Button variant='danger' onClick={switchModal}>
                    Eliminar
            </Button>
            <Modal show={isOpen} onHide={switchModal}>
                <Modal.Header closeButton>
                    <Modal.Title>Eliminar Persona</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <p>¿Desea eliminar esta persona?</p>
                </Modal.Body>

                <Modal.Footer>
                    <Button variant="secondary" onClick={switchModal}>Cancelar</Button>
                    <Button variant="success" onClick={eliminar}>Confirmar</Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}
export default ConfirmModal