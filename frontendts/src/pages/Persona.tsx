import {  useEffect } from 'react'
import { Container, Table, Row, Col } from 'react-bootstrap'
import { useSelector, useDispatch } from 'react-redux'
import CustomModal from '../components/Persona/CustomModal'
import PersonaItem from '../components/Persona/PersonaItem'
import { RootState } from '../store'
import { obtenerPersonas } from '../store/slices/personas'
import { IPersona } from '../types/IPersona'
import { IPersonaState } from '../types/IPersonaState'

const Persona = () => {
    const { personas, loading } = useSelector<RootState, IPersonaState>(state  => state.personas)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(obtenerPersonas())
    }, [dispatch])
    
    return (
        <Container>
            <Row>
                <Col className='text-center' >
                    <h1>CRUD</h1>
                </Col>
            </Row>
            {loading ?
                <h2>Cargando</h2>
                :
                (<>
                <Row>

                    <Table  hover>
                        <thead>
                            <tr>
                                <th>Nombre</th>
                                <th>Apellido</th>
                                <th>Edad</th>
                                <th>Registro</th>
                                <th>Acciones</th>
                            </tr>
                        </thead>
                        <tbody>
                            {personas.map((persona : IPersona) => (
                                <PersonaItem   key={persona.id} {...persona} />
                            ))}
                        </tbody>
                    </Table>
                </Row>
                <Row>
                    <Col >
                        {' '}
                        <CustomModal />
                    </Col>
                </Row>
            </>)
        }
        </Container>
    )
}

export default Persona