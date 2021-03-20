import React, { useState, useEffect } from 'react';
import { loadStoragePreset, saveStoragePreset } from './components/default';
import 'normalize.css';
import { Wrapper } from './components/styled';
import Sidebar from './components/Sidebar';
import { defaultPreset, defaultPreset2 } from './components/default';
import Device from './components/Device';

function App() {
  const [presets, setPresets] = useState(
    loadStoragePreset()[0] || [defaultPreset, defaultPreset2]
  );

  const [currentPreset, setCurrentPreset] = useState(presets[0]);
  const [groups, setGroups] = useState(loadStoragePreset()[1] || []);
  const [newGroup, setNewGroup] = useState([]);
  const [curColor, setCurColor] = useState('#ffffff');

  //Set color for each key in current group of current color change
  useEffect(() => {
    newGroup.forEach((key) =>
      setCurrentPreset((prevState) => ({ ...prevState, [key]: curColor }))
    );
    saveStoragePreset(presets, groups);
  }, [curColor, newGroup, groups, presets]);

  //Setting current color for each key/logo into current preset. Setting key into current group, if its already in a group remove from current group
  const handleKeyClick = (e) => {
    setCurrentPreset((prevState) => ({
      ...prevState,
      [e.target.textContent]: curColor,
    }));

    if (newGroup.indexOf(e.target.textContent) !== -1) {
      newGroup.splice(newGroup.indexOf(e.target.textContent), 1);
    } else {
      setNewGroup([...newGroup, e.target.textContent]);
    }
  };

  return (
    <Wrapper>
      <Sidebar
        presets={presets}
        setCurrentPreset={setCurrentPreset}
        newGroup={newGroup}
        groups={groups}
        setNewGroup={setNewGroup}
        setGroups={setGroups}
        curColor={curColor}
        setCurColor={setCurColor}
        setPresets={setPresets}
        currentPreset={currentPreset}
      />
      <Device currentPreset={currentPreset} handleKeyClick={handleKeyClick} />
    </Wrapper>
  );
}

export default App;
