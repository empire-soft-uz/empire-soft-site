"use client";
import Image from "next/image";
import styles from "./project.module.css";
import { useEffect, useState } from "react";
import { projects } from "../../../public/data";

const ProjectScreen = () => {
    const [mockData, setMockData] = useState(projects);
    const [index, setIndex] = useState(0);

    const onChangePr = (i: number) => {
        console.log("ishladi", index);
        setIndex(i);
    };

    useEffect(() => {
        const timer = setInterval(() => {
            setIndex((prev) => (prev + 1) % mockData.length);
        }, 10000);

        return () => clearInterval(timer);
    }, [mockData.length]);

    return (
        <div id="portfolio" className={styles.fullscreen}>
            <Image
                alt="logo"
                src={
                    projects[index].promoBackground
                        ? "/assets/ES_NEW/assets/" +
                          projects[index].promoBackground
                        : "/assets/1 401.svg"
                }
                fill
                sizes="(min-width: 808px) 50vw, 100vw"
                style={{
                    objectFit: "cover",
                    position: "absolute",
                    opacity: 0.2,
                }}
            />
            <div
                style={{
                    backgroundColor:
                        `url("/assets/ES_NEW/assets/${projects[index].screenshot}")` ??
                        'url("/assets/image 16.svg")',
                }}
                className={styles.mock}
            >
                <Image
                    data-aos="fade-up"
                    data-aos-delay="300"
                    alt="logo"
                    src={
                        projects[index].screenshot
                            ? "/assets/ES_NEW/assets/" +
                              projects[index].screenshot
                            : "/assets/1 401.svg"
                    }
                    width={1000}
                    height={1000}
                />
            </div>
            <main className={styles.content}>
                <div className={styles.top}>
                    <div
                        data-aos="fade-up"
                        data-aos-delay="0"
                        className={styles.topLeft}
                    >
                        <div className={styles.topText}>
                            <Image
                                alt="code"
                                src="/assets/code.svg"
                                width={20}
                                height={20}
                            />
                            <span>Portfolio</span>
                        </div>
                        <Image
                            src={
                                "/assets/ES_NEW/assets/" +
                                    projects[index].logo ??
                                "/assets/Netflix_2015_logo 1.svg"
                            }
                            alt="logo"
                            width={70}
                            height={60}
                        />
                    </div>
                </div>
                <div
                    data-aos="fade-up"
                    data-aos-delay="300"
                    className={styles.center}
                >
                    <div>
                        <div className={styles.centerTexts}>
                            <h1>{projects[index].name}</h1>
                            <p>{projects[index].title}</p>
                        </div>
                        <div className={styles.centerBtns}>
                            <button>View app</button>
                            {projects[index].iosLink?.length ? (
                                <a href={projects[index].iosLink ?? "/"}>
                                    <Image
                                        src="/assets/apple.svg"
                                        alt="dev"
                                        width={25}
                                        height={25}
                                    />
                                </a>
                            ) : (
                                <></>
                            )}
                            {projects[index].androidLink?.length ? (
                                <a href={projects[index].androidLink ?? "/"}>
                                    <Image
                                        src="/assets/Vector.svg"
                                        alt="dev"
                                        width={25}
                                        height={25}
                                    />
                                </a>
                            ) : (
                                <></>
                            )}
                            {projects[index].websiteLink?.length ? (
                                <a href={projects[index].websiteLink ?? "/"}>
                                    <Image
                                        src="/assets/image 9 (Traced).svg"
                                        alt="dev"
                                        width={25}
                                        height={25}
                                    />
                                </a>
                            ) : (
                                <></>
                            )}
                        </div>
                    </div>
                    {/* <div className={styles.centerRight}>
            <h1>Developed by</h1>
            <div className={styles.devs}>
              <Image src="/assets/dev.png" alt="dev" width={40} height={40} />
              <Image src="/assets/dev.png" alt="dev" width={40} height={40} />
              <Image src="/assets/dev.png" alt="dev" width={40} height={40} />
              <Image src="/assets/dev.png" alt="dev" width={40} height={40} />
            </div>
          </div> */}
                </div>
                <div className={styles.bottom}>
                    {projects.map((item, _index) => {
                        return (
                            <div
                                data-aos="fade-up"
                                data-aos-delay={150 * _index}
                                key={_index}
                                onClick={() => onChangePr(_index)}
                            >
                                {index == _index && (
                                    <span
                                        style={{
                                            position: "absolute",
                                            width: "100%",
                                            height: "100%",
                                            backgroundSize: "cover",
                                            backgroundImage:
                                                `url("/assets/ES_NEW/assets/${item.promoBackground}")` ??
                                                'url("/assets/image 16.svg")',
                                            opacity: 0.2,
                                        }}
                                    ></span>
                                )}
                                {index == _index && (
                                    <span className={styles.active}></span>
                                )}
                                <Image
                                    src={
                                        "/assets/ES_NEW/assets/" + item.logo ??
                                        "/assets/Group 3.svg"
                                    }
                                    alt="logo"
                                    width={90}
                                    height={30}
                                    style={{
                                        opacity: 1,
                                    }}
                                />
                            </div>
                        );
                    })}
                    {/* <div>
            <span className={styles.active}></span>
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
          </div> */}
                </div>
            </main>
        </div>
    );
};

export default ProjectScreen;
