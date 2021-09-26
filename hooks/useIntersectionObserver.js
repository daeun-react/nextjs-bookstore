import React, { useEffect } from "react";

export default function useIntersectionObserver({
  target,
  onIntersect,
  disabled = false,
}) {
  useEffect(() => {
    if (disabled) {
      return;
    }

    const el = target && target.current;
    if (!el) {
      return;
    }

    const observer = new IntersectionObserver(
      ([{ isIntersecting }]) => isIntersecting && onIntersect(),
      { threshold: 1.0 }
    );

    observer.observe(el);
    return () => {
      observer.unobserve(el);
    };
  }, [target, onIntersect, disabled]);
}
