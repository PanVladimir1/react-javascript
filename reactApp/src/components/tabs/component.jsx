import { useState } from "react";
import { Tab } from "../tab/component";
import { Menu } from "../menu/component";
import { Reviews } from "../reviews/component";
import styles from './styles.module.scss'

export const Tabs = ({restaurants}) => {
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
            <div className={styles.tabContent}>
                <h2>{restaurants[activeTab].name}</h2>
                <h3>Menu</h3>
                <Menu menu={restaurants[activeTab].menu}/>
                <h3>Reviews</h3>
                <Reviews reviews={restaurants[activeTab].reviews}/>
            </div>
        </div>
};