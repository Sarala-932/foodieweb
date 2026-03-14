import React, {useState, useMemo, useEffect} from "react";
import { useSearchParams } from "react-router-dom";
import styles from "./Menu.module.css";
import MenuCard from "../components/menu/MenuCard";
import ContactNav from "../components/navbar/ContactNav";
import MenuBar from "../components/navbar/MenuBar";
import OrderApps from "../components/orderApps/OrderApps";
import {menuData, categories} from "../data/menuData";
import Footer from "../components/footer/Footer";

export default function Menu() {
  const [searchParams, setSearchParams] = useSearchParams();
  const initialCategory = searchParams.get("category") || "All";
  const [active, setActive] = useState(initialCategory);

  // Sync state with URL parameter on load or URL change
  useEffect(() => {
    const categoryQuery = searchParams.get("category");
    if (categoryQuery) {
      setActive(categoryQuery);
      setTimeout(() => {
        const element = document.getElementById("menu-categories");
        if (element) {
          element.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      }, 100);
    }
  }, [searchParams]);

  const handleActiveChange = (item) => {
    setActive(item);
    setSearchParams({ category: item });
  };

  const filteredMenu = useMemo(() => {
    return active === "All" ? menuData : menuData.filter((item) => item.category === active);
  }, [active]);

  return (
    <div>
      <div>
        <ContactNav />
        <MenuBar title="Modern DABA" />
      </div>

      <div className={`${styles.menuPage} page-transition`}>
        <h2>Our Menu</h2>
        <p className={styles.subtitle}>We consider all the drivers of change gives you the components you need to change to create a truly happens.</p>

        <div id="menu-categories" className={styles.categories}>
          {categories.map((item) => (
            <button key={item} className={active === item ? styles.active : ""} onClick={() => handleActiveChange(item)}>
              {item}
            </button>
          ))}
        </div>

        {/* MENU GRID */}
        <div className={styles.grid}>
          {filteredMenu.map((item) => (
            <MenuCard key={item.id} item={item} />
          ))}
        </div>
      </div>
      <OrderApps />
      <Footer />
    </div>
  );
}
