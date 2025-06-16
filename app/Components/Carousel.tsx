'use client';
import React, { useEffect, useState } from 'react';
import 'keen-slider/keen-slider.min.css';
import { useKeenSlider } from 'keen-slider/react';
import Image from 'next/image';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const images = [
  { src: '/assets/1.jpg', alt: 'First image' },
  { src: '/assets/2.jpg', alt: 'Second image' },
  { src: '/assets/3.jpg', alt: 'Third image' },
  { src: '/assets/4.jpg', alt: 'Fourth image' },
  { src: '/assets/5.jpg', alt: 'Fifth image' },
];

export default function ImageSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>({
    loop: true,
    slides: { perView: 1 },
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel);
    },
  });

  // Auto-slide every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      instanceRef.current?.next();
    }, 5000);
    return () => clearInterval(interval);
  }, [instanceRef]);

  return (
    <div className="relative w-full h-screen overflow-hidden">
      
      
      <div ref={sliderRef} className="keen-slider w-full h-full">
        {images.map((image, i) => (
          <div
            key={i}
            className="keen-slider__slide relative w-full h-full"
            aria-hidden={false}
          >
            <Image
              src={image.src}
              alt={image.alt || `Slide ${i + 1}`}
              fill
              className="object-cover"
              priority={i === 0}
              sizes="100vw"
            />
          </div>
        ))}
        <p>hia</p>
      </div>
      

      {/* Prev Button */}
      <button
        type="button"
        onClick={() => instanceRef.current?.prev()}
        className="absolute left-5 top-1/2 -translate-y-1/2 bg-white/25 hover:bg-white/50 duration-150 rounded-full p-3 shadow-lg z-20 flex items-center justify-center"
        aria-label="Previous Slide"
      >
        <FaChevronLeft className="w-6 h-6 text-black" />
      </button>

      {/* Next Button */}
      <button
        type="button"
        onClick={() => instanceRef.current?.next()}
        className="absolute right-5 top-1/2 -translate-y-1/2 bg-white/25 hover:bg-white/50 duration-150 rounded-full p-3 shadow-lg z-20 flex items-center justify-center"
        aria-label="Next Slide"
      >
        <FaChevronRight className="w-6 h-6 text-black" />
      </button>

      {/* Dots */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex space-x-3 z-20">
        {images.map((_, idx) => (
          <button
            key={idx}
            type="button"
            className={`h-3 w-3 rounded-full transition-colors ${
              currentSlide === idx ? 'bg-white' : 'bg-white/50'
            }`}
            onClick={() => instanceRef.current?.moveToIdx(idx)}
            aria-label={`Go to slide ${idx + 1}`}
            aria-current={currentSlide === idx ? 'true' : 'false'}
          />
        ))}
      </div>
    </div>
  );
}




