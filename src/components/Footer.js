import React from "react";
import './Footer.css'
import { TwitterOutlined, FacebookFilled } from '@ant-design/icons'


const Footer = () => {

    return (
        <div className="main-footer">
            <div className="container">
                <div className="row">
                    Anasayfa | Kullanıcı Sözleşmesi | Gizlilik Sözleşmesi
                </div>
                <div className="row">
                <FacebookFilled height={"2em"} width={"2em"}></FacebookFilled> <TwitterOutlined /> 
                </div>
            </div>
        </div>
    )
}

export default Footer;