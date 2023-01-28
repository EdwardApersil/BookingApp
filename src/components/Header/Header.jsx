import React, { useState } from 'react';
import {useNavigate } from 'react-router-dom'
import './header.css';
import { FaBed } from 'react-icons/fa';
import { FaTaxi } from "react-icons/fa";
import { BiBed } from "react-icons/bi";
import { AiFillCar } from "react-icons/ai";
import { MdFlight } from "react-icons/md";
import { SlCalender } from 'react-icons/sl'
import { GiPerson } from 'react-icons/gi';
import { DateRange } from "react-date-range";
import "react-date-range/dist/styles.css"; 
import "react-date-range/dist/theme/default.css";
import {format} from 'date-fns'

function Header({ type }) {
    const [destination, setDestination] = useState("");
    const [openDate, setOpenDate] = useState(false)
    const [date, setDate] = useState([
    {
        startDate: new Date(),
        endDate: new Date(),
        key: "selection",
      },
    ]);
  const [openOptions, setOpenOptions] = useState()
  const [options, setOptions] = useState({
    adult: 0,
    children: 0,
    room: 0,
  })

  const navigate = useNavigate()

  const handleOption = (name, operation) => {
    setOptions(prev => {
      return {
        ...prev, [name]: operation === "i" ? options[name] + 1 : options[name] - 1,
      }
    })
  }

  const handleSearch = () => {
    navigate("/hotels", {state:{destination, date, options  }})
  }

    return (
      <>
        <div className="header">
          <div className={type === "list" ? "container listMode" : "container"}>
            <div className="headerList">
              <div className="headerListItem active">
                <FaBed />
                <span>Stays</span>
              </div>
              <div className="headerListItem">
                <MdFlight />
                <span>Flights</span>
              </div>
              <div className="headerListItem">
                <AiFillCar />
                <span>Car rentals</span>
              </div>
              <div className="headerListItem">
                <BiBed />
                <span>Attractions</span>
              </div>
              <div className="headerListItem">
                <FaTaxi />
                <span>Airport Taxi</span>
              </div>
            </div>
            {type !== "list" && 
              <>
                <h1 className="headerTitle">
                  A lifetime of discount? It's Genius.
                </h1>
                <p className="headerDes">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Harum maiores cumque optio earum, voluptatibus corrupti.
                </p>
                <button className="headerBtn">Sign in / Register</button>
                <div className="headerSearch">
                  <div className="headerSearchItems">
                    <FaBed className="headerIcon" />
                    <input
                      type="text"
                      placeholder="Where are you going"
                      className="headerSearchInput" onChange={e=>setDestination(e.target.value)}
                    />
                  </div>
                  <div className="headerSearchItems">
                    <SlCalender className="headerIcon" />
                    <span
                      onClick={() => setOpenDate(!openDate)}
                      className="headerSearchText"
                    >{`${format(date[0].startDate, "MM/dd/yyy")} to ${format(
                      date[0].endDate,
                      "MM/dd/yyy"
                    )}`}</span>
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
                  <div className="headerSearchItems">
                    <GiPerson className="headerIcon" />
                    <span
                      onClick={() => setOpenOptions(!openOptions)}
                      className="headerSearchText"
                    >
                      {`${options.adult} adult : ${options.children} children : ${options.room} room`}
                    </span>
                    {openOptions && (
                      <div className="options">
                        <div className="optionItem">
                          <span className="optionsText">Adult</span>
                          <div className="optionCounter">
                            <button
                              disabled={options.adult <= 1}
                              className="optionCounterBtn"
                              onClick={() => handleOption("adult", "d")}
                            >
                              -
                            </button>
                            <div className="optionCounterNumber">
                              {options.adult}
                            </div>
                            <button
                              className="optionCounterBtn"
                              onClick={() => handleOption("adult", "i")}
                            >
                              +
                            </button>
                          </div>
                        </div>
                        <div className="optionItem">
                          <span className="optionsText">Children</span>
                          <div className="optionCounter">
                            <button
                              disabled={options.children <= 0}
                              className="optionCounterBtn"
                              onClick={() => handleOption("children", "d")}
                            >
                              -
                            </button>
                            <div className="optionCounterNumber">
                              {options.children}
                            </div>
                            <button
                              className="optionCounterBtn"
                              onClick={() => handleOption("children", "i")}
                            >
                              +
                            </button>
                          </div>
                        </div>
                        <div className="optionItem">
                          <span className="optionsText">Rooms</span>
                          <div className="optionCounter">
                            <button
                              disabled={options.room <= 1}
                              className="optionCounterBtn"
                              onClick={() => handleOption("room", "d")}
                            >
                              -
                            </button>
                            <div className="optionCounterNumber">
                              {options.room}
                            </div>
                            <button
                              className="optionCounterBtn"
                              onClick={() => handleOption("room", "i")}
                            >
                              +
                            </button>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                  <div className="headerSearchItems">
                    <div className="headerBtn" onClick={handleSearch}>Search</div>
                  </div>
                </div>
              </>
            }
          </div>
        </div>
      </>
    );
    
}

export default Header;