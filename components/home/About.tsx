import Reveal from "./Reveal";

const CORE_VALUES = [
  {
    no: "01",
    src: "/images/",
    keyword: "동화(同化)",
    title: "ONE DIRECTION, EVERY FORM",
    contents: "전시장의 조명이든 화면 속 인터랙션이든, 접점의 형태는 달라도 방향은 하나입니다."
  },
  {
    no: "02",
    src: "/images/",
    keyword: "같은 마음가짐",
    title: "FEEL IT FIRST",
    contents: "기술과 채널이 아니라, 사람이 그 순간 무엇을 느꼈는지가 우리가 경험을 설계하는 유일한 기준입니다."
  },
  {
    no: "03",
    src: "/images/",
    keyword: "세심함",
    title: "SMALL THINGS, NEVER MISSED",
    contents: "밤낮없이 고민하는 열정과 작은 것 하나도 놓치지 않는 세심함, 이것은 19년간 변하지 않은 나온우리의 방식입니다."
  },
]

export default function About() {
  return (
    <section
      id="about"
      className="bg-white px-5.5 py-22.5 md:px-(--side) md:py-[clamp(90px,12vw,180px)]"
    >
      <Reveal className="grid grid-cols-1 items-end gap-12.5 md:grid-cols-2 md:gap-[clamp(50px,8vw,130px)]">
        <p className="m-0 text-[36vw] font-bold leading-[0.72] tracking-[-0.085em] text-brand-sub-dark md:text-[clamp(88px,17vw,260px)]">
          2004
        </p>
        <div>
          <p className="m-0 text-xs font-bold uppercase tracking-[0.14em]">
            03 · About Naonwoori
          </p>
          <h2 className="m-0 mb-8.5 mt-2.25 text-[clamp(34px,4.5vw,70px)] font-semibold leading-[1.07] tracking-tighter">
            HUMAN TOUCH
            <br />
            POINT
          </h2>
          <p className="m-0 max-w-157.5 text-[clamp(17px,1.6vw,22px)] leading-[1.75]">
            공간이든 화면이든, 우리가 설계하는 것은
          </p>
          <p className="m-0 mt-5 max-w-157.5 text-[clamp(17px,1.6vw,22px)] leading-[1.75]">
            언제나 사람과 브랜드가 만나는 접점입니다.
          </p>
        </div>
      </Reveal>

      <Reveal className="mt-20 md:mt-28">
        <p className="m-0 mb-8.5 text-xs font-bold uppercase tracking-[0.14em]">
          Core Values.
        </p>
        <div className="flex flex-col gap-6 md:flex-row">
          {CORE_VALUES.map((value) => (
            <div
              key={value.no}
              className="group relative aspect-3/4 flex-1 overflow-hidden bg-gray-300"
            >
              <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 bg-ink/75 p-8 text-center text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <span className="text-xs tracking-[0.2em]">{value.no}</span>
                <p className="text-sm font-semibold tracking-wide">
                  {value.keyword}
                </p>
                <h3 className="text-xl font-bold tracking-tight md:text-2xl">
                  {value.title}
                </h3>
                <p className="text-sm leading-relaxed">{value.contents}</p>
              </div>
            </div>
          ))}
        </div>
      </Reveal>
    </section>
  );
}
