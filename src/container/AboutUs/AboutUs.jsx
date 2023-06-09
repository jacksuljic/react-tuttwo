import React from 'react';

import './AboutUs.css';
import {images} from '../../constants'

const AboutUs = () => (
    <div className={'app__aboutus app__bg flex__center section__padding'} id={'about'}>
        <div className={'app__aboutus-overlay flex__center'}>
            <img src={images.G} alt={'letter G'} />
        </div>

        <div className={'app__aboutus-content flex__center'}>
            <div className={'app__aboutus-content_about'}>
                <h1 className={'headtext__cormorant'}>
                    About us
                </h1>

                <img src={images.spoon} alt={'about spoon'} className={'spoon__img'} />
                <p className={'p__opensans'}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. In dictum purus vitae tellus lobortis, at rhoncus sem vehicula. Integer vitae varius mi, at sodales nisl. Proin ullamcorper lacinia massa non pellentesque.
                </p>

                <button type={'button'} className={'custom__button'}>
                    Know more!
                </button>
            </div>
            <div className={'app__aboutus-content_knife flex__center'}>
                <img src={images.knife} alt={'about knife'} />
            </div>

            <div className={'app__aboutus-content_history'}>
                <h1 className={'headtext__cormorant'}>
                    Our History
                </h1>

                <img src={images.spoon} alt={'about spoon'} className={'spoon__img'} />
                <p className={'p__opensans'}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. In dictum purus vitae tellus lobortis, at rhoncus sem vehicula. Integer vitae varius mi, at sodales nisl. Proin ullamcorper lacinia massa non pellentesque.
                </p>

                <button type={'button'} className={'custom__button'}>
                    Know more!
                </button>
            </div>
        </div>
    </div>
);

export default AboutUs;
