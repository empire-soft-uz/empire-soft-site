import React from "react";
import styles from "./home.module.css";
import Image from "next/image";
const Outstaffing = () => {
  return (
    <>
      <div className={styles.main}>
        <h2>We Develop Complex Projects —</h2>
        <h1>Meet Our Team</h1>
      </div>
      <div className={styles.dev_list}>
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15].map(
          (item, index) => {
            return (
              <div
                key={index}
                className={styles.item_row}
                style={item % 2 == 0 ? { bottom: "-50px" } : { bottom: "0px" }}
              >
                <div className={styles.item_banner}></div>
                <div className={styles.item_banner}>
                  {item > 3 && item < 14 && (
                    <Image
                      src="/assets/dev.png"
                      alt="logo"
                      width={200}
                      height={200}
                    />
                  )}
                </div>
                <div className={styles.item_banner}></div>
              </div>
            );
          },
        )}
      </div>
    </>
  );
};

export default Outstaffing;
