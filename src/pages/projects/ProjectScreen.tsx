import Image from "next/image";
import styles from "./project.module.css";

const ProjectScreen = () => {
  return (
    <div className={styles.fullscreen}>
      <Image
        alt="logo"
        src="/assets/1 401.svg"
        fill
        sizes="(min-width: 808px) 50vw, 100vw"
        style={{
          objectFit: "cover",
          position: "absolute",
        }}
      />
      <main className={styles.content}>
        <div className={styles.top}>
          <div className={styles.topLeft}>
            <div className={styles.topText}>
              <Image alt="code" src="/assets/code.svg" width={20} height={20} />
              <span>Portfolio</span>
            </div>
            <Image
              src="/assets/Netflix_2015_logo 1.svg"
              alt="logo"
              width={220}
              height={60}
            />
          </div>
          <div className={styles.tools}>
            <Image
              alt="logo"
              src="/assets/react-original.svg"
              width={25}
              height={25}
            />
            <Image
              alt="logo"
              src="/assets/javascript-original.svg"
              width={25}
              height={25}
            />
            <Image
              alt="logo"
              src="/assets/flutter-original.svg"
              width={25}
              height={25}
            />
            <Image
              alt="logo"
              src="/assets/CSS3_logo.svg"
              width={25}
              height={25}
            />
          </div>
        </div>
        <div className={styles.center}>
          <div>
            <div className={styles.centerTexts}>
              <h1>Introducing</h1>
              <p>
                New mobile app for fitness tracking and subscription prestige
                Sport Club Chekhov
              </p>
            </div>
            <div className={styles.centerBtns}>
              <button>View app</button>
              <div>
                <Image
                  src="/assets/apple.svg"
                  alt="dev"
                  width={25}
                  height={25}
                />
              </div>
              <div>
                <Image
                  src="/assets/Vector.svg"
                  alt="dev"
                  width={25}
                  height={25}
                />
              </div>
              <div>
                <Image
                  src="/assets/image 9 (Traced).svg"
                  alt="dev"
                  width={25}
                  height={25}
                />
              </div>
            </div>
          </div>
          <div className={styles.centerRight}>
            <h1>Developed by</h1>
            <div className={styles.devs}>
              <Image src="/assets/dev.png" alt="dev" width={40} height={40} />
              <Image src="/assets/dev.png" alt="dev" width={40} height={40} />
              <Image src="/assets/dev.png" alt="dev" width={40} height={40} />
              <Image src="/assets/dev.png" alt="dev" width={40} height={40} />
            </div>
          </div>
        </div>
        <div className={styles.bottom}>
          <div>
            <Image
              src="/assets/Group 3.svg"
              alt="logo"
              width={130}
              height={40}
            />
          </div>
          <div>
            <Image
              src="/assets/Group 3.svg"
              alt="logo"
              width={130}
              height={40}
            />
          </div>
          <div>
            <Image
              src="/assets/Group 3.svg"
              alt="logo"
              width={130}
              height={40}
            />
          </div>
          <div>
            <Image
              src="/assets/Group 3.svg"
              alt="logo"
              width={130}
              height={40}
            />
          </div>
          <div>
            <Image
              src="/assets/Group 3.svg"
              alt="logo"
              width={130}
              height={40}
            />
          </div>
          <div>
            <Image
              src="/assets/Group 3.svg"
              alt="logo"
              width={130}
              height={40}
            />
          </div>
        </div>
      </main>
    </div>
  );
};

export default ProjectScreen;
