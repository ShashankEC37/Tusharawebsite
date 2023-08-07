import React from "react";
import "../../styles/OurExperience.css"; // Import your CSS file with styles for the section

const OurExperience = () => {
  return (
    <div>
      <header>
       
        <h1 style={{color:'#000d6b'}}>Our Journey</h1>
      </header>

      <ul className="timeline">
        {/* Item 1 */}
        <li>
          <div className="direction-r">
            <div className="flag-wrapper">
              <span className="hexa"></span>
              <span className="flag">Acheived milestone Annual Revenue</span>
              <span className="time-wrapper">
                <span className="time">Dec 2020</span>
              </span>
            </div>
            <div className="desc">
            Acheived milestone Annual RevenueDec
            </div>
          </div>
        </li>

        {/* Item 2 */}
        <li>
          <div className="direction-l">
            <div className="flag-wrapper">
              <span className="hexa"></span>
              <span className="flag">Expanded team to 50+. </span>
              <span className="time-wrapper">
                <span className="time">July 2014 </span>
              </span>
            </div>
            <div className="desc">
            Acheived 20% growth Arr. Built a strong network of Venders and Clients and delivered everytime
            </div>
          </div>
        </li>

        {/* Item 3 */}
        <li>
          <div className="direction-r">
            <div className="flag-wrapper">
              <span className="hexa"></span>
              <span className="flag">Rebranded</span>
              <span className="time-wrapper">
                <span className="time">Dec 2011</span>
              </span>
            </div>
            <div className="desc">
            we rebranded ourselves as Tushara Industries to reflect our growth and expanding range of services.
            </div>
          </div>
        </li>


        <li>
          <div className="direction-l">
            <div className="flag-wrapper">
              <span className="hexa"></span>
              <span className="flag">Registered  </span>
              <span className="time-wrapper">
                <span className="time">Feb 2005 </span>
              </span>
            </div>
            <div className="desc">
            established as Sri Lakshmi Engineering Works
            </div>
          </div>
        </li>
      </ul>
    </div>

    
  );
};

export default OurExperience;
