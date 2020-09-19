import React from 'react';
import useWebAnimations from "@wellyshen/use-web-animations";

import './FloatingIcons.css';

import FaceTimePopup from '../../assets/FaceTimePopup.jpg';

export const FloatingIcons = () => {
  const keyframes = ([
    { transform: "translateY(0)" },
    { transform: "translateY(8px)" },
    { transform: "translateY(0px)" }
  ]);
  const timing = {
    duration: 3000,
    iterations: Infinity
  }
  const { ref: apperRef } = useWebAnimations({ keyframes, timing });
  const { ref: messengerRef } = useWebAnimations({ keyframes, timing });
  const { ref: meetingRef } = useWebAnimations({ keyframes, timing });
  const { ref: skypeRef } = useWebAnimations({ keyframes, timing });
  const { ref: slackRef } = useWebAnimations({ keyframes, timing });
  const { ref: zoomRef } = useWebAnimations({ keyframes, timing });
  const { ref: hangoutsRef } = useWebAnimations({ keyframes, timing });
  const { ref: webexRef } = useWebAnimations({ keyframes, timing });
  const { ref: viberRef } = useWebAnimations({ keyframes, timing });
  const { ref: telegramRef } = useWebAnimations({ keyframes, timing });
  return (
    <div className="floatingIconWrapper">
      <div className="titleTextWrapper">
        <span className="titleTextTitleText">
          Control <br /> your microphone <br /> anywhere
        </span>
        <p className="floatingIconSubTitleText">
          Even during calls
        </p>
        <img src={FaceTimePopup} className="floatingIconImage" alt="floatingIconImage" />
        <div className="floatingIconsWrapper">
          <div className="floatingIcon appearIcon" ref={apperRef}>
            <img src="https://mutify.app/images/Appear-1ad98c17f8.png" alt="Appear" />
            <span>Appear</span>
          </div>
          <div className="floatingIcon messengerIcon" ref={messengerRef}>
            <img src="https://mutify.app/images/FB-1b46484926.png" alt="Messenger" />
            <span>FB Messenger</span>
          </div>
          <div className="floatingIcon meetingIcon" ref={meetingRef}>
            <img src="https://mutify.app/images/GoToMeetings-6907108d0d.png" alt="GoToMeetings" />
            <span>GoToMeetings</span>
          </div>
          <div className="floatingIcon skypeIcon" ref={skypeRef}>
            <img src="https://mutify.app/images/Skype-64e68baaf2.png" alt="Skype" />
            <span>Skype</span>
          </div>
          <div className="floatingIcon slackIcon" ref={slackRef}>
            <img src="https://mutify.app/images/Slack-a34e725729.png" alt="Slack" />
            <span>Slack</span>
          </div>
          <div className="floatingIcon zoomIcon" ref={zoomRef}>
            <img src="https://mutify.app/images/Zoom-0cb3267633.png" alt="Zoom" />
            <span>Zoom</span>
          </div>
          <div className="floatingIcon hangoutsIcon" ref={hangoutsRef}>
            <img src="https://mutify.app/images/Hangouts-de6270cae5.png" alt="Hangouts" />
            <span>Hangouts</span>
          </div>
          <div className="floatingIcon webexIcon" ref={webexRef}>
            <img src="https://mutify.app/images/Webex-0b269eb5af.png" alt="Webes" />
            <span>Webex</span>
          </div>
          <div className="floatingIcon viberIcon" ref={viberRef}>
            <img src="https://mutify.app/images/Viber-bcad9961af.png" alt="Viber" />
            <span>Viber</span>
          </div>
          <div className="floatingIcon telegramIcon" ref={telegramRef}>
            <img src="https://mutify.app/images/Telegram-d2ec968abe.png" alt="Telegram" />
            <span>Telegram</span>
          </div>
          <div className="floatingIcon skypeBlurIcon">
            <img src="https://mutify.app/images/Skype-64e68baaf2.png" alt="Skype" />
          </div>
          <div className="floatingIcon viberBlurIcon">
            <img src="https://mutify.app/images/Viber-bcad9961af.png" alt="Viber" />
          </div>
          <div className="floatingIcon telegramBlurIcon">
            <img src="https://mutify.app/images/Telegram-d2ec968abe.png" alt="Telegram" />
          </div>
          <div className="floatingIcon slackBlurIcon">
            <img src="https://mutify.app/images/Slack-a34e725729.png" alt="Slack" />
          </div>
          <div className="floatingIcon messengerBlurIcon">
            <img src="https://mutify.app/images/FB-1b46484926.png" alt="FB" />
          </div>
          <div className="floatingIcon hangoutsBlurIcon">
            <img src="https://mutify.app/images/Hangouts-de6270cae5.png" alt="Hangouts" />
          </div>
        </div>
      </div>
    </div>
  );
}