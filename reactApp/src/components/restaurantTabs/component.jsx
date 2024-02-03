import { useState } from "react";
import { Tab } from "../tab/component";
import styles from './styles.module.scss'
import { RestaurantContent } from "../restaurantContent/component";

export const RestaurantTabs = ({restaurants}) => {
    const [activeTab, setActiveTab] = useState(0);
    const handleTabClick = (index) => {setActiveTab(index)};

    return <div className={styles.tabsContainer}>
            <div className={styles.tabs}>
                {restaurants.map((restaurant, index) => (
                    <Tab restaurant={restaurant}
                         onClick={() => handleTabClick(index)}
                         isActive={index === activeTab}
                    />
                ))}
            </div>
            <RestaurantContent restaurant={restaurants[activeTab]} />
        </div>
};