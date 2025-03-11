'use client';

import React, { useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css';
import TopMenu from '@/components/TopMenu';
import FullWidthVideo from '@/components/FullWidthVideo';
import FooterMenu from '@/components/FooterMenu';

const StussyClone = () => {
  useEffect(() => {
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css';
    link.crossOrigin = 'anonymous';
    document.head.appendChild(link);
  }, []);

  return (
    <main>
      <TopMenu />
      {/* Divider */}
      <div
        style={{
          width: '100%',
          height: '0.5px',
          backgroundColor: '#ccc',
          position: 'absolute',
          top: '75px',
          left: 0,
          zIndex: 15,
        }}
      />
      <FullWidthVideo />
      <FooterMenu />
    </main>
  );
};

export default StussyClone;
