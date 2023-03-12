import React from 'react';
import {SubHeading} from '../../components'
import {images} from '../../constants'

import './Chef.css';

const Chef = () => (
    <div className={'app__bg app__wrapper section__padding'}>
        <div className={'app__wrapper_img app__wrapper_img-reverse'}>
            <img src={images.chef} alt={'chef'} />
        </div>

        <div className={'app__wrapper_info'}>
            <SubHeading title={'Chef\'s Word'} />
            <h1 className={'headtext__cormorant'}> What We Believe In</h1>

            <div className={'app__chef-content'}>
                <div className={'app__chef-content_quote'}>
                    <img src={images.quote} alt={'chef\'s quote'}/>
                    <p className={'p__opensans'}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </p>
                </div>
                <p className={'p__opensans'}>
                    Morbi sed nulla tempus, gravida eros ac, hendrerit quam.
                    Praesent molestie porta risus in posuere. Nunc eu magna molestie, finibus ante at.
                </p>
            </div>
            <div className={'app__chef-sign'}>
                <p>Kevin Lou</p>
                <p className={'p__opensans'}>
                    Chef & Founder
                </p>
                <img src={images.sign} alt={'Chef\'s signature'} />
            </div>
        </div>
  </div>
);

export default Chef;
