import React from 'react';

export default ({ activeID, children, makeActive }) => (
  <div>
    {children.map((tab) => React.cloneElement(tab, {active: tab.props.tabID === activeID, makeActive: makeActive} ))}
  </div>
)
