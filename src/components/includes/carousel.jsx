import React from 'react';

import { Menu,Layout, Breadcrumb, Carousel } from 'antd';
const { Content, Footer, Header }  = Layout;

function carousel(){
    const contentStyle = {
        minHeight: '160px',
        maxHeight: '300px',
        color: '#fff',
        lineHeight: '160px',
        textAlign: 'center',
        background: '#364d79',
      };
return (
    <>
    <Carousel autoplay>
        <div>
            <h3 style={contentStyle}>1</h3>
            </div>
            <div>
            <h3 style={contentStyle}>2</h3>
            </div>
            <div>
            <h3 style={contentStyle}>3</h3>
            </div>
            <div>
            <h3 style={contentStyle}>4</h3>
        </div>
    </Carousel>
    </>
    );
};

export default carousel;