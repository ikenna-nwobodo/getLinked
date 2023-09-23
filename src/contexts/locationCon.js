import { createContext } from "react";

const LocationContext = createContext({
  faq_sect_Location: () => {
    const faq_sect = document.getElementById("faqs");
    faq_sect?.scrollIntoView({ behavior: "smooth" });
  },
  timeline_sect_Location: () => {
    const timeline_sect = document.getElementById("timeline");
    timeline_sect?.scrollIntoView({ behavior: "smooth" });
  },
  home_sect_Location: () => {
    const home_sect = document.getElementById("intro");
    home_sect?.scrollIntoView({ behavior: "smooth" });
  },
});

export default LocationContext;
