import Image from "next/image";
import styles from "./services.module.css";

const ServicesScreen = () => {
  return (
    <div className={styles.container}>
      <div className={styles.container__item__top}>
        <div className={styles.item__top__icons}>
          <span>
            <Image
              src={"/assets/imgs/programming-code.10.svg"}
              alt=""
              width={30}
              height={30}
            />
          </span>
          <span className={styles.top__icons__text}>Services</span>
        </div>
        <h2>
          We Provide <br /> Such Services
        </h2>
        <div className={styles.container__item}>
          <h3>Mobile app development</h3>
          <p>
            We can create a customized e-commerce solution that fits your
            business needs and helps you increase your online sales.
          </p>
        </div>
        <div className={styles.item__bottom__icons}>
          <span>
            <Image
              src={"/assets/imgs/react-original.svg"}
              alt=""
              width={30}
              height={30}
            />
          </span>
          <span>
            <Image
              src="/assets/imgs//flutter-original.svg"
              alt=""
              width={30}
              height={30}
            />
          </span>
        </div>
      </div>
      <div className={styles.container__item__center}>
        <div className={styles.center__item}>
          <h3>WEB Dev</h3>
          <a href="">Web Development</a>
        </div>
        <div className={styles.center__item}>
          <div>
            <h3>Support</h3>
            <a href="">Website Maintenance</a>
            <p>
              We provide ongoing maintenance and support services to ensure your
              website stays up to date and secure, giving you peace of mind.
            </p>
          </div>
          <Image
            src="/assets/imgs/programming-code.10.svg"
            alt=""
            width={30}
            height={30}
          />
        </div>
        <div className={styles.center__item}>
          <h3>UX / UI Design</h3>
          <p>
            We focus on creating intuitive and visually appealing user
            interfaces (UI) and user experiences (UX) to ensure your website is
            easy to use and engages your audience.
          </p>
        </div>
      </div>
      <div className={styles.container__items}>
        <div className={styles.container__item}>
          <div>
            <h3>Custom Software Development</h3>
            <p>
              We can build customized software solutions that address your
              unique business needs and help you streamline your operations.
            </p>
          </div>
          <Image
            src="/assets/imgs/programming-code.10.svg"
            alt=""
            width={30}
            height={30}
          />
        </div>
        <div className={styles.container__item}>
          <div>
            <h3>Search Engine Marketing</h3>
            <p>
              Our SEM services include pay-per-click advertising campaigns and
              remarketing strategies to drive more traffic and conversions to
              your website.
            </p>
          </div>
          <Image
            src="/assets/imgs/programming-code.10.svg"
            alt=""
            width={30}
            height={30}
          />
        </div>
      </div>
    </div>
  );
};

export default ServicesScreen;
