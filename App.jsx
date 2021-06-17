import "./App.css";
import React from "react";
import { Switch, BrowserRouter as Router, Route } from "react-router-dom";
import X10ContactUsPageMobile from "./components/X10ContactUsPageMobile";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/:path(|10-contact-us-page-mobile)">
          <X10ContactUsPageMobile {...x10ContactUsPageMobileData} />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
const whiteData = {
    src: "https://anima-uploads.s3.amazonaws.com/projects/60c1b397ba70f9d1bdda22ff/img/vector-98@2x.svg",
};

const group86Data = {
    group85: "https://anima-uploads.s3.amazonaws.com/projects/60c1b397ba70f9d1bdda22ff/img/group-85-3@2x.svg",
    whiteProps: whiteData,
};

const iconMenuData = {
    vector2: "https://anima-uploads.s3.amazonaws.com/projects/60c1b397ba70f9d1bdda22ff/img/vector-159@2x.svg",
    vector3: "https://anima-uploads.s3.amazonaws.com/projects/60c1b397ba70f9d1bdda22ff/img/vector-159@2x.svg",
};

const frame145Data = {
    group86Props: group86Data,
    iconMenuProps: iconMenuData,
};

const frame122Data = {
    children: "Comment",
    className: "",
};

const textInputsNormal3Data = {
    frame122Props: frame122Data,
};

const frame1222Data = {
    children: "Name (Required)",
    className: "frame-1-2",
};

const textInputsNormal32Data = {
    className: "text-inputs-normal",
    frame122Props: frame1222Data,
};

const frame1223Data = {
    children: "Email (Required)",
    className: "frame-1-3",
};

const textInputsNormal33Data = {
    className: "text-inputs-normal",
    frame122Props: frame1223Data,
};

const frame1224Data = {
    children: "Phone Number  (Required)",
    className: "frame-1",
};

const textInputsNormal34Data = {
    className: "text-inputs-normal",
    frame122Props: frame1224Data,
};

const button2Data = {
    children: "SEND MESSAGE",
};

const group8622Data = {
    group85: "https://anima-uploads.s3.amazonaws.com/projects/60c1b397ba70f9d1bdda22ff/img/group-85-17@2x.svg",
};

const facebookAppSymbolData = {
    src: "https://anima-uploads.s3.amazonaws.com/projects/60c1b397ba70f9d1bdda22ff/img/f-1-1@2x.svg",
};

const twitterData = {
    src: "https://anima-uploads.s3.amazonaws.com/projects/60c1b397ba70f9d1bdda22ff/img/vector-157@2x.svg",
};

const group872Data = {
    overlapGroup: "https://anima-uploads.s3.amazonaws.com/projects/60c1b397ba70f9d1bdda22ff/img/vector-154@2x.svg",
    vector2: "https://anima-uploads.s3.amazonaws.com/projects/60c1b397ba70f9d1bdda22ff/img/vector-19@2x.svg",
    facebookAppSymbolProps: facebookAppSymbolData,
    twitterProps: twitterData,
};

const group322Data = {
    place: "Contact",
    overlapGroup: "https://anima-uploads.s3.amazonaws.com/projects/60c1b397ba70f9d1bdda22ff/img/vector-20@2x.svg",
    phone: "https://anima-uploads.s3.amazonaws.com/projects/60c1b397ba70f9d1bdda22ff/img/vector-151@2x.svg",
    overlapGroup1: "https://anima-uploads.s3.amazonaws.com/projects/60c1b397ba70f9d1bdda22ff/img/vector-152@2x.svg",
    vector2: "https://anima-uploads.s3.amazonaws.com/projects/60c1b397ba70f9d1bdda22ff/img/vector-153@2x.svg",
    text165: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.",
    text164: "+91 8976535221, +91 8755645342",
    contactWebuildCom: "contact@webuild.com",
};

const frame140Data = {
    aboutUs: "About Us",
    projects: "Projects",
};

const frame1402Data = {
    aboutUs: "Gallery",
    projects: "Knowledge Transfer",
    className: "frame-14-1",
};

const frame1403Data = {
    aboutUs: "Blogs",
    projects: "FAQ’s",
    className: "frame-14",
};

const frame5Data = {
    quickLinks: "Quick Links",
    frame140Props: frame140Data,
    frame1402Props: frame1402Data,
    frame1403Props: frame1403Data,
};

const group2122Data = {
    group862Props: group8622Data,
    group872Props: group872Data,
    group322Props: group322Data,
    frame5Props: frame5Data,
};

const x10ContactUsPageMobileData = {
    place: "Contact",
    rectangle99: "https://anima-uploads.s3.amazonaws.com/projects/60c1b397ba70f9d1bdda22ff/img/rectangle-99-1@2x.png",
    sendAMessage: "Send a message",
    text111: "There are many variations of passages of Lorem Ipsum available but the majority have suffered dummy alteration in that an some form by the injected humour or randomised words which don’t look even that slightly believable. If you are Lorem Ipsums your need to be sure there isn’t anything embarrassing.",
    frame145Props: frame145Data,
    textInputsNormal3Props: textInputsNormal3Data,
    textInputsNormal32Props: textInputsNormal32Data,
    textInputsNormal33Props: textInputsNormal33Data,
    textInputsNormal34Props: textInputsNormal34Data,
    button2Props: button2Data,
    group2122Props: group2122Data,
};

