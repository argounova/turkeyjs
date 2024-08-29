import MenuModal from "."
import { drinksMenu } from "../../data/menuItems"


const DrinksModal = ({ shouldShowDrinksModal, onRequestClose }) => {
  return (
    <MenuModal 
      shouldShow={shouldShowDrinksModal}
      onRequestClose={onRequestClose}
    >
        <h2>Drinks Menu</h2>
        <ul>
          {drinksMenu.map((item) => (
            <li key={item.id}>
              <h3>{item.name}</h3>
            </li>
          ))}
        </ul>
    </MenuModal>
  )
}

export default DrinksModal