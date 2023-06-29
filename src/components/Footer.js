import React from "react";
import './Footer.css'

//icon (twitter facebook logo)
import { TwitterOutlined, FacebookFilled } from '@ant-design/icons'


const Footer = () => {

    return (
        <div className="main-footer">
            <div className="container">
                <div className="row">
                    <a id="footer-info" href="/"> Anasayfa | Kullanıcı Sözleşmesi | Gizlilik Sözleşmesi </a> 
                </div>
                <div className="row" style={{marginTop: '8px'}}>
                    <a id="facebook-logo" href="https://www.facebook.com/bulutmdyazilim/" target="_blank" rel="noreferrer"><FacebookFilled  style={{ fontSize: '2.5em', color: 'white' }}/></a>
                    <a id="twitter-logo"  href="https://twitter.com/bulut_mdyazilim" target="_blank" rel="noreferrer"><TwitterOutlined style={{ marginLeft: '15px', fontSize: '2.5em', color: 'white' }}/></a>
                </div>
            </div>
        </div>
    )
}

export default Footer;