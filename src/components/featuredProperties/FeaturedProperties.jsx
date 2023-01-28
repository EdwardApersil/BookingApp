import  './featuredProperties.css'

function featuredProperties() {
  return (
    <div className="fp">
      <div className="fpItem">
        <img
          src="https://cf.bstatic.com/xdata/images/hotel/square200/176175589.jpg?k=744e8f26834184821576d1eec6ebb25f7da5415aa7189587ec72cfac350ceb3a&o="
          alt=""
          className="fpImg"
        />
        <span className="fpName">Accra Luxury Apartments @ The Gardens</span>
        <br />
        <span className="fpCity">Accra</span>
        <br />
        <span className="fpPrice">Starting from $200</span>
        <div className="fpRating">
          <button>8.5</button>
          <button>Excellent</button>
        </div>
      </div>
      <div className="fpItem">
        <img
          src="https://cf.bstatic.com/xdata/images/hotel/square600/365192846.jpg?k=939dea7781e65e052d9a6fd7da8445772be34897b569d5d17b5da15a22324ff9&o="
          alt=""
          className="fpImg"
        />
        <span className="fpName">Accra Luxury Homes @ East LegonOpens</span>
        <br />
        <span className="fpCity">Accra</span> <br />
        <span className="fpPrice">Starting from $200</span> <br />
        <div className="fpRating">
          <button>8.5</button>
          <button>Excellent</button>
        </div>
      </div>
      <div className="fpItem">
        <img
          src="https://cf.bstatic.com/xdata/images/hotel/square600/331588946.jpg?k=d905d19e7579598eb58bec7b01f3bb69d2a83efd560775efd51e3075ef8a73ae&o="
          alt=""
          className="fpImg"
        />
        <span className="fpName">
          APARTMENTS GH - Accra - Dzorwulu ResidenceOpens
        </span>{" "}
        <br />
        <span className="fpCity">Accra</span> <br />
        <span className="fpPrice">Starting from $200</span> <br />
        <div className="fpRating">
          <button>8.5</button>
          <button>Excellent</button>
        </div>
      </div>
      <div className="fpItem">
        <img
          src="https://cf.bstatic.com/xdata/images/hotel/square600/399225807.jpg?k=1a7c78d9b9ab20f4f9f1fedadef5892fbcc8ece2d1f2623e2743cc751710218d&o="
          alt=""
          className="fpImg"
        />
        <span className="fpName">Eighty8 Properties two bedroom apartment</span>{" "}
        <br />
        <span className="fpCity">Accra</span> <br />
        <span className="fpPrice">Starting from $200</span> <br />
        <div className="fpRating">
          <button>8.5</button>
          <button>Excellent</button>
        </div>
      </div>
    </div>
  );
}

export default featuredProperties