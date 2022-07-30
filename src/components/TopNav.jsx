import { MenuItem, MenuName, MenuButtons } from "../TopNavItems";

const TopNav = () => {
  const navbarTop = MenuItem.map((item, index) => (
    <span key={index} className={item.cName}>
      {item.title}
    </span>
  ));

  const navbarTopName = MenuName.map((item, index) => (
    <span key={index} className={item.cName}>
      {item.name}
    </span>
  ));

  const navbarTopButtons = MenuButtons.map((item, index) => (
    <img src={item.url} key={index} className={item.cName}></img>
  ));

  return (
    <div className="topnav">
      <div className="navbarItems">
        <img
          src="https://vscode-portfolio.vercel.app/_next/image?url=%2Fvscode_icon.svg&w=16&q=75"
          alt="vscode"
          className="topnav-img"
        />
        {navbarTop}
      </div>
      <div className="navbarName">{navbarTopName}</div>
      <div className="navbarButtonsItems">{navbarTopButtons}</div>
    </div>
  );
};

export default TopNav;
