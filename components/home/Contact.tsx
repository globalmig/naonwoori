"use client";

import type { FormEvent } from "react";
import Reveal from "./Reveal";

function handleContactSubmit(event: FormEvent<HTMLFormElement>) {
  event.preventDefault();
  const data = new FormData(event.currentTarget);
  const subject = encodeURIComponent(
    `[Website Inquiry] ${data.get("company")} · ${data.get("name")}`
  );
  const body = encodeURIComponent(
    `Company: ${data.get("company")}\nName: ${data.get("name")}\nReply to: ${data.get(
      "reply"
    )}\n\n${data.get("message")}`
  );
  window.location.href = `mailto:naonwoori@hanmail.net?subject=${subject}&body=${body}`;
}

export default function Contact() {
  return (
    <section
      id="contact"
      className="bg-white px-5.5 pb-12.5 pt-22.5 md:px-(--side) md:pt-[clamp(90px,12vw,180px)]"
    >
      <Reveal className="grid grid-cols-1 gap-13.5">
        <h2 className="m-0 text-[clamp(52px,9vw,145px)] font-[650] leading-[0.87] tracking-[-0.075em]">
          Contact us.
        </h2>

        <form
          onSubmit={handleContactSubmit}
          className="grid max-w-245 grid-cols-1 gap-7.5"
        >
          <div className="grid gap-3">
            <label htmlFor="company" className="text-[15px] font-medium">
              Company *
            </label>
            <input
              id="company"
              name="company"
              type="text"
              placeholder="회사명을 입력해주세요."
              required
              className="w-full border border-[#b9b9b9] px-4.5 py-4 text-base text-ink outline-none transition-colors focus:border-brand focus:shadow-[0_0_0_1px_var(--color-naonwoori-brown)]"
            />
          </div>

          <div className="grid gap-3">
            <label htmlFor="name" className="text-[15px] font-medium">
              Name *
            </label>
            <input
              id="name"
              name="name"
              type="text"
              placeholder="담당자 명을 입력해주세요."
              required
              className="w-full border border-[#b9b9b9] px-4.5 py-4 text-base text-ink outline-none transition-colors focus:border-brand focus:shadow-[0_0_0_1px_var(--color-naonwoori-brown)]"
            />
          </div>

          <div className="grid gap-3">
            <label htmlFor="reply" className="text-[15px] font-medium">
              Contact to be replied *
            </label>
            <input
              id="reply"
              name="reply"
              type="email"
              placeholder="회신 받을 메일주소를 입력해주세요."
              required
              className="w-full border border-[#b9b9b9] px-4.5 py-4 text-base text-ink outline-none transition-colors focus:border-brand focus:shadow-[0_0_0_1px_var(--color-naonwoori-brown)]"
            />
          </div>

          <div className="grid gap-3">
            <label htmlFor="message" className="text-[15px] font-medium">
              Message *
            </label>
            <textarea
              id="message"
              name="message"
              placeholder="간략한 내용을 기입해주세요."
              required
              className="min-h-37.5 w-full resize-y border border-[#b9b9b9] px-4.5 py-4 text-base text-ink outline-none transition-colors focus:border-brand focus:shadow-[0_0_0_1px_var(--color-naonwoori-brown)]"
            />
          </div>

          <div>
            <p className="m-0 mb-3.5 text-[15px] font-medium">Privacy Consent *</p>
            <label className="flex max-w-245 cursor-pointer items-start gap-2.5 text-sm leading-[1.45]">
              <input
                name="privacy"
                type="checkbox"
                required
                className="mt-0.5 h-4.5 w-4.5 flex-none accent-brand"
              />
              <span>
                개인정보 수집 및 이용에 동의합니다. 견적상담 및 문의 회신을 위하여
                성명, 이메일 주소 및 문의·접수 내용을 수집하며, 처리 완료 또는
                회사 내부 방침에 따라 보존이 필요한 경우를 제외하고 지체 없이
                파기합니다.
              </span>
            </label>
          </div>

          <button
            type="submit"
            className="min-w-55 justify-self-start border border-ink bg-ink px-6 py-4.25 text-[15px] font-semibold text-white transition-colors hover:bg-white hover:text-ink"
          >
            SEND INQUIRY →
          </button>
        </form>
      </Reveal>
    </section>
  );
}
