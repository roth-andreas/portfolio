import React, { useRef, useEffect } from 'react';

const InteractiveGrid = () => {
    const canvasRef = useRef(null);
    const mouseRef = useRef({ x: -1000, y: -1000 });

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');
        let animationFrameId;

        let points = [];
        const spacing = 35;
        const repulsionRadius = 150;
        const repulsionStrength = 0.5;
        const mouseRepulsionStrength = 1.5;
        const springStrength = 0.05;
        const friction = 0.85;

        const resize = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
            initPoints();
        };

        const initPoints = () => {
            points = [];
            const cols = Math.ceil(canvas.width / spacing) + 1;
            const rows = Math.ceil(canvas.height / spacing) + 1;

            for (let i = 0; i < cols; i++) {
                for (let j = 0; j < rows; j++) {
                    const x = i * spacing;
                    const y = j * spacing;
                    points.push({
                        x: x,
                        y: y,
                        baseX: x,
                        baseY: y,
                        vx: 0,
                        vy: 0,
                    });
                }
            }
        };

        const handleMouseMove = (e) => {
            mouseRef.current = { x: e.clientX, y: e.clientY };
        };

        const handleMouseLeave = () => {
            mouseRef.current = { x: -1000, y: -1000 };
        };

        const animate = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            const mouse = mouseRef.current;

            points.forEach(p => {
                // Distance to mouse
                const dx = p.x - mouse.x;
                const dy = p.y - mouse.y;
                const distance = Math.sqrt(dx * dx + dy * dy);

                if (distance < repulsionRadius) {
                    const force = (repulsionRadius - distance) / repulsionRadius;
                    const angle = Math.atan2(dy, dx);

                    p.vx += Math.cos(angle) * force * mouseRepulsionStrength;
                    p.vy += Math.sin(angle) * force * mouseRepulsionStrength;
                }

                // Spring back to base
                const dxBase = p.baseX - p.x;
                const dyBase = p.baseY - p.y;

                p.vx += dxBase * springStrength;
                p.vy += dyBase * springStrength;

                // Apply friction
                p.vx *= friction;
                p.vy *= friction;

                // Update position
                p.x += p.vx;
                p.y += p.vy;

                // Draw point
                ctx.fillStyle = 'rgba(99, 102, 241, 0.4)'; // --accent-primary with opacity
                ctx.beginPath();
                ctx.arc(p.x, p.y, 1.5, 0, Math.PI * 2);
                ctx.fill();

                // Optional: draw subtle lines for a grid feel
                // (Removing for performance if needed, but let's try just dots first)
            });

            animationFrameId = requestAnimationFrame(animate);
        };

        window.addEventListener('resize', resize);
        window.addEventListener('mousemove', handleMouseMove);
        window.addEventListener('mouseleave', handleMouseLeave);

        resize();
        animate();

        return () => {
            window.removeEventListener('resize', resize);
            window.removeEventListener('mousemove', handleMouseMove);
            window.removeEventListener('mouseleave', handleMouseLeave);
            cancelAnimationFrame(animationFrameId);
        };
    }, []);

    return (
        <canvas
            ref={canvasRef}
            style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                pointerEvents: 'none',
                zIndex: 0,
            }}
        />
    );
};

export default InteractiveGrid;
