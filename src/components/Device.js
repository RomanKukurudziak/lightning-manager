import React from 'react';

import { Main, DeviceContainer, KeyboardStyle } from './styled';

const Device = ({ currentPreset, handleKeyClick }) => {
  return (
    <>
      <Main>
        <DeviceContainer>
          <KeyboardStyle className="keyboard">
            <div className="keyboard__row keyboard__row--h1">
              <span
                className="logo"
                style={{ color: currentPreset.GB }}
                onClick={handleKeyClick}
              >
                GB
              </span>

              <div
                className="key--fn key--word"
                style={{ color: currentPreset.FN1 }}
                onClick={handleKeyClick}
              >
                FN1
              </div>

              <div
                className="key--fn"
                style={{ color: currentPreset.FN2 }}
                onClick={handleKeyClick}
              >
                FN2
              </div>

              <div
                className="key--fn"
                style={{ color: currentPreset.FN3 }}
                onClick={handleKeyClick}
              >
                FN3
              </div>
              <div
                className="key--fn"
                style={{ color: currentPreset.FN4 }}
                onClick={handleKeyClick}
              >
                FN4
              </div>
            </div>

            <div className="keyboard__row">
              <div
                className="key--bottom-left key--word key--w4"
                style={{ color: currentPreset.TAB }}
                onClick={handleKeyClick}
              >
                TAB
              </div>
              <div
                className="key--letter"
                style={{ color: currentPreset.Q }}
                onClick={handleKeyClick}
              >
                Q
              </div>
              <div
                className="key--letter"
                style={{ color: currentPreset.W }}
                onClick={handleKeyClick}
              >
                W
              </div>
              <div
                className="key--letter"
                style={{ color: currentPreset.E }}
                onClick={handleKeyClick}
              >
                E
              </div>
              <div
                className="key--letter"
                style={{ color: currentPreset.R }}
                onClick={handleKeyClick}
              >
                R
              </div>
            </div>

            <div className="keyboard__row">
              <div
                className="key--bottom-left key--word key--w5"
                style={{ color: currentPreset.CAPS }}
                onClick={handleKeyClick}
              >
                CAPS
              </div>
              <div
                className="key--letter"
                style={{ color: currentPreset.A }}
                onClick={handleKeyClick}
              >
                A
              </div>
              <div
                className="key--letter"
                style={{ color: currentPreset.S }}
                onClick={handleKeyClick}
              >
                S
              </div>
              <div
                className="key--letter"
                style={{ color: currentPreset.D }}
                onClick={handleKeyClick}
              >
                D
              </div>
              <div
                className="key--letter"
                style={{ color: currentPreset.F }}
                onClick={handleKeyClick}
              >
                F
              </div>
            </div>

            <div className="keyboard__row">
              <div
                className="key--bottom-left key--word key--w6"
                style={{ color: currentPreset.SHIFT }}
                onClick={handleKeyClick}
              >
                SHIFT
              </div>
              <div
                className="key--letter"
                style={{ color: currentPreset.Z }}
                onClick={handleKeyClick}
              >
                Z
              </div>
              <div
                className="key--letter"
                style={{ color: currentPreset.X }}
                onClick={handleKeyClick}
              >
                X
              </div>
              <div
                className="key--letter"
                style={{ color: currentPreset.C }}
                onClick={handleKeyClick}
              >
                C
              </div>
              <div
                className="key--letter"
                style={{ color: currentPreset.V }}
                onClick={handleKeyClick}
              >
                V
              </div>
            </div>

            <div className="keyboard__row keyboard__row--h3">
              <div
                className="key--double key--right key--space key--letter"
                style={{ color: currentPreset.SPACE }}
                onClick={handleKeyClick}
              >
                SPACE
              </div>
            </div>
          </KeyboardStyle>
        </DeviceContainer>
      </Main>
    </>
  );
};

export default Device;
