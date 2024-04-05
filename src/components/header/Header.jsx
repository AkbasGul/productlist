import Headerstyle from "../header/Header.module.scss";
const Header = ({ categories, text }) => {
  return (
    <div className={Headerstyle.header}>
      <h1>{text}</h1>
      <div className={Headerstyle.btns}>
       { categories.map(item =>(
        <button key={item}>{item}</button>) )}
      </div>
    </div>
  );
};
export default Header;
