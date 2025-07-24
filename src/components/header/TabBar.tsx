import type { Component } from 'solid-js';
import styles from "./css/header.module.css"
import layers from '../../Layers.module.css'
import Icon from '../Icon';
import IconButton from '../IconButton';

const TabBar: Component = () => {
  return (
    <div class={styles.tabBar}>
      <div class={`${layers.layer1} ${styles.tab} ${layers.reactive}`}>
        <Icon name="globe" size={18} /> 
        <span>New Tab</span>
        <IconButton name="close_small" size={24} radius={'8px'} />
      </div>
      <div class={`${layers.layer0} ${styles.tab} ${layers.reactive}`}>
        <Icon name="globe" size={18} /> 
        <span>New Tab</span>
        <IconButton name="close_small" size={24} radius={'8px'} />
      </div>
      <IconButton name="add" />
    </div>
  );
};

export default TabBar
