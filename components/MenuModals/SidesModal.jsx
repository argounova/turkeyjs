import MenuModal from "."
import { sidesMenu } from "../../data/menuItems"


const SidesModal = ({ shouldShowSidesModal, onRequestClose }) => {
  return (
    <MenuModal 
      shouldShow={shouldShowSidesModal}
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