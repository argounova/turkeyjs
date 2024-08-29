import MenuModal from "."
import { dessertsMenu } from "../../data/menuItems"


const DessertsModal = ({ shouldShowDesModal, onRequestClose }) => {
  return (
    <MenuModal 
      shouldShow={shouldShowDesModal}
      onRequestClose={onRequestClose}
    >
        <h2>Desserts Menu</h2>
        <ul>
          {dessertsMenu.map((item) => (
            <li key={item.id}>
              <h3>{item.name}</h3>
            </li>
          ))}
        </ul>
    </MenuModal>
  )
}

export default DessertsModal