import MenuModal from "."
import { dessertsMenu } from "../../data/menuItems"
import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Button
} from '@mui/material'


const DessertsModal = ({ shouldShowDesModal, onRequestClose }) => {
  return (
    <MenuModal 
      shouldShow={shouldShowDesModal}
      onRequestClose={onRequestClose}
    >
      <Card sx={{ maxWidth: 345 }}>
        <CardMedia
          component="img"
          height="140"
          image="/desserts-modal-media.png"
          alt="Desserts Image"
        />
        <CardContent>
          {dessertsMenu.map((item) => (
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

export default DessertsModal