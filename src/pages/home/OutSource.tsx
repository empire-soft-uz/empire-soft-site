import Image from "next/image";
import styles from "./home.module.css";
import React from "react";

const OutSource = () => {
  return (
    <>
      <div className={styles.texts}>
        <h2>Trusted Team is</h2>
        <h1>The Key To Success</h1>
      </div>
      <div className={styles.tools}>
        <Image
          src={"/assets/tools/react-original.svg"}
          width={"55"}
          height={"55"}
          alt="react"
        />
        <Image
          src={"/assets/tools/javascript-original.svg"}
          width={"55"}
          height={"55"}
          alt="react"
        />
        <Image
          src={"/assets/tools/flutter-original.svg"}
          width={"55"}
          height={"55"}
          alt="react"
        />
        <Image
          src={"/assets/tools/CSS3_logo.svg"}
          width={"55"}
          height={"55"}
          alt="react"
        />
        <Image
          src={"/assets/tools/golang-original.svg"}
          width={"110"}
          height={"55"}
          alt="react"
        />
        <Image
          src={"/assets/tools/node-original 1.svg"}
          width={"55"}
          height={"55"}
          alt="react"
        />
      </div>
      <div className={styles.footerText}>
        <p>
          In general, of course, the constant information and propaganda support
          of our activities does not give us any choice but to determine the
          withdrawal of current assets. While just part of the overall picture,
          findings from online analytics can be made public.
        </p>
      </div>
      <div className={styles.footerContent}>
        <div className={styles.left}>
          <div className={styles.images}>
            <div className={styles.userImg}>
              <Image
                src="/assets/dev.png"
                alt="logo"
                width={100}
                height={100}
              />
            </div>
            <div className={styles.userImg}>
              <Image src="/assets/dev.png" alt="lo" width={100} height={100} />
            </div>
            <div className={styles.userImg}>
              <Image src="/assets/dev.png" alt="lo" width={100} height={100} />
            </div>
            <div className={styles.userImg}>
              <Image src="/assets/dev.png" alt="lo" width={100} height={100} />
            </div>
          </div>
          <div className={styles.title}>
            <h1>Outstaffing</h1>
            <p>• available now</p>
          </div>
          <div className={styles.describe}>
            <p>
              In our quest to improve the user experience, we miss that elements
              of the political process will be limited solely by mindset.
            </p>
          </div>
        </div>
        <div className={styles.right}>
          <button>Assemble a team of experts</button>
        </div>
      </div>
    </>
  );
};

export default OutSource;