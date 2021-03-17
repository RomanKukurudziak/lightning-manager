import React, { useEffect, useState } from 'react';
import {
  defaultPreset,
  defaultPreset2,
  defaultPreset3,
  loadStoragePreset,
  saveStoragePreset,
} from './default';
import {
  Main,
  Device,
  KeyboardStyle,
  Sidebar,
  Brush,
  Color,
  ColorWrapper,
} from './styled';
import { HuePicker } from 'react-color';
import '@simonwep/pickr/dist/themes/monolith.min.css';

const Config = () => {
  const [preset, setPreset] = useState(loadStoragePreset()[0] || defaultPreset);

  const [groups, setGroups] = useState(loadStoragePreset()[1] || []);
  const [newGroup, setNewGroup] = useState([]);
  const [curColor, setCurColor] = useState('#ffffff');
  const [showPicker, setShowPicker] = useState(true);

  const handleColorChange = (color) => {
    setCurColor(color.hex);
  };

  useEffect(() => {
    newGroup.forEach((key) =>
      setPreset((prevState) => ({ ...prevState, [key]: curColor }))
    );
    saveStoragePreset(preset, groups);
  }, [curColor]);

  const handleKeyClick = (e) => {
    setPreset((prevState) => ({
      ...prevState,
      [e.target.textContent]: curColor,
    }));

    if (newGroup.indexOf(e.target.textContent) !== -1) {
      newGroup.splice(newGroup.indexOf(e.target.textContent), 1);
    } else {
      setNewGroup([...newGroup, e.target.textContent]);
    }
  };

  const handleNewGroup = () => {
    if (
      newGroup.length === 0 ||
      (groups.flat(1).filter((key) => newGroup.includes(key)).length !== 0 &&
        groups.length > 0)
    )
      return;
    setGroups((prevState) => prevState.concat([newGroup]));

    setNewGroup([]);
  };

  const handlePresetSelect = (e) => {
    if (e.target.value === 'preset3') {
      setPreset(defaultPreset3);
    }
    if (e.target.value === 'preset2') {
      setPreset(defaultPreset2);
    }
    if (e.target.value === 'default') {
      setPreset(defaultPreset);
    }
  };

  const handleGroupSelect = (e) => {
    if (e.target.value === 'New') return setNewGroup([]);

    setNewGroup([...e.target.value.split(' ')]);
  };

  const handleClear = () => {
    setNewGroup([]);
  };

  const handleClearAll = () => {
    setNewGroup([]);
    setGroups([]);
    saveStoragePreset(preset, groups);
  };

  return (
    <>
      <Sidebar>
        <h2>LIGHTSYNC</h2>

        <label htmlFor="effect">EFFECT</label>

        <select id="effect" onChange={handlePresetSelect}>
          <option value="">NEW PRESET</option>
          <option value="default">DEFAULT</option>
          <option value="preset2">PRESET 1</option>
          <option value="preset3">PRESET 2</option>
        </select>
        <div>
          <Brush
            onClick={() => {
              showPicker ? setShowPicker(false) : setShowPicker(true);
            }}
          >
            <h4>COLOR BRUSH</h4>
            <Color
              style={{
                backgroundColor: curColor,
              }}
            />
          </Brush>
          <ColorWrapper
            style={{
              display: showPicker ? 'flex' : 'none',
            }}
          >
            <HuePicker
              color={curColor}
              onChange={handleColorChange}
              width="75%"
              height="17px"
            />
          </ColorWrapper>
        </div>
        <div>
          <h4>GROUP</h4>
          <div style={{ height: '30px' }}>
            {newGroup.length > 0 ? newGroup.map((key) => `${key} `) : ''}{' '}
          </div>
          <ColorWrapper>
            <button onClick={handleNewGroup}>ADD GROUP</button>
            <button onClick={handleClear}>CLEAR</button>
          </ColorWrapper>
          <ColorWrapper>
            <select onChange={handleGroupSelect}>
              <option value="New">NEW</option>
              {groups.length > 0
                ? groups.map((group) => (
                    <option
                      value={group.join(' ')}
                      key={group.join()}
                      onClick={() => {}}
                    >
                      {group.join(' ')}
                    </option>
                  ))
                : ''}
            </select>
          </ColorWrapper>
          <ColorWrapper>
            <button onClick={handleClearAll}>CLEAR ALL</button>
          </ColorWrapper>
        </div>
      </Sidebar>

      <Main>
        <Device>
          <KeyboardStyle className="keyboard">
            <div className="keyboard__row keyboard__row--h1">
              <span
                className="logo"
                style={{ color: preset.GB }}
                onClick={handleKeyClick}
              >
                GB
              </span>

              <div
                className="key--fn"
                className="key--word"
                style={{ color: preset.FN1 }}
                onClick={handleKeyClick}
              >
                FN1
              </div>

              <div
                className="key--fn"
                style={{ color: preset.FN2 }}
                onClick={handleKeyClick}
              >
                FN2
              </div>

              <div
                className="key--fn"
                style={{ color: preset.FN3 }}
                onClick={handleKeyClick}
              >
                FN3
              </div>
              <div
                className="key--fn"
                style={{ color: preset.FN4 }}
                onClick={handleKeyClick}
              >
                FN4
              </div>
            </div>

            <div className="keyboard__row">
              <div
                className="key--bottom-left key--word key--w4"
                style={{ color: preset.TAB }}
                onClick={handleKeyClick}
              >
                TAB
              </div>
              <div
                className="key--letter"
                style={{ color: preset.Q }}
                onClick={handleKeyClick}
              >
                Q
              </div>
              <div
                className="key--letter"
                style={{ color: preset.W }}
                onClick={handleKeyClick}
              >
                W
              </div>
              <div
                className="key--letter"
                style={{ color: preset.E }}
                onClick={handleKeyClick}
              >
                E
              </div>
              <div
                className="key--letter"
                style={{ color: preset.R }}
                onClick={handleKeyClick}
              >
                R
              </div>
            </div>

            <div className="keyboard__row">
              <div
                className="key--bottom-left key--word key--w5"
                style={{ color: preset.CAPS }}
                onClick={handleKeyClick}
              >
                CAPS
              </div>
              <div
                className="key--letter"
                style={{ color: preset.A }}
                onClick={handleKeyClick}
              >
                A
              </div>
              <div
                className="key--letter"
                style={{ color: preset.S }}
                onClick={handleKeyClick}
              >
                S
              </div>
              <div
                className="key--letter"
                style={{ color: preset.D }}
                onClick={handleKeyClick}
              >
                D
              </div>
              <div
                className="key--letter"
                style={{ color: preset.F }}
                onClick={handleKeyClick}
              >
                F
              </div>
            </div>

            <div className="keyboard__row">
              <div
                className="key--bottom-left key--word key--w6"
                style={{ color: preset.SHIFT }}
                onClick={handleKeyClick}
              >
                SHIFT
              </div>
              <div
                className="key--letter"
                style={{ color: preset.Z }}
                onClick={handleKeyClick}
              >
                Z
              </div>
              <div
                className="key--letter"
                style={{ color: preset.X }}
                onClick={handleKeyClick}
              >
                X
              </div>
              <div
                className="key--letter"
                style={{ color: preset.C }}
                onClick={handleKeyClick}
              >
                C
              </div>
              <div
                className="key--letter"
                style={{ color: preset.V }}
                onClick={handleKeyClick}
              >
                V
              </div>
            </div>

            <div className="keyboard__row keyboard__row--h3">
              <div
                className="key--double key--right key--space key--letter"
                style={{ color: preset.SPACE }}
                onClick={handleKeyClick}
              >
                SPACE
              </div>
            </div>
          </KeyboardStyle>
        </Device>
      </Main>
    </>
  );
};

export default Config;
