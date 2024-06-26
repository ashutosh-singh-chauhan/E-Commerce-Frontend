import Footer from "@/components/Footer";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import NewArivals from "@/components/NewArivals";
import OfferCard from "@/components/OfferCard";
import OurHappyCustomers from "@/components/OurHappyCustomers";
import SignupStrip from "@/components/SignupStrip";
import TopSelling from "@/components/TopSelling";
import React from "react";

const HomePage = () => {
  return (
    <React.Fragment>
      <SignupStrip />
      <Header />
      <HeroSection />
      <NewArivals />
      <TopSelling />
      <OurHappyCustomers />
      <OfferCard />
      <Footer />
    </React.Fragment>
  );
};

export default HomePage;
