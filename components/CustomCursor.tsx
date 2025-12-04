'use client';

import { useEffect } from 'react';

export default function CustomCursor() {
    useEffect(() => {
        const cursor = document.createElement('div');
        cursor.id = 'cursor';
        document.body.appendChild(cursor);

        const cursorDot = document.createElement('div');
        cursorDot.id = 'cursor-dot';
        document.body.appendChild(cursorDot);

        let mouseX = 0;
        let mouseY = 0;
        let cursorX = 0;
        let cursorY = 0;
        let dotX = 0;
        let dotY = 0;

        const handleMouseMove = (e: MouseEvent) => {
            mouseX = e.clientX;
            mouseY = e.clientY;
        };

        const handleMouseEnter = (e: MouseEvent) => {
            const target = e.target as HTMLElement;
            if (target.tagName === 'A' || target.tagName === 'BUTTON' || target.closest('a') || target.closest('button')) {
                cursor.style.transform = 'scale(1.5)';
                cursorDot.style.transform = 'scale(1.5)';
            }
        };

        const handleMouseLeave = () => {
            cursor.style.transform = 'scale(1)';
            cursorDot.style.transform = 'scale(1)';
        };

        document.addEventListener('mousemove', handleMouseMove);
        document.addEventListener('mouseover', handleMouseEnter);
        document.addEventListener('mouseout', handleMouseLeave);

        const animateCursor = () => {
            // Smooth follow effect
            cursorX += (mouseX - cursorX) * 0.15;
            cursorY += (mouseY - cursorY) * 0.15;
            dotX += (mouseX - dotX) * 0.25;
            dotY += (mouseY - dotY) * 0.25;

            cursor.style.left = `${cursorX - 10}px`;
            cursor.style.top = `${cursorY - 10}px`;
            cursorDot.style.left = `${dotX - 3}px`;
            cursorDot.style.top = `${dotY - 3}px`;

            requestAnimationFrame(animateCursor);
        };

        animateCursor();

        return () => {
            document.removeEventListener('mousemove', handleMouseMove);
            document.removeEventListener('mouseover', handleMouseEnter);
            document.removeEventListener('mouseout', handleMouseLeave);
            cursor.remove();
            cursorDot.remove();
        };
    }, []);

    return null;
}
