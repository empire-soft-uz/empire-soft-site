import Image from "next/image";
import styles from "./home.module.css";
import React from "react";
import { data } from "../../../public/developers";

const OutSource = () => {
  return (
    <>
      <div data-aos="fade-up" data-aos-delay="50" className={styles.texts}>
        <h2>Trusted Team is</h2>
        <h1>The Key To Success</h1>
      </div>
      <div className={styles.tools}>
        <Image
          src={"/assets/tools/react-original.svg"}
          width={"55"}
          height={"55"}
          alt="react"
          data-aos="fade-up"
          data-aos-delay="200"
        />
        <Image
          src={"/assets/tools/javascript-original.svg"}
          width={"55"}
          height={"55"}
          alt="react"
          data-aos="fade-up"
          data-aos-delay="300"
        />
        <Image
          src={"/assets/tools/flutter-original.svg"}
          width={"55"}
          height={"55"}
          alt="react"
          data-aos="fade-up"
          data-aos-delay="400"
        />
        <Image
          src={"/assets/tools/CSS3_logo.svg"}
          width={"55"}
          height={"55"}
          alt="react"
          data-aos="fade-up"
          data-aos-delay="500"
        />
        <Image
          src={"/assets/tools/golang-original.svg"}
          width={"110"}
          height={"55"}
          alt="react"
          data-aos="fade-up"
          data-aos-delay="600"
        />
        <Image
          src={"/assets/tools/node-original 1.svg"}
          width={"55"}
          height={"55"}
          alt="react"
          data-aos="fade-up"
          data-aos-delay="700"
        />
      </div>
      <div
        data-aos="fade-up"
        data-aos-delay="100"
        className={styles.footerText}
      >
        <p>
          In general, of course, the constant information and propaganda support
          of our activities does not give us any choice but to determine the
          withdrawal of current assets. While just part of the overall picture,
          findings from online analytics can be made public.
        </p>
      </div>
      <div
        data-aos="fade-up"
        data-aos-delay="150"
        className={styles.footerContent}
      >
        <div className={styles.left}>
          <div className={styles.images}>
            {data.slice(3, 7).map((item, index) => {
              return (
                <div key={index} className={styles.userImg}>
                  <Image
                    src={item.image ?? ""}
                    alt="logo"
                    width={200}
                    height={200}
                  />
                </div>
              );
            })}
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
