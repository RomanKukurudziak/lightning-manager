export const defaultPreset = {
  name: 'Preset 1',
  GB: '#ffffff',
  FN1: '#ffffff',
  FN2: '#ffffff',
  FN3: '#ffffff',
  FN4: '#ffffff',
  TAB: '#ffffff',
  Q: '#ffffff',
  W: '#ffffff',
  E: '#ffffff',
  R: '#ffffff',
  CAPS: '#ffffff',
  A: '#ffffff',
  S: '#ffffff',
  D: '#ffffff',
  F: '#ffffff',
  SHIFT: '#ffffff',
  Z: '#ffffff',
  X: '#ffffff',
  C: '#ffffff',
  V: '#ffffff',
  SPACE: '#ffffff',
};

export const defaultPreset2 = {
  name: 'Preset 2',
  GB: '#0600ff',
  FN1: '#0600ff',
  FN2: '#0600ff',
  FN3: '#0600ff',
  FN4: '#0600ff',
  TAB: '#0600ff',
  Q: '#ff0004',
  W: '#ff0004',
  E: '#ff0004',
  R: '#0600ff',
  CAPS: '#0600ff',
  A: '#ff0004',
  S: '#00ffdc',
  D: '#ff0004',
  F: '#0600ff',
  SHIFT: '#0600ff',
  Z: '#ff0004',
  X: '#ff0004',
  C: '#ff0004',
  V: '#0600ff',
  SPACE: '#0600ff',
};

export const loadStoragePreset = () => {
  const storagePreset = window.localStorage.getItem('preset');
  return storagePreset !== null ? JSON.parse(storagePreset) : undefined;
};

export const saveStoragePreset = (presets, groups) => {
  const storagePreset = JSON.stringify([presets, groups]);
  window.localStorage.setItem('preset', storagePreset);
};
