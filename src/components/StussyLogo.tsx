'use client';

import Image from 'next/image';

const StussyLogo = () => (
  <button type="button" className="navbar-brand" style={{ marginLeft: '-73px', background: 'none', border: 'none' }}>
    <Image
      src="/Stussy-Logo-500x281.png"
      alt="Stussy Logo"
      width={90}
      height={50}
      priority
    />
  </button>
);

export default StussyLogo;
