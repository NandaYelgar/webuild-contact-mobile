import React, { useEffect } from "react";
import { loadTimelineData } from "anima-timeline";
import "./Button2.css";

function Button2(props) {
  const { children } = props;

  useEffect(() => {
    loadTimelineData(x275595TimelineData);
  }, []);

  return (
    <div className="x275595 component component-wrapper not-ready">
      <div className="master-button-xb5Q3R">
        <div className="button-i275595511-do1dJx valign-text-middle">{children}</div>
      </div>
    </div>
  );
}

const x275595TimelineData = [
  {
    initial_state_name: "Property-1=Primary",
    root_element: ".x275595",
    states_flow: {
      "Property-1=Primary": {
        listeners: [],
        overrides: {},
      },
      "Property-1=Secondary": {
        listeners: [],
        overrides: {},
      },
      "Property-1=Tertiary": {
        listeners: [],
        overrides: {},
      },
    },
  },
];

export default Button2;
