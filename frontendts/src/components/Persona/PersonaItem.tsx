import { Button } from "react-bootstrap"
import { IPersona } from "../../types/IPersona"
import ConfirmModal from "./ConfirmModal"

const PersonaItem : React.FC<IPersona> = ({id,nombre ,apellido ,email,telefono}) => {
  return (
    <tr >
        <td>
            {nombre}
        </td>
        <td>
            {apellido}
        </td>
        <td>
            {email}
        </td>
        <td>
            {telefono}
        </td>
        <td>
                <Button variant="warning">Actualizar</Button>
                {'    '}
                <ConfirmModal id={id} />
          </td>
    </tr>
  )
}

export default PersonaItem