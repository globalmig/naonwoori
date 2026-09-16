import Reveal from "./Reveal";

export default function About() {
  return (
    <section
      id="about"
      className="bg-white px-5.5 py-22.5 md:px-(--side) md:py-[clamp(90px,12vw,180px)]"
    >
      <Reveal className="grid grid-cols-1 items-end gap-13.5 md:grid-cols-[1.35fr_0.65fr] md:gap-[clamp(54px,8vw,140px)]">
        <h2 className="m-0 text-[clamp(42px,11.2vw,72px)] font-[680] uppercase leading-[0.94] tracking-[-0.065em] md:text-[clamp(48px,6.5vw,104px)]">
          <span className="block">HUMAN TOUCH</span>
          <strong className="block font-[680] text-brand-sub-dark">POINT</strong>
        </h2>
        <div className="pb-[0.35em]">
          <p className="m-0 mb-7 text-base font-bold uppercase tracking-[0.14em]">
            About Naonwoori
          </p>
          <p className="m-0 max-w-150 text-[clamp(18px,1.7vw,24px)] leading-[1.7] break-keep">
            공간이든 화면이든, 우리가 설계하는 것은
            <br />
            언제나 사람과 브랜드가 만나는 접점입니다
          </p>
        </div>
      </Reveal>
    </section>
  );
}
