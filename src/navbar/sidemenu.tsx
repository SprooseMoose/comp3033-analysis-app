import {NavLink} from "react-router-dom";
import styles from './sidemenu.module.css';

const Sidemenu = (): JSX.Element => {

    const logoPath = require("../images/metric-mining-logo.png");

    return (
        <div className={styles.sideMenu}>
            <NavLink to="/">
                <img className={styles.logo} src={logoPath} alt={"metro-mining-logo"}/>
            </NavLink>
            <nav className={styles.nav}>
                <NavLink className={styles.navLink} to="/">Home</NavLink>
                <NavLink className={styles.navLink} to="/keywords">Keywords</NavLink>
                <NavLink className={styles.navLink} to="/search">Search</NavLink>
            </nav>
        </div>
    );
};

export default Sidemenu;