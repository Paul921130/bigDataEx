import React from "react";
import styles from "./header.module.css";
import SettingsIcon from "@mui/icons-material/Settings";
const Header = () => {
    return (
        <div className={styles.header}>
            <div>LOGO</div>
            <div>
                <SettingsIcon />
            </div>
        </div>
    );
};

export default Header;
