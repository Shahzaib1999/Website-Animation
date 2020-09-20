import React from 'react';
import { BallBeat } from 'react-pure-loaders';
import { Button } from 'react-bootstrap';

import './Volume.css';

export const Volume = () => {
  return (
    <div className="volumeMainWrapper">
      <div className="containerWrapper">
        <div className="volumeWrapper">
          <div className="volumeTextWrapper">
            <h2 className="volumeTitle">
              Easily control the volume level
            </h2>
            <p>
              Use a shortcut to&nbsp;quickly access a&nbsp;window for your&nbsp;microphone volume&nbsp;controls
            </p>
            <Button className="headerBuyBtn volumeBtn ml-0">
              Try It Free
            </Button>
          </div>
          <div className="volumeImgWrapper">
            <img src="https://mutify.app/images/wave-c1b84a9196.png" alt="wave" className="volumeImage" />
            <div className="volumeLoaderWrapper">
              <BallBeat
                color={'#fff'}
                loading={true}
              />
              <BallBeat
                color={'#fff'}
                loading={true}
              />
              <BallBeat
                className="dot"
                color={'#fff'}
                loading={true}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}