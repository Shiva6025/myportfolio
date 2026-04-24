'use client';

import { useEffect } from 'react';

export default function CustomCursor() {
    useEffect(() => {
        const canHover = window.matchMedia('(hover: hover) and (pointer: fine)').matches;
        if (!canHover) return;

        const cursor = document.createElement('div');
        cursor.id = 'cursor';
        document.body.appendChild(cursor);

        const cursorDot = document.createElement('div');
        cursorDot.id = 'cursor-dot';
        document.body.appendChild(cursorDot);

        let mouseX = window.innerWidth / 2;
        let mouseY = window.innerHeight / 2;
        let cursorX = mouseX;
        let cursorY = mouseY;
        let dotX = mouseX;
        let dotY = mouseY;
        let cursorScale = 1;
        let dotScale = 1;
        let animationFrame = 0;

        const handleMouseMove = (e: MouseEvent) => {
            mouseX = e.clientX;
            mouseY = e.clientY;
        };

        const handleMouseEnter = (e: MouseEvent) => {
            const target = e.target as HTMLElement;
            if (target.tagName === 'A' || target.tagName === 'BUTTON' || target.closest('a') || target.closest('button')) {
                cursorScale = 1.5;
                dotScale = 1.5;
            }
        };

        const handleMouseLeave = () => {
            cursorScale = 1;
            dotScale = 1;
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

            cursor.style.transform = `translate3d(${cursorX - 12}px, ${cursorY - 12}px, 0) scale(${cursorScale})`;
            cursorDot.style.transform = `translate3d(${dotX - 4}px, ${dotY - 4}px, 0) scale(${dotScale})`;

            animationFrame = requestAnimationFrame(animateCursor);
        };

        animateCursor();

        return () => {
            document.removeEventListener('mousemove', handleMouseMove);
            document.removeEventListener('mouseover', handleMouseEnter);
            document.removeEventListener('mouseout', handleMouseLeave);
            cancelAnimationFrame(animationFrame);
            cursor.remove();
            cursorDot.remove();
        };
    }, []);

    return null;
}
