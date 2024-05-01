import Image from "next/image";
import styles from "./contact.module.css";

const ContactScreen = () => {
  return (
    <div>
      <div className={styles.container}>
        <div className={styles.contact}>
          <div className={styles.IconContact}>
            <Image src="/assets/img/Group.svg" alt="" width={30} height={30} />
            <h5>Contact</h5>
          </div>
          <h1>Give Us a Request</h1>
          <p>or contact us now</p>
          <div className={styles.phonNumber}>
            <a href="#">
              <h3>+998 99 448 05 00</h3>
            </a>
            <a href="#">
              <p>empire.soft.net@gmail.com</p>
            </a>
          </div>
          <div className={styles.iconTarmoq}>
            <a href="#">
              <Image
                src="/assets/img/Telegram.svg"
                alt=""
                width={100}
                height={100}
              />
            </a>
            <a href="#">
              <Image
                src="/assets/img/whatsapp (1) 1.svg"
                alt=""
                width={100}
                height={100}
              />
            </a>
          </div>
        </div>
        <div className={styles.inputGroup}>
          <div className={styles.formGroup1}>
            <p className={styles.first}>Name</p>
            <input
              type="text"
              placeholder="Your name or company name"
              className={styles.formControl}
              id="usr"
            />
          </div>
          <div className={styles.emailContainer}>
            <div className={styles.formGroup}>
              <p className={styles.first}>email</p>
              <input
                type="email"
                placeholder="example@mail.com"
                className={styles.formControl}
                id="usr"
              />
            </div>
            <div className={styles.Phon}>
              <p className={styles.first}>Phone</p>
              <div>
                <span className={styles.flag}>
                  <Image
                    src="/assets/img/UZ.svg"
                    alt=""
                    width={100}
                    height={100}
                  />
                </span>
                <span>
                  <input
                    type="text"
                    placeholder={"+998"}
                    className={styles.formControl1}
                    id="usr"
                  />
                </span>
              </div>
            </div>
          </div>
          <div className={styles.send}>
            <button>Send a request</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactScreen;
