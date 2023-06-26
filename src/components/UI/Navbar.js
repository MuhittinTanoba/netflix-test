import { Menu } from "antd";
import "./Navbar.css"

const Navbar = () => {
    return <div>
        <Menu id="menu"
            mode="horizontal"
            items={[
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
            ]}
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
