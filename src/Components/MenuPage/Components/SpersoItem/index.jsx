import React,{useState} from "react";
import Modal from "simple-react-modal";
import "./spersoItem.css";

const SpersoItem = ({title, price, priceEnt, priceSpe}) => {
  const [show, setShow] = useState(false);

  return (
    <div>
      <div className="coffeeBox" onClick={() => setShow(true)}>
        <div className="coffeePrices">
          <div className="coffeePrice">{priceSpe}</div>
          <div className="coffeePrice">{priceEnt}</div>
          <div className="coffeePrice">{price}</div>
        </div>
        <p className="coffeeName">{title}</p>
      </div>
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
    </div>
  );
};

export default SpersoItem;
