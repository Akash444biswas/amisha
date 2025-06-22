"use client";

import { useEffect, useState, useMemo } from 'react';
import Lottie from 'lottie-react';

interface LottieAnimationProps {
  src?: string;
  className?: string;
  loop?: boolean;
  autoplay?: boolean;
  fallbackIcon?: string;
}

export default function LottieAnimation({
  src,
  className = "",
  loop = true,
  autoplay = true,
  fallbackIcon = "🛒"
}: LottieAnimationProps) {
  const [animationData, setAnimationData] = useState<object | null>(null);
  const [loading, setLoading] = useState(true);

  // Predefined shopping cart animation from LottieFiles
  const shoppingCartAnimation = useMemo(() => ({
    "v": "5.7.4",
    "fr": 30,
    "ip": 0,
    "op": 60,
    "w": 200,
    "h": 200,
    "nm": "Shopping Cart",
    "ddd": 0,
    "assets": [],
    "layers": [
      {
        "ddd": 0,
        "ind": 1,
        "ty": 4,
        "nm": "Cart",
        "sr": 1,
        "ks": {
          "o": {"a": 0, "k": 100},
          "r": {"a": 1, "k": [
            {"i": {"x": [0.833], "y": [0.833]}, "o": {"x": [0.167], "y": [0.167]}, "t": 0, "s": [0]},
            {"t": 30, "s": [360]}
          ]},
          "p": {"a": 0, "k": [100, 100, 0]},
          "a": {"a": 0, "k": [0, 0, 0]},
          "s": {"a": 1, "k": [
            {"i": {"x": [0.833, 0.833, 0.833], "y": [0.833, 0.833, 0.833]}, "o": {"x": [0.167, 0.167, 0.167], "y": [0.167, 0.167, 0.167]}, "t": 0, "s": [100, 100, 100]},
            {"i": {"x": [0.833, 0.833, 0.833], "y": [0.833, 0.833, 0.833]}, "o": {"x": [0.167, 0.167, 0.167], "y": [0.167, 0.167, 0.167]}, "t": 15, "s": [120, 120, 100]},
            {"t": 30, "s": [100, 100, 100]}
          ]}
        },
        "ao": 0,
        "shapes": [
          {
            "ty": "gr",
            "it": [
              {
                "ty": "rc",
                "d": 1,
                "s": {"a": 0, "k": [60, 40]},
                "p": {"a": 0, "k": [0, 0]},
                "r": {"a": 0, "k": 5}
              },
              {
                "ty": "st",
                "c": {"a": 0, "k": [1, 1, 1, 1]},
                "o": {"a": 0, "k": 100},
                "w": {"a": 0, "k": 3}
              },
              {
                "ty": "tr",
                "p": {"a": 0, "k": [0, -10]},
                "a": {"a": 0, "k": [0, 0]},
                "s": {"a": 0, "k": [100, 100]},
                "r": {"a": 0, "k": 0},
                "o": {"a": 0, "k": 100}
              }
            ]
          }
        ],
        "ip": 0,
        "op": 60,
        "st": 0,
        "bm": 0
      }
    ]
  }), []);

  useEffect(() => {
    const loadAnimation = async () => {
      if (!src) {
        // Use predefined animation if no src provided
        setAnimationData(shoppingCartAnimation);
        setLoading(false);
        return;
      }

      try {
        // Try to load from LottieFiles if it's a URL
        if (src.startsWith('http')) {
          const response = await fetch(src);
          if (!response.ok) {
            throw new Error('Failed to load animation from URL');
          }
          const data = await response.json();
          setAnimationData(data);
          setLoading(false);
          return;
        }

        // Try to load local file
        const response = await fetch(src);
        if (!response.ok) {
          throw new Error('Failed to load local animation');
        }

        const text = await response.text();

        // Check if it's valid JSON
        try {
          const data = JSON.parse(text);
          setAnimationData(data);
          setLoading(false);
        } catch (parseError) {
          console.error('Invalid JSON in Lottie file:', parseError);
          throw new Error('Invalid Lottie file format');
        }
      } catch (err) {
        console.error('Error loading Lottie animation:', err);
        // Fallback to predefined animation
        setAnimationData(shoppingCartAnimation);
        setLoading(false);
      }
    };

    loadAnimation();
  }, [src, shoppingCartAnimation]);

  if (loading) {
    return (
      <div className={`flex items-center justify-center ${className}`}>
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
      </div>
    );
  }

  if (!animationData) {
    return (
      <div className={`flex items-center justify-center ${className}`}>
        <span className="text-6xl opacity-50 group-hover:scale-110 transition-transform duration-300">
          {fallbackIcon}
        </span>
      </div>
    );
  }

  return (
    <Lottie
      animationData={animationData}
      loop={loop}
      autoplay={autoplay}
      className={className}
    />
  );
}
