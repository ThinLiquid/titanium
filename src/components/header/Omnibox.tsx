import type { Component } from 'solid-js';
import styles from "./css/header.module.css"
import layers from '../../Layers.module.css'
import Icon from '../Icon';
import IconButton from '../IconButton';

const Omnibox: Component = () => {
  return (
    <div class={`${layers.layeri} ${styles.omnibox}`}>
      <input 
      contenteditable="true"
      autocorrect="off"
      spellcheck="false"
      autocapitalize='off'
      autocomplete='off'
      class={`${styles.searchbar} ${layers.layeri}`}
      placeholder="Search or enter a URL" 
      onKeyDown={(e) => {
        if (e.key == "Enter") {
          e.preventDefault();
          let navUrl = (e.target as HTMLInputElement).value;
          let cFrame = document.createElement("iframe");
          cFrame.src = navUrl;
          localStorage.setItem("tabs", JSON.stringify(
            {
              cFrame
            }
          ))
        }
      }}
      ></input>
    </div>
  );
};

export default Omnibox
