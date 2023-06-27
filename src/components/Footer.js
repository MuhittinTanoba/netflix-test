import React from "react";
import './Footer.css'

//icon (twitter facebook logo)
import { TwitterOutlined, FacebookFilled } from '@ant-design/icons'


const Footer = () => {

    return (
        <div className="main-footer">
            <div className="container">
                <div className="row">
                    Anasayfa | Kullanıcı Sözleşmesi | Gizlilik Sözleşmesi
                </div>
                <div className="row">
                    <FacebookFilled></FacebookFilled> <TwitterOutlined /> 
                </div>
            </div>
        </div>
    )
}

export default Footer;