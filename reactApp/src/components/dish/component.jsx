import { ButtonCount } from "../buttonCount/components";
import styles from './styles.module.scss';

export const Dish = ({ dish }) => {
    return  <div className={styles.root}>
                <div>{dish.name}</div>
                <div>{dish.price}</div>
                <ButtonCount />
            </div> 
};