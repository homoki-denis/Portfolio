import squareImg from "./images/square.png";
import minusImg from "./images/minus.png";
import closeImg from "./images/close.png";

export const MenuItem = [
  { title: "File", cName: "topNavLinks" },
  { title: "Edit", cName: "topNavLinks" },
  { title: "Go", cName: "topNavLinks" },
  { title: "Run", cName: "topNavLinks" },
  { title: "Terminal", cName: "topNavLinks" },
  { title: "Help", cName: "topNavLinks" },
];

export const MenuName = [
  {
    name: "Homoki Denis - portfolio - Visual Studio Code",
    cName: "topNavName",
  },
];

export const MenuButtons = [
  {
    url: `${minusImg}`,
    cName: "topNavButtons",
  },
  {
    url: `${squareImg}`,
    cName: "topNavButtons",
  },
  {
    url: `${closeImg}`,
    cName: "topNavButtons",
  },
];
