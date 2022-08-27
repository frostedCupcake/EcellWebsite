import * as React from "react";
import ResponsiveAppBar from "./ResponsiveAppBar/index";
import LandingPage from "./landing_page";
import WhatIsSection from "./what-is-section";
import InformationSection from "./Information-section";
import lineRocket from "../assets/line-rocket.png";
import lineMen from "../assets/businessmen.png";
import TakePart from "./Take-part-section";
import Carousel from "./Carousel/Carousel";
import Footer from "./Footer/Footer";
import { useRef } from "react";

const startupList = [
  "Promotions on social media, newspapers, online blogs etc.",
  "Display stalls for the startup in The Startup Fair event, to be held in IIT Hyderabad campus.",
  "Opportunities to interact with experienced professionals from different fields like venture capitalists, consultancy firms, banks etc.",
  "Sponsorship collaboration opportunities with E-Cell IIT Hyderabad for extra promotion and other benefits.",
  "Other negotiable deliverables.",
];
const investorsList = [
  "Opportunities to interact with all the startups.",
  "Promotions on social media, newspapers, online blogs etc.",
  "Invest in the startup of your own choice, with no upper limit of collaboration.",
  "3 Free passes for the E-Summit event that include KeyNote talk sessions and Powertalks on entrepreneurship by professionals from across the globe and a variety of companies.",
  "Other negotiable deliverables.",
];
const Homepage = () => {
  function scrollToSection(page) {
    console.log(page);
    switch (page) {
      case "Investors":
        ref_investor_section.current.scrollIntoView();
        break;
      case "Startup":
        ref_startup_section.current.scrollIntoView();
        break;
      case "Registers":
        ref_take_part_section.current.scrollIntoView();
        break;
      case "Sponsors":
        ref_carousel_section.current.scrollIntoView();
        break;
      case "Contact Us":
        ref_footer_section.current.scrollIntoView();
        break;
    }
  }
  const ref_startup_section = useRef();
  const ref_investor_section = useRef();
  const ref_take_part_section = useRef();
  const ref_carousel_section = useRef();
  const ref_footer_section = useRef();
  return (
    <>
      <ResponsiveAppBar
        MenuItemClickHandler={(page) => {
          scrollToSection(page);
        }}
      />
      <LandingPage />
      <WhatIsSection />
      <InformationSection
        titlep1="START"
        titlep2="UP"
        image={lineRocket}
        items={startupList}
        ref={ref_startup_section}
      />
      <InformationSection
        titlep1="INVEST"
        titlep2="ORS"
        image={lineMen}
        items={investorsList}
        ref={ref_investor_section}
      />
      <TakePart ref={ref_take_part_section} />
      <Carousel ref={ref_carousel_section} />
      <Footer ref={ref_footer_section} />
    </>
  );
};

export default Homepage;
