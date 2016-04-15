import React from 'react';

export default ({ children, active, tabID, makeActive }) => (
  <button className="tab" onClick={() => makeActive(tabID) }>
    { active ? "ALIVE!!" : "not alive." }
  </button>
);
