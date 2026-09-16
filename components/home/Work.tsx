import Image from "next/image";
import Reveal from "./Reveal";

const PROJECTS = [
  {
    no: "01",
    src: "/images/work/mobility-show.webp",
    alt: "현대자동차 모빌리티 전시 현장",
    title: "Seoul Mobility Show",
    client: "Hyundai Motor Company",
    service: "Exhibition · Experience · Operation",
    year: "2023",
  },
  {
    no: "02",
    src: "/images/work/h2meet.webp",
    alt: "H2MEET 현대자동차 전시 현장",
    title: "H2MEET",
    client: "Hyundai Motor Company",
    service: "Exhibition · Docent · Media",
    year: "2022",
  },
  {
    no: "03",
    src: "/images/work/ev6-ground.webp",
    alt: "기아 EV6 언플러그드 그라운드",
    title: "EV6 Unplugged Ground",
    client: "Kia",
    service: "Brand Space · Experience · Operation",
    year: "2021",
  },
  {
    no: "04",
    src: "/images/work/santafe-media.webp",
    alt: "디 올 뉴 싼타페 미디어 행사",
    title: "The All-new SANTA FE",
    client: "Hyundai Motor Company",
    service: "Media Day · Content · Production",
    year: "2023",
  },
  {
    no: "05",
    src: "/images/work/k9-showcase.webp",
    alt: "기아 K9 미디어 쇼케이스",
    title: "THE K9 Showcase",
    client: "Kia",
    service: "Showcase · Media · Production",
    year: "2018",
  },
];

export default function Work() {
  return (
    <section
      id="work"
      className="bg-white px-5.5 py-22.5 md:px-(--side) md:py-[clamp(90px,12vw,180px)]"
    >
      <Reveal className="mb-12 grid grid-cols-1 gap-5 md:mb-[clamp(48px,7vw,92px)] md:grid-cols-[minmax(140px,0.55fr)_1.8fr] md:gap-9.5">
        <p className="m-0 text-xs font-bold uppercase tracking-[0.14em]">
          01 · Selected Work
        </p>
        <div>
          <h2 className="m-0 max-w-260 text-[clamp(42px,6.1vw,96px)] font-[650] uppercase leading-[0.98] tracking-[-0.055em]">
            EXPERIENCES,
            <br />
            MADE REAL.
          </h2>
          <p className="m-0 mt-4.5 max-w-140 text-lg leading-[1.7] text-brand-sub-dark">
            사람이 직접 만난 브랜드의 순간들.
          </p>
        </div>
      </Reveal>

      <div className="grid grid-cols-1 gap-y-14.5 md:grid-cols-12 md:gap-x-[clamp(18px,2.7vw,42px)] md:gap-y-[clamp(60px,8vw,124px)]">
        {PROJECTS.map((project) => (
          <Reveal key={project.no} className="md:col-span-6">
            <article className="group">
              <div className="relative aspect-4/3 overflow-hidden bg-brand-sub-light">
                <Image
                  src={project.src}
                  alt={project.alt}
                  fill
                  sizes="(min-width: 768px) 50vw, 100vw"
                  className="object-cover transition-[scale,filter] duration-750 ease-[cubic-bezier(0.2,0.6,0.2,1)] group-hover:scale-[1.035] group-hover:saturate-[0.78]"
                />
                <span className="absolute left-4 top-4 grid h-8.5 w-8.5 place-items-center rounded-full bg-[rgba(33,29,26,.78)] text-[11px] text-white">
                  {project.no}
                </span>
              </div>
              <div className="flex items-start justify-between gap-6 border-t border-ink pt-4.25">
                <div>
                  <h3 className="m-0 text-[clamp(18px,2vw,28px)] font-semibold tracking-tight">
                    {project.title}
                  </h3>
                  <p className="m-0 mt-1.25 text-[13px] leading-normal text-brand-sub-dark">
                    {project.client}
                    <br />
                    {project.service}
                  </p>
                </div>
                <span className="mt-1 whitespace-nowrap text-xs tracking-[0.08em]">
                  {project.year}
                </span>
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
