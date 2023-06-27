import { Menu } from "antd";
import "./Navbar.css"

const items = [
    {
        label: "BulutMD",
        key: "bulutMD",
        id: "bulutMD",
    },
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
    return <div>
        <Menu id="menu"
            mode="horizontal"
            items={items}
        ></Menu>

        <Menu id="titleMenu"
            mode="horizontal"
            items={[
                {
                    label: "Popüler Başlıklar",
                    key: "titles",
                    id: "titles",
                },
            ]}
        ></Menu>

    </div>
};

export default Navbar;
