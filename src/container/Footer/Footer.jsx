import React from 'react';

import './Footer.css';

import { images } from '../../constants'
import { FooterOverlay, Newsletter } from '../../components'
import { FiInstagram, FiTwitter, FiFacebook} from "react-icons/fi";

const Footer = () =>
{
    return (
        <div className={'app__footer section__padding'}>
            <FooterOverlay />
            <Newsletter />

            <div className={'app__footer-links'}>

                <div className={'app__footer-links_contact'}>
                    <h1 className={'app__footer-headtext'}>
                        Contact Us
                    </h1>
                    <p className="p__opensans">9 W 53rd St, New York, NY 10019, USA</p>
                    <p className="p__opensans">+1 212-344-1230</p>
                    <p className="p__opensans">+1 212-555-1230</p>
                </div>

                <div className={'app__footer-links_logo'}>
                    <img src={images.gericht} alt={'restaurant logo'}/>
                    <p className={'p__opensans'}>
                        "The best way to find yourself is to lose yourself in the service ot others.
                    </p>
                    <img src={images.spoon} alt={'spoon'} className={'spoon__img'} style={{ marginTop: '15px'}} />

                    <div className={'app__footer-links_icons'}>
                        <FiFacebook />
                        <FiTwitter />
                        <FiInstagram />
                    </div>
                </div>
                <div className={'app__footer-links_work'}>
                    <h1 className={'app__footer-headtext'}>
                        Working Hours
                    </h1>
                    <p className="p__opensans">Monday-Friday:</p>
                    <p className="p__opensans">10:00 Am - 02:00 Am</p>
                    <p className="p__opensans">Saturday-Sunday:</p>
                    <p className="p__opensans">10:00 Am - 03:00 Am</p>
                </div>
            </div>

            <div className={'footer__copyright'}>
                <p className={'p__opensans'}>
                    2023 Unidev. All rights reserved
                </p>
            </div>
        </div>
    );
}

export default Footer;
