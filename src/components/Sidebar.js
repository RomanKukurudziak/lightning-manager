import React, { useEffect, useRef, useState } from 'react';
import { HuePicker } from 'react-color';
import { Brush, Color, ColorWrapper, SidebarContainer } from './styled';
import { saveStoragePreset } from './default';

function Sidebar({
  presets,
  setCurrentPreset,
  newGroup,
  groups,
  setNewGroup,
  setGroups,
  curColor,
  setCurColor,
  setPresets,
  currentPreset,
}) {
  const [showPicker, setShowPicker] = useState(true);
  const selectRef = useRef();

  useEffect(() => {
    setPresets((prevState) => {
      let newState = prevState;
      newState[+selectRef.current.value] = currentPreset;
      return newState;
    });
  }, [curColor, setPresets, currentPreset]);

  const handleGroupSelect = (e) => {
    if (e.target.value === 'New') return setNewGroup([]);

    setNewGroup([...e.target.value.split(' ')]);
  };

  const handleClear = () => {
    setNewGroup([]);
  };

  const handleClearAll = async () => {
    await setNewGroup([]);
    await setGroups([]);
    saveStoragePreset(presets, groups);
  };

  //Getting current color from color picker
  const handleColorChange = (color) => {
    setCurColor(color.hex);
  };

  //Add group. If key is in the group console.log error
  const handleNewGroup = () => {
    if (
      newGroup.length === 0 ||
      (groups.flat(1).filter((key) => newGroup.includes(key)).length !== 0 &&
        groups.length > 0)
    )
      return console.log("Can't add key that is  already in a group!");
    setGroups((prevState) => prevState.concat([newGroup]));

    setNewGroup([]);
  };

  const handlePresetSelect = (e) => {
    setCurrentPreset(presets[+e.target.value]);
  };

  return (
    <SidebarContainer>
      <h2>LIGHTSYNC</h2>

      <label htmlFor="effect">EFFECT</label>

      <select ref={selectRef} id="effect" onChange={handlePresetSelect}>
        {presets.map((preset, i) => (
          <option key={preset.name} value={i}>
            {preset.name}
          </option>
        ))}
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
          {newGroup.length > 0 ? newGroup.map((key) => `${key} `) : ''}
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
    </SidebarContainer>
  );
}

export default Sidebar;
