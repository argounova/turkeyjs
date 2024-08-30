import MenuModal from "."
import { appetizersMenu } from "../../data/menuItems"
import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Button
} from '@mui/material'


const AppetizersModal = ({ shouldShowAppModal, onRequestClose }) => {
  return (
    <MenuModal 
      shouldShow={shouldShowAppModal}
      onRequestClose={onRequestClose}
    >
      <Card sx={{ maxWidth: 345 }}>
        <CardMedia
          component="img"
          height="140"
          image="/appetizers-image.png"
          alt="Appetizers"
        />
        <CardContent>
          {appetizersMenu.map((item) => (
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

export default AppetizersModal