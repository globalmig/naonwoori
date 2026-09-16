export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="mt-19.5 grid grid-cols-1 gap-6 border-t border-(--line-strong) px-5.5 pb-10 pt-6 text-xs leading-loose text-brand md:mt-30 md:grid-cols-[1fr_auto] md:px-(--side)">
      <address className="not-italic">
        ㈜나온우리 · 대표 조현정
        <br />
        경기도 성남시 분당구 판교역로 136
      </address>
      <div className="md:text-right">
        <address className="inline not-italic">naonwoori@hanmail.net</address>
        <br />© {year} NAONWOORI
      </div>
    </footer>
  );
}
