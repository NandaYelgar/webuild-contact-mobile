import React from "react";
import Frame145 from "../Frame145";
import TextInputsNormal3 from "../TextInputsNormal3";
import Button2 from "../Button2";
import Group2122 from "../Group2122";
import "./X10ContactUsPageMobile.css";

function X10ContactUsPageMobile(props) {
  const {
    place,
    rectangle99,
    sendAMessage,
    text111,
    frame145Props,
    textInputsNormal3Props,
    textInputsNormal32Props,
    textInputsNormal33Props,
    textInputsNormal34Props,
    button2Props,
    group2122Props,
  } = props;

  return (
    <div class="container-center-horizontal">
      <div className="x10-contact-us-page-mobile screen">
        <Frame145 group86Props={frame145Props.group86Props} iconMenuProps={frame145Props.iconMenuProps} />
        <h1 className="place valign-text-middle typographyheadlineh4-extrabold-24">{place}</h1>
        <img className="rectangle-99" src={rectangle99} />
        <div className="send-a-message valign-text-middle typographyheadlineh4-extrabold-24">{sendAMessage}</div>
        <p className="text-3 typography-body-smalltext-14-regular">{text111}</p>
        <div className="frame-205">
          <div className="frame-1652">
            <TextInputsNormal3 frame122Props={textInputsNormal3Props.frame122Props} />
            <TextInputsNormal3
              className={textInputsNormal32Props.className}
              frame122Props={textInputsNormal32Props.frame122Props}
            />
            <TextInputsNormal3
              className={textInputsNormal33Props.className}
              frame122Props={textInputsNormal33Props.frame122Props}
            />
            <TextInputsNormal3
              className={textInputsNormal34Props.className}
              frame122Props={textInputsNormal34Props.frame122Props}
            />
          </div>
          <Button2>{button2Props.children}</Button2>
        </div>
        <Group2122
          group862Props={group2122Props.group862Props}
          group872Props={group2122Props.group872Props}
          group322Props={group2122Props.group322Props}
          frame5Props={group2122Props.frame5Props}
        />
      </div>
    </div>
  );
}

export default X10ContactUsPageMobile;
