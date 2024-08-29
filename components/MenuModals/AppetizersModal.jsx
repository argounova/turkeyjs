import MenuModal from "."
import { appetizersMenu } from "../../data/menuItems"


const AppetizersModal = ({ shouldShowModal, onRequestClose }) => {
  return (
    <MenuModal 
      shouldShow={shouldShowModal}
      onRequestClose={onRequestClose}
    >
      <h2>Appetizers Menu</h2>
      <ul>
        {appetizersMenu.map((item) => (
          <li key={item.id}>
            <h3>{item.name}</h3>
          </li>
        ))}
      </ul>
    </MenuModal>
  )
}

export default AppetizersModal