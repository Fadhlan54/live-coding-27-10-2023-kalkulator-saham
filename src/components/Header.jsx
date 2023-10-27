import logo from "./../assets/investment-calculator-logo.png";
import "./Header.css";

function Header() {
  return (
    <header id="header">
      <img src={logo} alt="logo" />
      <h1>Kalkulator Saham</h1>
    </header>
  );
}

export default Header;
