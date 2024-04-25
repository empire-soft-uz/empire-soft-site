import Image from "next/image";
import styles from "./steps.module.css";

const StepsScreen = () => {
  return (
    <div className={styles.fullscreen}>
      <main className={styles.content}>
        <div className={styles.topContent}>
          <div>
            <Image src="/assets/code.svg" alt="logo" width={25} height={25} />
            <p>Development process</p>
          </div>
          <h1>Steps to success</h1>
        </div>
        <div className={styles.content_items}>
          <div className={styles.item}>
            <span>1</span>
            <div className={styles.item_content}>
              <h1>Discovery</h1>
              <p>
                We start our projects by understanding the scope and
                requirements. This is accomplished by working closely with you
                to make sure we are all on the same page.
              </p>
            </div>
          </div>
          <div className={styles.item}>
            <span>2</span>
            <div className={styles.item_content}>
              <h1>Discovery</h1>
              <p>
                We start our projects by understanding the scope and
                requirements. This is accomplished by working closely with you
                to make sure we are all on the same page.
              </p>
            </div>
          </div>
          <div className={styles.item}>
            <span>3</span>
            <div className={styles.item_content}>
              <h1>Discovery</h1>
              <p>
                We start our projects by understanding the scope and
                requirements. This is accomplished by working closely with you
                to make sure we are all on the same page.
              </p>
            </div>
          </div>
          <div className={styles.item}>
            <span>4</span>
            <div className={styles.item_content}>
              <h1>Discovery</h1>
              <p>
                We start our projects by understanding the scope and
                requirements. This is accomplished by working closely with you
                to make sure we are all on the same page.
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default StepsScreen;
