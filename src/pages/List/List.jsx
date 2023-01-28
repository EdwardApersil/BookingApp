import './list.css';
import { useState } from 'react';
import {useLocation} from 'react-router-dom'
import Navbar from '../../components/Navbar/Navbar';
import Header from "../../components/Header/Header";
import { format } from "date-fns";
import { DateRange } from "react-date-range";

function List() {
  const location = useLocation()
  console.log(location);

  const [destination, setDestination] = useState(location.state.destination);
  const [date, setDate] = useState(location.state.date);
  const [options, setOptions] = useState(false);
  const [openDate, setOpenDate] = useState(false)

  return (
    <div>
      <Navbar />
      <Header type="list" />
      <div className="listContainer" onClick={() => setOpenDate(!openDate)}>
        <div className="listWrapper">
          <div className="listSearch">
            <div className="lsTitle">Search</div>
            <div className="lsItem">
              <label htmlFor="">Destination</label>
              <input type="text" placeholder={destination} />
            </div>
            <div className="lsItem">
              <label htmlFor="">Check-in Date</label>
              {/* <input type="text" /> */}
              <span onClick={() => setOpenDate(!openDate)}>{`${format(date[0].startDate, "MM/yyy/ddd")} to ${format(
                date[0].endDate,
                "MM/dd/yyy"
              )}`}</span>
              {/* <DateRange edi/> */}
              {openDate && (
                <DateRange
                  editableDateInputs={true}
                  onChange={(item) => setDate([item.selection])}
                  moveRangeOnFirstSelection={false}
                  ranges={date}
                  className="date"
                />
              )}
            </div>
          </div>
          <div className="lisResult"></div>
        </div>
      </div>
    </div>
  );
}

export default List