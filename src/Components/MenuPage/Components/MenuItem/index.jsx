import React, { useState } from "react";
import Modal from "simple-react-modal";
import "./menuItem.css";

const MenuItem = ({ title, price, desc }) => {
  const [show, setShow] = useState(false);

  return (
    <>
      <li className="menuList" onClick={() => setShow(true)}>
        <div className="menuPrice">{price}</div>
        <div className="rightList">
          <div className="menuTitle">{title}</div>
          <div className="menuDesc">{desc}</div>
        </div>
      </li>
      <Modal
        show={show}
        closeOnOuterClick={true}
        containerClassName="modal"
        onClose={() => setShow(false)}
      >
        <div>
          <img
            className="modalImg"
            alt="modal"
            src="/images/categories/cookie.svg"
          />
        </div>
      </Modal>
    </>
  );
};

export default MenuItem;
