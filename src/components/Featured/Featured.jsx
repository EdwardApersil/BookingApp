import React from 'react';
import './featured.css';

function Featured() {
  return (
    <div className="featured">
      <div className="featuredItem">
        <img
          src="https://cf.bstatic.com/xdata/images/city/square250/684492.jpg?k=67f7f0099c8880a561d3b9e40a9fcc739416746c0eba8b6ef0fb025dde89387d&o="
          alt=""
        />
        <div className="featuredTitles">
          <h1>Accra</h1>
          <h1>2000 properties</h1>
        </div>
      </div>
      <div className="featuredItem">
        <img
          src="https://cf.bstatic.com/xdata/images/city/square250/684492.jpg?k=67f7f0099c8880a561d3b9e40a9fcc739416746c0eba8b6ef0fb025dde89387d&o="
          alt=""
        />
        <div className="featuredTitles">
          <h1>Kumasi</h1>
          <h1>1000 properties</h1>
        </div>
      </div>
      <div className="featuredItem">
        <img
          src="https://cf.bstatic.com/xdata/images/city/square250/684492.jpg?k=67f7f0099c8880a561d3b9e40a9fcc739416746c0eba8b6ef0fb025dde89387d&o="
          alt=""
        />
        <div className="featuredTitles">
          <h1>Takoradi</h1>
          <h1>900 properties</h1>
        </div>
      </div>
      <div className="featuredItem">
        <img
          src="https://cf.bstatic.com/xdata/images/city/square250/684492.jpg?k=67f7f0099c8880a561d3b9e40a9fcc739416746c0eba8b6ef0fb025dde89387d&o="
          alt=""
        />
        <div className="featuredTitles">
          <h1>Tema</h1>
          <h1>500 properties</h1>
        </div>
      </div>
    </div>
  );
}

export default Featured