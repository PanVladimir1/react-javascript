import { LoginControl } from '../login-control/component';
import styles from './styles.module.scss';

export const Header = () => {
    return <header className={styles.root}>Header
        <LoginControl />
    </header>
};