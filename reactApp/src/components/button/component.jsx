import styles from './styles.module.scss'

export const Button = ({text, onClick, disabled}) => {
    return <button onClick={onClick}
                   className={styles.root}
                   disabled={disabled}>{text}</button>
};