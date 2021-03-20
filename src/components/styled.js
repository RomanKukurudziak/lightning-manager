import styled from 'styled-components';

export const SidebarContainer = styled.aside`
  color: gray;
  background-color: #181818;
  flex-basis: 25%;
  width: 300px;
  padding: 10px;
  box-sizing: border-box;
  font-size: 14px;
  & h2 {
    margin: 0;
    color: white;
    margin-bottom: 50px;
  }

  & label {
    display: block;
    color: grey;
    margin-bottom: 10px;
  }

  & select {
    margin-left: -3px;
    color: white;
    background-color: transparent;
    border: none;
    outline: none;
    background-color: #181818;
  }

  & button {
  }
`;

export const Wrapper = styled.div`
  display: flex;

  height: 100vh;
  bottom: 0;
`;

export const Main = styled.div`
  background-color: black;
  flex-basis: 75%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Button = styled.button``;

export const DeviceContainer = styled.div`
  box-sizing: border-box;
  background-color: gray;
  display: flex;
  padding: 30px;
  align-items: center;
  justify-content: center;
  width: 400px;
  border-radius: 10px;
  bottom: 0;
`;

export const KeyboardStyle = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  font-size: 14px;
  font-family: sans-serif;

  & h1 {
    text-align: center;
    font-size: 1.8em;
    font-family: monospace;
    padding: 0.7em;
  }

  & .keyboard__row {
    display: block;
    height: 3em;
    margin: 0.2em;
  }

  &.keyboard__row--h1 {
    height: 1.7em;
    line-height: 1.4em;
  }

  & .keyboard__row--h3 {
    height: 3.3em;
  }

  & .keyboard__row > * {
    position: relative;
    background: #333;
    text-align: center;
    color: #eee;
    float: left;
    border-radius: 0.3em;
    margin: 0.2em;
    padding: 0.2em;
    width: 3.3em;
    height: 100%;
    box-sizing: border-box;
    cursor: pointer;
    -webkit-user-select: none;
    border: 1px solid #444;
    box-shadow: 0 0.2em 0 0.05em #222;
    border-bottom-color: #555;
  }

  & .keyboard__row--h1 > div {
    width: 3.5em;
  }

  & .keyboard__row > div[data-pressed],
  & .keyboard__row > div:active {
    background: #2a2a2a;
    color: #aaa;
    position: relative;
    top: 0.2em;
    box-shadow: 0 0 0 0.05em black;
  }

  & .key--w3 {
    width: 4.6em;
  }

  & .key--w4 {
    width: 6em;
  }

  & .key--w5 {
    width: 6.5em;
  }

  & .key--w6 {
    width: 8.3em;
  }

  & .key--space {
    width: 100%;
  }

  & .key--double > * {
    padding-top: 0.1em;
  }

  & .key--letter {
    line-height: 2.8em;
  }

  & .key--bottom-left > * {
    position: absolute;
    text-align: left;
    bottom: 0.4em;
    left: 0.4em;
  }

  & .key--bottom-right > * {
    position: absolute;
    text-align: right;
    bottom: 0.4em;
    right: 0.4em;
  }

  & .key--fn > * {
    font-size: 0.6em;
    line-height: 1em;
    padding-top: 1.2em;
    padding-right: 0.2em;
    text-align: right;
    float: right;
  }

  & .key--word > * {
    font-size: 0.8em;
  }

  & .key--arrow--tall > *,
  & .key--arrow > * {
    font-size: 0.5em;
    line-height: 3em;
  }

  & .key--arrow {
    height: 1.8em;
    margin-top: 1.7em;
    line-height: 0.5em;
  }

  & .key--arrow--tall > * {
    padding-top: 0.2em;
  }

  & .keyboard > .keyboard__row {
    text-align: center;
  }

  & .logo {
    text-align: center;
    font-size: 42px;
    border: none;
    box-shadow: none;
    background-color: transparent;
    width: 65px !important;
    margin: 0;
    padding: 0;
    color: red;
  }
`;

export const Brush = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
`;

export const Color = styled.div`
  display: block;
  width: 17px;
  height: 17px;
  border-radius: 50%;
  border: 2px solid white;
`;

export const ColorWrapper = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;

  & select {
    max-width: 90%;
    margin: 20px;
  }

  & button {
    margin: 20px;
    width: 120px;
    height: 30px;
    color: white;
    background-color: transparent;
    border: 2px solid gray;
    border-radius: 4px;
  }

  & button:hover {
    cursor: pointer;
  }
`;

export const ButtonWrapper = styled.div`
  display: flex;
`;
