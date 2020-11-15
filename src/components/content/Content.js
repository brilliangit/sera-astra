import React from 'react';

const Content = ({ children, frame }) => (
    <div style={{ padding: frame, height:'100%' }}>
        {children}
    </div>
) 

export default Content;

