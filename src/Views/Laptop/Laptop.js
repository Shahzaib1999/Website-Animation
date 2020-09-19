import React from 'react';
import useWebAnimations, { bounceIn } from "@wellyshen/use-web-animations";
import { Button } from 'react-bootstrap';

import './Laptop.css';

export const Laptop = () => {
  const { ref } = useWebAnimations({
    ...bounceIn, timing: {
      delay: 1500,
      duration: 2000,
      iterations: Infinity
    }
  });
  return (
    <div>
      <div className="laptopWrapper">
        <img src="https://mutify.app/images/macbook-1-51fcc36e0a.png" alt="bg" className="laptopImg" />
        <img src="https://mutify.app/images/magnifier-1878b93fb0.png" alt="bg" ref={ref} className="micImg" />
        <div className="laptopBgWrapper">
          <img src="https://mutify.app/images/wave-2-ca2e74569e.svg" alt="bg" />
        </div>
      </div>
      <p className="laptopText">
        Use a shortcut or the touch bar on any Mac device <br /> to quickly mute your microphone
      </p>
      <div className="btnWrapper text-center">
        <Button className="headerDownloadBtn">Download</Button>
        <Button className="headerBuyBtn">Buy: $4.99</Button>
      </div>
    </div>
  )
}