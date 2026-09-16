import Reveal from "./Reveal";

const CAPABILITIES = [
  { no: "01", title: "Brand Strategy", desc: "브랜드 방향 · 캠페인 메시지" },
  { no: "02", title: "Creative", desc: "콘셉트 · 키비주얼 · 카피 · 디자인" },
  { no: "03", title: "Digital Marketing", desc: "디지털 캠페인 · 소셜 · 미디어" },
  { no: "04", title: "Content & Production", desc: "영상 · 사진 · 광고 콘텐츠" },
  { no: "05", title: "Experience & Activation", desc: "전시 · 팝업 · 프로모션 · 이벤트" },
  { no: "06", title: "Digital Experience", desc: "브랜드 웹 · 캠페인 페이지 · 온라인 참여" },
];

export default function Capabilities() {
  return (
    <section
      id="capabilities"
      className="bg-white px-5.5 py-22.5 text-ink md:px-(--side) md:py-[clamp(90px,12vw,180px)]"
    >
      <Reveal className="mb-10 grid grid-cols-1 gap-5 md:grid-cols-[minmax(140px,0.55fr)_1.8fr] md:gap-9.5">
        <p className="m-0 text-xs font-bold uppercase tracking-[0.14em]">
          02 · Capabilities
        </p>
        <h2 className="m-0 max-w-260 text-[clamp(42px,6.1vw,96px)] font-[650] uppercase leading-[0.98] tracking-[-0.055em]">
          EXPERIENCE,
          <br />
          EXTENDED.
        </h2>
      </Reveal>

      <ul className="list-none border-t border-(--line) p-0">
        {CAPABILITIES.map((item) => (
          <Reveal key={item.no}>
            <li className="grid grid-cols-[44px_1fr] items-center gap-5 border-b border-(--line) py-6 transition-[color,background-color,padding] duration-250 hover:bg-brand-sub-light hover:px-2.5 hover:text-brand md:min-h-33 md:grid-cols-[90px_1fr_minmax(260px,0.8fr)] md:py-0 md:hover:px-5">
              <span className="text-xs tracking-[0.15em]">{item.no}</span>
              <h3 className="m-0 text-[clamp(29px,4vw,63px)] font-medium leading-none tracking-[-0.04em]">
                {item.title}
              </h3>
              <p className="col-start-2 m-0 text-[15px] leading-[1.7] md:col-span-1 md:col-start-auto">
                {item.desc}
              </p>
            </li>
          </Reveal>
        ))}
      </ul>
    </section>
  );
}
