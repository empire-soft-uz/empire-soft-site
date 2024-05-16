import Image from "next/image";
import styles from "./steps.module.css";

const StepsScreen = () => {
  return (
    <div className={styles.fullscreen}>
      <main className={styles.content}>
        <div
          data-aos="fade-up"
          data-aos-delay="0"
          className={styles.topContent}
        >
          <div>
            <Image src="/assets/code.svg" alt="logo" width={25} height={25} />
            <p>Development process</p>
          </div>
          <h1>Steps to success</h1>
        </div>
        <div className={styles.content_items}>
          <div
            data-aos="fade-right"
            data-aos-delay="500"
            className={styles.item}
          >
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
          <div
            data-aos="fade-right"
            data-aos-delay="400"
            className={styles.item}
          >
            <span>2</span>
            <div className={styles.item_content}>
              <h1>Discovery</h1>
              <p>
                Following the initial kick-off meeting, we will outline your
                project, create milestones, and agree on project priorities.
              </p>
            </div>
          </div>
          <div
            data-aos="fade-right"
            data-aos-delay="300"
            className={styles.item}
          >
            <span>3</span>
            <div className={styles.item_content}>
              <h1>Discovery</h1>
              <p>
                The final design takes shape and, at this stage, the idea comes
                to life representing the visual concepts.
              </p>
            </div>
          </div>
          <div
            data-aos="fade-right"
            data-aos-delay="200"
            className={styles.item}
          >
            <span>4</span>
            <div className={styles.item_content}>
              <h1>Discovery</h1>
              <p>
                Review and testing takes place, which ensures the quality of
                your project.
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default StepsScreen;
