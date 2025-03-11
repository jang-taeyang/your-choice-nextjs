'use client';

import StussyLogo from './StussyLogo';

const TopMenu = () => (
  <nav
    className="navbar navbar-expand-lg"
    style={{
      position: 'absolute',
      top: 0,
      width: '100%',
      padding: '10px 20px',
      backgroundColor: 'rgba(255, 255, 255, 0.8)',
      zIndex: 10,
    }}
  >
    <div className="container d-flex justify-content-between align-items-center">
      <StussyLogo />
      <div className="d-flex gap-4" style={{ marginRight: '-55px' }}>
        <button
          type="button"
          aria-label="Search"
          style={{ fontSize: '1.5rem', color: 'black', background: 'none', border: 'none' }}
        >
          <i className="fas fa-search" />
        </button>
        <button
          type="button"
          aria-label="Shopping Bag"
          style={{ fontSize: '1.5rem', color: 'black', background: 'none', border: 'none' }}
        >
          <i className="fas fa-shopping-bag" />
        </button>
        <button
          type="button"
          aria-label="Menu"
          style={{ fontSize: '1.5rem', color: 'black', background: 'none', border: 'none' }}
        >
          <i className="fas fa-bars" />
        </button>
      </div>
    </div>
  </nav>
);

export default TopMenu;
