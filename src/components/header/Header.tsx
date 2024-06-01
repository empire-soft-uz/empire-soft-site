import Image from "next/image";
import styles from "./header.module.css";

const Header = () => {
    return (
        <header className={styles.header}>
            <div className={styles.container}>
                <div>
                    <span>
                        <Image
                            alt="logo"
                            src="/assets/logo.svg"
                            width={"100"}
                            height={"48"}
                        />
                    </span>
                </div>
                <nav>
                    <ul>
                        <li>
                            <a href="#portfolio">Portfolio</a>
                        </li>
                        <li>
                            <a href="#services">Services</a>
                        </li>
                        {/* <li>
              <a href="#development">Development</a>
            </li> */}
                    </ul>
                </nav>
                <div className={styles.btns}>
                    <button className={styles.lang}>
                        {/* <span>
                            <Image
                                alt="lang"
                                src={"/assets/lang.svg"}
                                width={"20"}
                                height={"20"}
                            />
                        </span>
                        English */}
                    </button>
                    <button>
                        <a href="#contact">Start development</a>
                    </button>
                </div>
            </div>
        </header>
    );
};

export default Header;
