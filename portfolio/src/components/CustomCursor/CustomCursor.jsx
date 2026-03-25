import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import './CustomCursor.css';

const CustomCursor = () => {
    const cursorRef = useRef(null);
    const followerRef = useRef(null);
    const spotlightRef = useRef(null);

    useEffect(() => {
        const cursor = cursorRef.current;
        const follower = followerRef.current;
        const spotlight = spotlightRef.current;
        
        // Initialize cursors cleanly to center point
        gsap.set(cursor, { xPercent: -50, yPercent: -50 });
        gsap.set(follower, { xPercent: -50, yPercent: -50 });

        // Hide default cursor on body
        document.body.classList.add('hide-default-cursor');

        const onMouseMove = (e) => {
            const { clientX: x, clientY: y } = e;

            // 1. Move crisp dot immediately
            gsap.to(cursor, {
                x: x,
                y: y,
                duration: 0.1,
                ease: 'power2.out'
            });

            // 2. Move follower with smooth lag
            gsap.to(follower, {
                x: x,
                y: y,
                duration: 0.3,
                ease: 'power2.out'
            });

            // 3. Update Spotlight CSS variables
            if (spotlight) {
                gsap.to(spotlight, {
                    '--mouse-x': `${x}px`,
                    '--mouse-y': `${y}px`,
                    duration: 0
                });
            }

            // 4. Magnetic Buttons Logic
            const target = e.target;
            const magnetic = target.closest('button, .btn, .magnetic');
            if (magnetic) {
                const rect = magnetic.getBoundingClientRect();
                const magnetX = x - rect.left - rect.width / 2;
                const magnetY = y - rect.top - rect.height / 2;
                
                // Only move slightly (power of 0.3)
                gsap.to(magnetic, {
                    x: magnetX * 0.3,
                    y: magnetY * 0.3,
                    duration: 0.3,
                    ease: 'power2.out'
                });
            }
        };

        const onMouseOver = (e) => {
            const target = e.target;
            const interactive = target.closest('a, button, .btn, .skill-tag, input, textarea');
            
            if (interactive) {
                cursor.classList.add('cursor-hover');
                follower.classList.add('follower-hover');
                
                // 5. Skill specific reactions
                if (interactive.closest('.skill-tag')) {
                    const tag = interactive.closest('.skill-tag');
                    const text = tag.textContent.toLowerCase();
                    follower.className = 'cursor-follower follower-hover'; // Reset colors
                    
                    if (text.includes('react') || text.includes('tailwind')) follower.classList.add('color-blue');
                    else if (text.includes('node') || text.includes('mongo') || text.includes('vue')) follower.classList.add('color-green');
                    else if (text.includes('javascript') || text.includes('python')) follower.classList.add('color-yellow');
                    else if (text.includes('gsap') || text.includes('redux')) follower.classList.add('color-purple');
                    else follower.classList.add('color-accent');
                }
            }
        };

        const onMouseOut = (e) => {
            const target = e.target;
            const interactive = target.closest('a, button, .btn, .skill-tag, input, textarea');
            if (interactive && !interactive.contains(e.relatedTarget)) {
                cursor.classList.remove('cursor-hover');
                follower.className = 'cursor-follower'; // Reset everything
            }

            // Revert magnetic
            const magnetic = target.closest('button, .btn, .magnetic');
            if (magnetic && !magnetic.contains(e.relatedTarget)) {
                 gsap.to(magnetic, { x: 0, y: 0, duration: 0.5, ease: 'elastic.out(1, 0.3)' });
            }
        };

        window.addEventListener('mousemove', onMouseMove);
        document.body.addEventListener('mouseover', onMouseOver);
        document.body.addEventListener('mouseout', onMouseOut);

        return () => {
            window.removeEventListener('mousemove', onMouseMove);
            document.body.removeEventListener('mouseover', onMouseOver);
            document.body.removeEventListener('mouseout', onMouseOut);
            document.body.classList.remove('hide-default-cursor');
        };
    }, []);

    return (
        <>
            <div className="cursor-spotlight" ref={spotlightRef}></div>
            <div className="cursor-follower" ref={followerRef}></div>
            <div className="cursor-dot" ref={cursorRef}></div>
        </>
    );
};

export default CustomCursor;
