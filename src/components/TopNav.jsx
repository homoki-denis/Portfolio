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
          src="https://www.svgrepo.com/show/374171/vscode.svg"
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
