import React from 'react';
import "./home.css";
import Navbar from "../../components/Navbar/Navbar";
import Header from "../../components/Header/Header";
import Featured from "../../components/Featured/Featured";
import PropertyList from '../../components/propertyList/PropertyList';
import FeaturedProperties from "../../components/featuredProperties/FeaturedProperties";
import MailList from '../../components/mailList/MailList';
import Footer from '../../components/Footer/Footer';


function Home() {
  return (
    <div>
      <Navbar />
      <Header />
      <div className="homeContainer">
        <Featured />
        <div className="homeTitle">Browse by property type</div>
        <PropertyList />
        <div className="homeTitle">Home guest love</div>
        <FeaturedProperties />
        <MailList />
        <Footer/>
      </div>
    </div>
  );
}

export default Home