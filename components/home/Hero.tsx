"use client";

import Image from "next/image";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";

const HERO_SLIDES = [
  { src: "/images/work/mobility-show.webp", alt: "서울 모빌리티 쇼 전시 현장" },
  { src: "/images/work/santafe-media.webp", alt: "디 올 뉴 싼타페 미디어 행사" },
  { src: "/images/work/ev6-ground.webp", alt: "기아 EV6 언플러그드 그라운드" },
];

export default function Hero() {
  return (
    <main
      id="top"
      aria-label="나온우리 소개"
      className="relative isolate [--hero-h:calc(100svh-76px)] min-h-(--hero-h) overflow-hidden bg-[#181513] text-white md:[--hero-h:calc(100svh-94px)]"
    >
      <Slider
        dots={false}
        arrows={false}
        infinite
        autoplay
        autoplaySpeed={6000}
        speed={1000}
        fade
        cssEase="ease-in-out"
        pauseOnHover={false}
        slidesToShow={1}
        slidesToScroll={1}
        className="absolute inset-0 z-[-3] h-(--hero-h) [&_.slick-list]:h-full [&_.slick-slide>div]:h-full [&_.slick-slide]:h-full [&_.slick-track]:h-full"
      >
        {HERO_SLIDES.map((slide) => (
          <div key={slide.src} className="relative h-full w-full">
            <Image
              src={slide.src}
              alt={slide.alt}
              fill
              priority
              sizes="100vw"
              className="object-cover"
            />
          </div>
        ))}
      </Slider>
      <div className="absolute inset-0 z-0 flex flex-col justify-between px-5.5 pb-9 pt-13.5 md:px-(--side) md:pb-9 md:pt-[clamp(42px,7vh,86px)]">
        <p className="m-0 text-xs font-bold uppercase tracking-[0.19em]">
          Experience-led Creative Agency · Seoul
        </p>
        <h1 className="m-0 max-w-295 text-[clamp(48px,17vw,76px)] font-bold leading-[0.88] tracking-[-0.065em] text-balance md:text-[clamp(54px,8.5vw,138px)]">
          IDEAS INTO
          <br />
          <span className="text-white">EXPERIENCE</span>
        </h1>
        <div className="flex flex-col gap-6 border-t border-white/45 pt-6 md:flex-row md:items-end md:justify-between md:gap-7.5 md:pt-15">
          <p className="m-0 max-w-140 text-[clamp(17px,1.6vw,24px)] leading-[1.55]">
            아이디어를 경험으로.
            <br />
            경험을 더 오래, 더 멀리.
          </p>
          <span className="hidden whitespace-nowrap text-[11px] tracking-[0.16em] md:inline">
            SCROLL TO EXPLORE ↓
          </span>
        </div>
      </div>
      <div className="absolute inset-0 z-[-2] bg-[linear-gradient(90deg,rgba(24,21,19,.83)_0%,rgba(24,21,19,.42)_58%,rgba(24,21,19,.2)_100%)]" />
      <div className="absolute inset-0 z-[-1] bg-[linear-gradient(0deg,rgba(24,21,19,.55),transparent_45%)]" />
    </main>
  );
}
