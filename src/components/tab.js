import React from 'react';

export default ({ children, active, tabID, makeActive }) => (
  <button className={active ? "tab active" : "tab"} onClick={() => makeActive(tabID) }>
    { children }
  </button>
);
