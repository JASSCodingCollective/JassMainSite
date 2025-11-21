function AnimatedBackground() {
  try {
    const vantaRef = React.useRef(null);
    const vantaEffect = React.useRef(null);

    React.useEffect(() => {
      if (!vantaEffect.current && vantaRef.current) {
        vantaEffect.current = window.VANTA.NET({
          el: vantaRef.current,
          mouseControls: true,
          touchControls: true,
          gyroControls: false,
          minHeight: 200.00,
          minWidth: 200.00,
          scale: 1.00,
          scaleMobile: 1.00,
          color: 0x06b6d4,
          backgroundColor: 0x0f172a,
          spacing: 12.00,
          showDots: false,
          points: 10.00,
          maxDistance: 20.00
        });
      }

      return () => {
        if (vantaEffect.current) {
          vantaEffect.current.destroy();
          vantaEffect.current = null;
        }
      };
    }, []);

    return (
      <div
        ref={vantaRef}
        className="fixed inset-0 z-0"
        data-name="animated-background"
        data-file="components/AnimatedBackground.js"
      />
    );
  } catch (error) {
    console.error('AnimatedBackground component error:', error);
    return null;
  }
}