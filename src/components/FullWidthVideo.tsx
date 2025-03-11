'use client';

const FullWidthVideo = () => (
  <section style={{
    height: '103vh',
    margin: '2vh auto 0 auto',
    overflow: 'hidden',
    borderTop: '9vh solid white',
    borderBottom: '2vh solid white',
    borderLeft: '2vw solid white',
    borderRight: '2vw solid white',
    maxWidth: '100vw',
    position: 'relative',
  }}
  >
    <video
      autoPlay
      loop
      muted
      playsInline
      style={{
        width: '100%',
        height: '100%',
        objectFit: 'cover',
        position: 'absolute',
      }}
    >
      <source src="/videoplayback.mp4" type="video/mp4" />
    </video>
  </section>
);

export default FullWidthVideo;
