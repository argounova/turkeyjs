import MenuModal from "."
import { sidesMenu } from "../../data/menuItems"
import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Button
} from '@mui/material'


const SidesModal = ({ shouldShowSidesModal, onRequestClose }) => {
  return (
    <MenuModal 
      shouldShow={shouldShowSidesModal}
      onRequestClose={onRequestClose}
    >
      <Card sx={{ maxWidth: 345 }}>
        <CardMedia
          component="img"
          height="140"
          image="/sides-modal-media.png"
          alt="Sides Image"
        />
        <CardContent>
          {sidesMenu.map((item) => (
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

export default SidesModal