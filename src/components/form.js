import React, { useState } from "react";
import styles from "../styles/Form.module.css"; 

const Form = () => {
    const [formData, setFormData] = useState({
        firstName: "",
        email: "",
        mesage: "",
    });

    const handleChange = (e) => {
        const { name, value, type, checked, options } = e.target;
        if (type === "checkbox") {
            const selectedOptions = Array.from(options)
                .filter((option) => option.selected)
                .map((option) => option.value);
            setFormData({ ...formData, [name]: selectedOptions });
        } else if (type === "radio" && checked) {
            setFormData({ ...formData, [name]: value });
        } else {
            setFormData({ ...formData, [name]: value });
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Form Data:", formData);
    };

    return (
        <form className={styles.form} onSubmit={handleSubmit}>
            <label>Написати нам</label>
            <label className={styles.label}>
                Ім'я:
            </label>
            <input
                type="text"
                id="firstName"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                className={styles.input} />

            <label className={styles.label}>
                Електронна пошта:
            </label>
            <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className={styles.input} />

            <label htmlFor="mesage" className={styles.label}>
               Повідомлення:
            </label>
            <textarea
                id="address"
                name="address"
                value={formData.address}
                onChange={handleChange}
                className={styles.input} />

        <button type="submit" className={styles.button}>
                Надіслати
            </button>
     </form>
    );
};

export default Form;