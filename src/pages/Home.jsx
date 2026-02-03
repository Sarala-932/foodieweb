import React from "react";

import ContactNav from "../components/navbar/ContactNav";
import MenuBar from "../components/navbar/MenuBar";

export default function Home() {
  return (
    <div>
      <header>
        <ContactNav />
        <MenuBar title="FSD Fooder" />
      </header>
    
    </div>
  );
}
