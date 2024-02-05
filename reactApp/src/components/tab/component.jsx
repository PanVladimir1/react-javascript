import styles from './styles.module.scss'

export const Tab = ({restaurant, onClick, isActive}) => {
    return <div className={isActive ? styles.tabActive : styles.tab}
                onClick={onClick}>
                {restaurant.name}
            </div>
};