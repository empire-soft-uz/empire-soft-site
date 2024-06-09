import Image from "next/image";
import styles from "./home.module.css";
import React from "react";

const OutSource = () => {
    return (
        <>
            <div
                data-aos="fade-up"
                data-aos-delay="50"
                className={styles.texts}
            >
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
                    Looking for fast and reliable software development? Our
                    company specializes in delivering high-quality, efficient
                    solutions tailored to your needs. With a team of expert
                    developers and cutting-edge technology, we ensure your
                    projects are completed on time and within budget. Whether
                    it's a custom application, seamless integration, or
                    innovative digital transformation, we guarantee exceptional
                    performance and reliability. Choose us for your software
                    development needs and experience unparalleled service and
                    results. Let's build the future together!
                </p>
            </div>
            {/* <div
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
      </div> */}
        </>
    );
};

export default OutSource;
