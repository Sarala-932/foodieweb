import React, {useState} from "react";
import styles from "./BookTable.module.css";
import CustomButton from "../components/button/CustomButton";
import map from "../assets/map.png";
import ContactNav from "../components/navbar/ContactNav";
import MenuBar from "../components/navbar/MenuBar";

export default function BookTable() {
  const [formData, setFormData] = useState({
    date: "",
    time: "06:30 PM",
    name: "",
    phone: "",
    person: "1 Person",
  });

  const handleChange = (e) => {
    setFormData({...formData, [e.target.id]: e.target.value});
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Your table is booked");
    setFormData({
      date: "",
      time: "06:30 PM",
      name: "",
      phone: "",
      person: "1 Person",
    });
  };

  return (
    <div>
      <div className={styles.menuBar}>
        <ContactNav />
        <MenuBar title="FSD Fooder" />
      </div>
      <div className={styles.container}>
        {/* Header Section */}
        <div className={styles.header}>
          <h1 className={styles.title}>Book A Table</h1>
          <p className={styles.subtitle}>
            We consider all the drivers of change gives you the components <br />
            you need to change to create a truly happens.
          </p>
        </div>

        {/* Form Card */}
        <div className={styles.formCard}>
          <form className={styles.form} onSubmit={handleSubmit}>
            <div className={styles.row}>
              <div className={styles.inputGroup}>
                <label htmlFor="date" className={styles.label}>
                  Date
                </label>
                <input type="date" id="date" className={styles.input} value={formData.date} onChange={handleChange} required />
              </div>
              <div className={styles.inputGroup}>
                <label htmlFor="time" className={styles.label}>
                  Time
                </label>
                <select id="time" className={styles.select} value={formData.time} onChange={handleChange}>
                  <option>06:30 PM</option>
                  <option>07:00 PM</option>
                  <option>07:30 PM</option>
                  <option>08:00 PM</option>
                </select>
              </div>
            </div>

            <div className={styles.row}>
              <div className={styles.inputGroup}>
                <label htmlFor="name" className={styles.label}>
                  Name
                </label>
                <input type="text" id="name" placeholder="Enter your name" className={styles.input} value={formData.name} onChange={handleChange} required />
              </div>
              <div className={styles.inputGroup}>
                <label htmlFor="phone" className={styles.label}>
                  Phone
                </label>
                <input type="tel" id="phone" placeholder="x-xxx-xxx-xxxx" className={styles.input} value={formData.phone} onChange={handleChange} required />
              </div>
            </div>

            <div className={styles.inputGroupFull}>
              <label htmlFor="person" className={styles.label}>
                Total Person
              </label>
              <select id="person" className={styles.select} value={formData.person} onChange={handleChange}>
                <option>1 Person</option>
                <option>2 Persons</option>
                <option>3 Persons</option>
                <option>4+ Persons</option>
              </select>
            </div>

            <div className={styles.submitBtn}>
              <CustomButton btnTxt="Book A Table" style={styles.fullWidthBtn} />
            </div>
          </form>
        </div>

        {/* Map Section */}
        <div className={styles.mapSection}>
          <img src={map} alt="Location Map" className={styles.mapiMg} />
        </div>
      </div>
    </div>
  );
}
