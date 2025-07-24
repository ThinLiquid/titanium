import type { Component } from 'solid-js';
import styles from "./css/header.module.css"
import layers from '../../Layers.module.css'
import Icon from '../Icon';
import IconButton from '../IconButton';
import Omnibox from './Omnibox';

const ToolBar: Component = () => {
  return (
    <div class={`${layers.layer1} ${styles.toolBar}`}>
      <div style={{
        padding: '4px 0px',
        display: 'flex',
        gap: '4px',
        flex: '1',
      }}>
        <IconButton name="first_page" />
        <IconButton name="refresh" />
        <IconButton name="last_page" />
        <Omnibox/>
      </div>
    </div>
  );
};

export default ToolBar