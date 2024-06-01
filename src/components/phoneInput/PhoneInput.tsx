import React, { useEffect, useState } from "react";

import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";

interface Props {
    // value: string;
    onChange: (value: string) => void;
    error?: string;
}

const PhoneInputComp: React.FC<Props> = ({ onChange, error }) => {
    const [country, setCountry] = useState();
    console.log("country", country);

    useEffect(() => {
        fetch("https://ipapi.co/json/", {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
        })
            .then((response) => {
                let data = response.json();
                data.then((res) => {
                    setCountry(res.country);
                });
            })
            .catch((error) => {
                console.log(error);
            });
    }, []);
    return (
        <PhoneInput
            placeholder={"Enter phone number"}
            international={true}
            defaultCountry={country as never}
            onChange={onChange as never}
            error={error}
        />
    );
};

export default PhoneInputComp;
