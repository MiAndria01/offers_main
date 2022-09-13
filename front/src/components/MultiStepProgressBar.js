import React from "react";
import "react-step-progress-bar/styles.css";
import { ProgressBar, Step } from "react-step-progress-bar";
import "../styles/MultiStepProgressBar.css";

export const MultiStepProgressBar = (props) => {
  return (
    <ProgressBar
        percent={((props.step - 1) * 100) / 3}
        filledBackground="#fa9e1b"
      >
        <Step transition="scale">
          {({ accomplished, index }) => (
            <div
              className={`step ${accomplished ? "completed" : null}`}
            >
              1
            </div>
          )}
        </Step>
        <Step transition="scale">
          {({ accomplished, index }) => (
            <div
              className={`step ${accomplished ? "completed" : null}`}
            >
              2
            </div>
          )}
        </Step>
        <Step transition="scale">
          {({ accomplished, index }) => (
            <div
              className={`step ${accomplished ? "completed" : null}`}
            >
              3
            </div>
          )}
        </Step>
        <step transition="scale">
        {({ accomplished, index }) => (
            <div
              className={`step ${accomplished ? "completed" : null}`}
            >
              4
            </div>
          )}
        </step>

      </ProgressBar>
  )
};