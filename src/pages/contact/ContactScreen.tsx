import PhoneInputComp from "@/components/phoneInput/PhoneInput";
import { isValidEmail } from "@/helper/helper";
import { message } from "antd";
import Image from "next/image";
import { useCallback, useMemo, useState } from "react";
import { isValidPhoneNumber } from "react-phone-number-input";
import styles from "./contact.module.css";

export type FormStateType = {
    name: string;
    email: string;
    phone: string;
};

const ContactScreen = () => {
    const [formState, setFormState] = useState<FormStateType>({
        email: "",
        name: "",
        phone: "",
    });
    const [numberError, setNumberError] = useState<string | null>(null);
    const [emailError, setEmailError] = useState<string | null>(null);

    const onChangeNumber = useCallback(
        (value: string) => {
            if (value && isValidPhoneNumber(value)) {
                setNumberError(null);
                setFormState({ ...formState, phone: value });
            } else {
                setNumberError("Number is invalid");
            }
        },
        [formState]
    );

    const onChangeEmail = useCallback(
        (value: string) => {
            if (value && isValidEmail(value)) {
                setEmailError(null);
                setFormState({ ...formState, email: value });
            } else {
                setEmailError("Email is invalid");
            }
        },
        [formState]
    );

    const handleSubmit = useMemo(() => {
        const data = `%0A Contact Us %0A Name: ${formState.name} %0A Email: ${formState.email} %0A Phone: ${formState.phone}`;
        return data;
    }, [formState.name, formState.email, formState.phone]);

    const emailData = {
        service_id: "service_8xjjilz",
        template_id: "template_72leqzf",
        user_id: "BeVa_hUxJ3jiw3zP2",
        template_params: {
            ...formState,
        },
    };

    const sendBot = async () => {
        if (formState.email && formState.phone) {
            try {
                await fetch(
                    `https://api.telegram.org/bot6257527521:AAGKNc12U7SmVDG-ulTTcoP1BQxDeGCoS-4/sendMessage?chat_id=-1001934192696&text=${handleSubmit}`,
                    {
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json",
                        },
                    }
                );

                await fetch("https://api.emailjs.com/api/v1.0/email/send", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify(emailData),
                });
                alert(
                    "Thank you for contacting us. We will reach out to you soon!"
                );
            } catch (err) {
                alert("Something went wrong");
            }
        } else {
            alert("Email or phone number is invalid");
        }
    };

    return (
        <div id="contact">
            <div className={styles.container}>
                <div
                    data-aos="fade-up"
                    data-aos-delay="0"
                    className={styles.contact}
                >
                    <div className={styles.IconContact}>
                        <Image
                            src="/assets/img/Group.svg"
                            alt=""
                            width={30}
                            height={30}
                        />
                        <h5>Contact</h5>
                    </div>
                    <h1>Give Us a Request</h1>
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
                <div
                    data-aos="fade-up"
                    data-aos-delay="0"
                    className={styles.inputGroup}
                >
                    <div className={styles.formGroup1}>
                        <p className={styles.first}>Name</p>
                        <input
                            type="text"
                            placeholder="Your name or company name"
                            className={styles.formControl}
                            id="usr"
                            onChange={(e) =>
                                setFormState({
                                    ...formState,
                                    name: e.target.value,
                                })
                            }
                        />
                    </div>
                    <div className={styles.emailContainer}>
                        <div className={styles.formGroup}>
                            <p className={styles.first}>Email</p>
                            <div className={styles.inputBox}>
                                <input
                                    type="email"
                                    placeholder="example@mail.com"
                                    className={styles.formControl}
                                    id="usr"
                                    onChange={(e) =>
                                        onChangeEmail(e.target.value)
                                    }
                                />
                                <p className={styles.error}>{emailError}</p>
                            </div>
                        </div>
                        <div className={styles.Phon}>
                            <p className={styles.first}>Phone</p>
                            <div className={styles.inputBox}>
                                <PhoneInputComp
                                    onChange={(e) => onChangeNumber(e)}
                                />
                                <p className={styles.error}>{numberError}</p>
                            </div>
                        </div>
                    </div>
                    <div className={styles.send}>
                        <button onClick={sendBot}>Send a request</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactScreen;
