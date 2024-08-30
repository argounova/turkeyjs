import MenuModal from "."
import { drinksMenu } from "../../data/menuItems"
import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Button
} from '@mui/material'


const DrinksModal = ({ shouldShowDrinksModal, onRequestClose }) => {
  return (
    <MenuModal 
      shouldShow={shouldShowDrinksModal}
      onRequestClose={onRequestClose}
    >
      <Card sx={{ maxWidth: 345 }}>
        <CardMedia
          component="img"
          height="140"
          image="/drinks-modal-media.png"
          alt="Drinks Image"
        />
        <CardContent>
          {drinksMenu.map((item) => (
            <h3 key={item.id}>{item.name}</h3>
          ))}
        </CardContent>
        <CardActions>
          <Button size="small" href='/menu-suggestions'>Menu Suggestions?</Button>
        </CardActions>
      </Card> 
    </MenuModal>
  )
}

export default DrinksModal