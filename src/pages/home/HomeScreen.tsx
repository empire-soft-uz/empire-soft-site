import Image from "next/image";
import styles from "./home.module.css";
import { useState } from "react";
import OutSource from "./OutSource";
import Outstaffing from "./Outstaffing";

const HomeScreen = () => {
  const [isCode, setIsCode] = useState(false);

  return (
    <div className={styles.fullscreen}>
      <main className={styles.content}>
        <div data-aos="fade-up" className={styles.selectBtns}>
          <div
            className={styles.after}
            style={isCode ? { left: "138px", width: "140px" } : {}}
          ></div>
          <button
            onClick={() => setIsCode((prev) => !prev)}
            className={styles.btn}
          >
            <span>
              <Image
                src="/assets/code.svg"
                alt="logo"
                width={"24"}
                height={"24"}
              />
            </span>
            Outsource
          </button>
          <button
            className={styles.btn}
            onClick={() => setIsCode((prev) => !prev)}
          >
            <span>
              <Image
                src="/assets/users.svg"
                alt="logo"
                width={"24"}
                height={"24"}
              />
            </span>
            Outstaffing
          </button>
        </div>
        {!isCode ? <OutSource /> : <Outstaffing />}
      </main>
    </div>
  );
};

export default HomeScreen;
