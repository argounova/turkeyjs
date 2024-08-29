import MenuModal from "."
import { sidesMenu } from "../../data/menuItems"


const SidesModal = ({ shouldShowModal, onRequestClose }) => {
  return (
    <MenuModal 
      shouldShow={shouldShowModal}
      onRequestClose={onRequestClose}
    >
        <h2>Sides Menu</h2>
        <ul>
          {sidesMenu.map((item) => (
            <li key={item.id}>
              <h3>{item.name}</h3>
            </li>
          ))}
        </ul>
    </MenuModal>
  )
}

export default SidesModal