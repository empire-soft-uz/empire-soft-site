import React from "react";
import styles from "./alertStyles.module.css";

type Props = {
    onOk?: () => void;
    title?: string;
    message?: string;
};

const AlertModal: React.FC<Props> = ({ onOk, title, message }) => {
    return (
        <div className={styles.container}>
            <div className={styles.content}>
                <h1>{title}</h1>
                <p>{message}</p>
                <button onClick={onOk}>Ok</button>
            </div>
        </div>
    );
};

export default AlertModal;
