import { Link } from "react-router-dom";
import "./header.css";

const Header = () => {
  return (
    <>
      <Link to="/">
        <header className="header">کافه بلو</header>
      </Link>
      <div className="box">
        <img src="/images/logo.png" alt="" />
        <h5 className="title">میهمانان عزیز به کافه بلو خوش آمدید</h5>
      </div>
    </>
  );
};

export default Header;
