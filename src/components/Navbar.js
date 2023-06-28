import { Menu } from "antd";
import "./Navbar.css";

const items = [
  {
    label: "BulutMD",
    key: "bulutMD",
    id: "bulutMD",
  },
];
const items2 = [
  {
    label: "Giriş",
    key: "login",
    id: "login",
  },
  {
    label: "Deneme Başlat",
    key: "deneme",
    id: "deneme",
  },
];

const Navbar = () => {
  // Ant Design menu yapısı kullanılarak navigation bar yapılmıştır.
  // Mode - Yatay veya dikey seçme parametresi
  // Items - Navigation bar'da bulunacak öğelerin listesi
  return (
    <>
    <Menu id="menu" mode="horizontal" >
      <Menu id="banner" items={items} />
      <Menu id="others"  mode="horizontal" items={items2} />
    </Menu>
    <Menu id="titleMenu" mode="horizontal" items={[
      {
        label: "Popüler Başlıklar",
        id: "title"
      }
    ]}>
    </Menu>
    </>
  );
};

export default Navbar;
