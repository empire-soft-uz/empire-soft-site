import Image from "next/image";
import styles from "./reviews.module.css";

const ReviewsScreen = () => {
    return (
        <div className={styles.fullscreen}>
            <main className={styles.content}>
                <div className={styles.left}>
                    <div className={styles.topLeft}>
                        <Image
                            src="/assets/code.svg"
                            alt="logo"
                            width={20}
                            height={20}
                        />
                        <p>Reviews</p>
                    </div>
                    <div
                        data-aos="fade-up"
                        data-aos-delay="0"
                        className={styles.topCenterText}
                    >
                        <h1>Those Who Entrusted Their Business To Us</h1>
                    </div>
                    <div
                        data-aos="fade-up"
                        data-aos-delay="0"
                        className={styles.bottom}
                    >
                        <div className={styles.topItem}>
                            <div>
                                <Image
                                    src="/assets/Uztelecom.svg"
                                    alt="logo"
                                    width={150}
                                    height={50}
                                />
                            </div>
                            <div>
                                <Image
                                    src="/assets/lukoil.svg"
                                    alt="logo"
                                    width={150}
                                    height={50}
                                />
                            </div>
                        </div>
                        <div className={styles.centerItem}>
                            <div>
                                <Image
                                    src="/assets/uzdigitial.svg"
                                    alt="logo"
                                    width={150}
                                    height={50}
                                />
                            </div>
                            <div>
                                <Image
                                    src="/assets/kazt.svg"
                                    alt="logo"
                                    width={150}
                                    height={50}
                                />
                            </div>
                            <div>
                                <Image
                                    src="/assets/usel.svg"
                                    alt="logo"
                                    width={150}
                                    height={50}
                                />
                            </div>
                        </div>
                        <div className={styles.bottomItem}>
                            <div>
                                <Image
                                    src="/assets/aloqabank.svg"
                                    alt="logo"
                                    width={150}
                                    height={50}
                                />
                            </div>
                            <div>
                                <Image
                                    src="/assets/studio.svg"
                                    alt="logo"
                                    width={150}
                                    height={50}
                                />
                            </div>
                        </div>
                    </div>
                </div>
                <div
                    data-aos="fade-left"
                    data-aos-delay="0"
                    className={styles.right}
                >
                    <div className={styles.content_item}>
                        <span>
                            <Image
                                src="/assets/Frame 28.svg"
                                alt="logo"
                                width={80}
                                height={80}
                            />
                        </span>
                        <div className={styles.content_white}>
                            <span>
                                <Image
                                    src="/assets/Star 2.svg"
                                    alt="logo"
                                    width={20}
                                    height={20}
                                />
                            </span>
                            <p>
                                I would recommend anyone to work with the team
                                at Empire soft. They have excellent talent in
                                their network and are best in class at what they
                                do.
                            </p>
                            <div className={styles.profile}>
                                <div className={styles.first}>
                                    <Image
                                        src={"/assets/Frame 24.png"}
                                        alt="logo"
                                        width={40}
                                        height={40}
                                    />
                                    <div>
                                        <h1>Sergey Brin</h1>
                                        <p>Product Manager</p>
                                    </div>
                                </div>
                                <div>
                                    <Image
                                        src="/assets/Group.svg"
                                        alt="logo"
                                        width={100}
                                        height={100}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={styles.content_item}>
                        <div className={styles.content_white}>
                            <span>
                                <Image
                                    src="/assets/Star 2.svg"
                                    alt="logo"
                                    width={20}
                                    height={20}
                                />
                            </span>
                            <p>
                                Deep for successful and productive cooperation
                                thank you. The technical services we used
                                successful service was provided on time. Company
                                We wish you luck in your future endeavors
                            </p>
                            <div className={styles.profile}>
                                <div className={styles.first}>
                                    <span>R</span>
                                    <div>
                                        <h1>Roee Bendor</h1>
                                        <p>Wedo solutions</p>
                                    </div>
                                </div>
                                {/* <div>
                                    <Image
                                        src="/assets/Group.svg"
                                        alt="logo"
                                        width={100}
                                        height={100}
                                    />
                                </div> */}
                            </div>
                        </div>
                        <span>
                            <Image
                                src="/assets/Frame 28.svg"
                                alt="logo"
                                width={80}
                                height={80}
                            />
                        </span>
                    </div>
                    <div className={styles.content_item}>
                        <span>
                            <Image
                                src="/assets/Frame 28.svg"
                                alt="logo"
                                width={80}
                                height={80}
                            />
                        </span>
                        <div className={styles.content_white}>
                            <span>
                                <Image
                                    src="/assets/Star 2.svg"
                                    alt="logo"
                                    width={20}
                                    height={20}
                                />
                            </span>
                            <p>
                                Our website as well Many thanks for successfully
                                completing the Crm program We are very satisfied
                                with the quality of work. It's fun to work with
                                masters of their work! We wish the company
                                success and luck in its future endeavors!
                            </p>
                            <div className={styles.profile}>
                                <div className={styles.first}>
                                    <span>J</span>
                                    <div>
                                        <h1>Jurgen Firsching</h1>
                                        <p>Chat XO</p>
                                    </div>
                                </div>
                                {/* <div>
                                    <Image
                                        src="/assets/Group.svg"
                                        alt="logo"
                                        width={100}
                                        height={100}
                                    />
                                </div> */}
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default ReviewsScreen;
