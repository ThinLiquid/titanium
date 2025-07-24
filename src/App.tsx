import type { Component } from 'solid-js';

import styles from './App.module.css';
import layers from './Layers.module.css'

import Body from "./components/body/main";
import Header from "./components/header/main"

import 'material-symbols/sharp.css'

const App: Component = () => {
  return (
    <div class={styles.App}>
        <div class={styles.header}>
          <Header/>
        </div>

        <div class={`${layers.layer1} ${styles.content}`}>
          <Body/>
        </div>
    </div>
  );
};

export default App;
