import Image from "next/image";
import Reveal from "./Reveal";

const VALUES = [
  {
    no: "01",
    src: "/images/work/mobility-show.webp",
    alt: "공간과 미디어가 하나로 연결된 전시 경험",
    titleLine1: "ONE DIRECTION,",
    titleLine2: "EVERY FORM",
    descLines: [
      "전시장의 조명이든 화면 속 인터랙션이든,",
      "접점의 형태는 달라도 방향은 하나입니다",
    ],
    objectPosition: undefined as string | undefined,
  },
  {
    no: "02",
    src: "/images/work/ev6-ground.webp",
    alt: "사람들이 머물고 교감하는 브랜드 공간",
    titleLine1: "FEEL IT",
    titleLine2: "FIRST",
    descLines: [
      "기술과 채널이 아니라, 사람이 그 순간 무엇을 느꼈는지가 우리가 경험을 설계하는 유일한 기준입니다",
    ],
    objectPosition: "62% center",
  },
  {
    no: "03",
    src: "/images/work/k9-showcase.webp",
    alt: "조명부터 무대까지 세심하게 설계한 브랜드 쇼케이스",
    titleLine1: "SMALL THINGS,",
    titleLine2: "NEVER MISSED",
    descLines: [
      "밤낮없이 고민하는 열정과 작은 것 하나도 놓치지 않는 세심함, 2004년부터 이어온 나온우리의 방식입니다",
    ],
    objectPosition: undefined as string | undefined,
  },
];

export default function Values() {
  return (
    <section
      id="values"
      aria-labelledby="values-title"
      className="bg-brand-sub-light px-5.5 pb-12 pt-11 text-brand md:px-(--side) md:pb-17 md:pt-14.5"
    >
      <Reveal className="mb-9 flex flex-col items-start gap-6 lg:flex-row lg:items-baseline lg:justify-between">
        <h2
          id="values-title"
          className="m-0 text-[clamp(34px,3vw,46px)] font-normal uppercase tracking-[-0.045em]"
        >
          WE <strong className="font-bold">VALUES</strong>
        </h2>
        <p className="m-0 max-w-45 text-right text-sm leading-snug text-brand-sub-dark lg:max-w-none lg:text-left lg:leading-normal">
          나온우리가 경험을 만드는 기준
        </p>
      </Reveal>

      <div className="grid grid-cols-1 gap-10.5 md:grid-cols-3 md:gap-[clamp(20px,3vw,46px)]">
        {VALUES.map((value) => (
          <Reveal key={value.no}>
            <article className="group">
              <figure className="relative m-0 mb-5.5 aspect-video overflow-hidden bg-brand md:aspect-auto md:h-[clamp(170px,17vw,254px)]">
                <Image
                  src={value.src}
                  alt={value.alt}
                  fill
                  sizes="(min-width: 768px) 33vw, 100vw"
                  style={
                    value.objectPosition
                      ? { objectPosition: value.objectPosition }
                      : undefined
                  }
                  className="object-cover saturate-[.35] transition-[scale,filter] duration-650 ease-out group-hover:scale-[1.04] group-hover:saturate-[.8]"
                />
                <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(0deg,rgba(33,29,26,.45),transparent_60%)]" />
                <span className="absolute bottom-3.75 left-4.5 z-1 text-[42px] leading-none tracking-[-0.06em] text-white">
                  {value.no}
                </span>
              </figure>
              <h3 className="m-0 mb-4.5 text-[32px] font-semibold leading-[1.04] tracking-[-0.045em] md:text-[clamp(24px,2.4vw,38px)]">
                {value.titleLine1}
                <br />
                <span className="text-brand-sub-dark">{value.titleLine2}</span>
              </h3>
              <p className="m-0 border-t border-(--line) pt-4.25 text-base leading-[1.7] break-keep">
                {value.descLines.map((line, i) => (
                  <span key={line}>
                    {i > 0 && <br />}
                    {line}
                  </span>
                ))}
              </p>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
