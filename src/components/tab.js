import React from 'react';

export default ({ children, active, tabID, makeActive }) => (
  <button className={active ? 'catalyst--tab active' : 'catalyst--tab'} onClick={() => makeActive(tabID) }>
    { children }
  </button>
);
