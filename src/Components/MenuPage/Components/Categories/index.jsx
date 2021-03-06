import React, { useState } from "react";
import "./categories.css";

import {
  categoryData,
  iceCoffeeData,
  coldData,
  dessertData,
  coffeData,
  warmData,
  topingsData,
  warmDrinksData,
  spersoBarData,
} from "../../../../Services/Utils/Data";
import MenuItem from "../MenuItem";
import SpersoItem from "../SpersoItem";

const Categories = () => {
  const [currentTab, setCurrentTab] = useState(1);

  function handleSelect(id) {
    setCurrentTab(prev => prev = id);
  }

  return (
    <>
      <div className="categories">
        {categoryData.map((item) => (
          <div
            className="item"
            key={item.id}
            onClick={() => handleSelect(item.id)}
          >
            <div className="categoryImg">
              <img className="img" src={item.image} alt="item" />
            </div>
            <h6 className="itemTitle">{item.title}</h6>
          </div>
        ))}
      </div>

      <div className="menuStyle">
        <ul>
          {currentTab === 1 &&
            iceCoffeeData.map((item) => (
              <div key={item.id}>
                <MenuItem
                  title={item.title}
                  price={item.price}
                  desc={item.desc}
                />
              </div>
            ))}
          {currentTab === 2 &&
            coldData.map((item) => (
              <div key={item.id}>
                <MenuItem
                  title={item.title}
                  price={item.price}
                  desc={item.desc}
                />
              </div>
            ))}
          {currentTab === 3 &&
            warmData.map((item) => (
              <div key={item.id}>
                <MenuItem
                  title={item.title}
                  price={item.price}
                  desc={item.desc}
                />
              </div>
            ))}
          {currentTab === 4 &&
            coffeData.map((item) => (
              <div key={item.id}>
                <MenuItem
                  title={item.title}
                  price={item.price}
                  desc={item.desc}
                />
              </div>
            ))}
          {currentTab === 5 &&
            dessertData.map((item) => (
              <div key={item.id}>
                <MenuItem
                  title={item.title}
                  price={item.price}
                  desc={item.desc}
                />
              </div>
            ))}
          {currentTab === 6 &&
            warmDrinksData.map((item) => (
              <div key={item.id}>
                <MenuItem
                  title={item.title}
                  price={item.price}
                  desc={item.desc}
                />
              </div>
            ))}
          {currentTab === 7 &&
            topingsData.map((item) => (
              <div key={item.id}>
                <MenuItem
                  title={item.title}
                  price={item.price}
                  desc={item.desc}
                />
              </div>
            ))}

          {currentTab === 8 && (
            <div className="spersoTitles">
              <div className="spersoTitle">????????????????????</div>
              <div className="spersoTitle">??????????</div>
              <div className="spersoTitle">??????????</div>
            </div>
          )}
          {currentTab === 8 &&
            spersoBarData.map((item) => (
              <div key={item.id}>
                <SpersoItem
                  title={item.title}
                  price={item.price}
                  priceEnt={item.priceEnt}
                  priceSpe={item.priceSpe}
                />
              </div>
            ))}
          {currentTab === 8 && (
            <div className="paragraph">
              <p style={{ marginBottom: "5px" }}>
                ???????? ?? ???????? ?????????? ?? ?????? (???????????????? ??????)
              </p>
              <p>
                ???????? ??????????:???????????? ???? ?????????????? ?????????????? ??????????:?????????? ???????????????? 50% 50
                ???????????? ?????????????? ???????? ???????????????????? :???????????? ???????? ???????? ?????? ????????????
              </p>
              <p style={{ color: "#777" }}>
                ???? ?????????? ?????? ?????????? ?? ???????????? ?????? ???????? ???? ?????????? ???????? ???????????? ????
                ???????? ?????????? ???????? ???????? ???????????? ?????????? ????????.
              </p>
            </div>
          )}
        </ul>
      </div>
    </>
  );
};

export default Categories;
