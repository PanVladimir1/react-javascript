import { Menu } from "../menu/component";
import { Reviews } from "../reviews/component";
import styles from './styles.module.scss'

export const RestaurantContent = ({restaurant}) => {
    return <div className={styles.tabContent}>
                <h2>{restaurant.name}</h2>
                <h3>Menu</h3>
                <Menu menu={restaurant.menu}/>
                <h3>Reviews</h3>
                <Reviews reviews={restaurant.reviews}/>
            </div>
};