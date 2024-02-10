import { useContext } from "react";
import { Menu } from "../menu/component";
import { ReviewForm } from "../review-form/component";
import { Reviews } from "../reviews/component";
import styles from './styles.module.scss'
import { UserContext } from "../contexts/user";

export const RestaurantContent = ({restaurant}) => {
    const {user} = useContext(UserContext);

    return <div className={styles.tabContent}>
                <h2>{restaurant.name}</h2>
                <h3>Menu</h3>
                <Menu menu={restaurant.menu}/>
                <h3>Reviews</h3>
                <Reviews reviews={restaurant.reviews}/>
                {user && <ReviewForm />}
            </div>            
};