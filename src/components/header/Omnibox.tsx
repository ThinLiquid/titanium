import type { Component } from 'solid-js';
import styles from "./css/header.module.css"
import layers from '../../Layers.module.css'
import Icon from '../Icon';
import IconButton from '../IconButton';

const Omnibox: Component = () => {
  return (
    <div class={`${layers.layeri} ${styles.omnibox}`}>
      <div style={{
        "white-space": 'no-wrap',
        overflow: 'hidden',
        "text-overflow": 'ellipsis',
        width: '100%',
        height: '12px',
      }}>https://code.thinliquid.dev/?folder=/files/Data/Programming/thingy</div>
    </div>
  );
};

export default Omnibox
