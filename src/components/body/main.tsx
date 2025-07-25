import type { Component } from 'solid-js';


const Body: Component = () => {
  return (

    <div id="mainBody" style={{
      display: "flex",
      flex: 1
    }}>
      <iframe id="mainBodyFrame" height="100%" width="100%" style={{
      border: "none"
    }}></iframe>
    </div>
  );
};

export default Body