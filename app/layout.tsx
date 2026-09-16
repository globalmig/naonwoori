import Header from "@/components/common/Header";
import "./globals.css";
import Footer from "@/components/common/Footer";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    default: "naonwoori · 공간과 미디어를 잇는 통합 전시·행사 대행사",
    template: "%s · 나온우리",
  },
  description:
    "2004년부터 축적한 오프라인 전시·이벤트 현장 노하우에 디지털·미디어 기술을 접목한 통합 스페이스 마케팅 전문 기업 (주)나온우리입니다. 현대자동차, 기아, 제네시스 등 주요 브랜드의 모터쇼·체험형 프로모션·미디어 행사를 성공적으로 수행합니다.",
  keywords: [
    "나온우리",
    "행사대행",
    "전시대행",
    "미디어전시",
    "디지털이벤트",
    "인터랙티브전시",
    "체험형프로모션",
    "도슨트교육",
    "박람회대행",
    "MICE",
  ],
  openGraph: {
    title: "나온우리 · naonwoori",
    description:
      "공간의 가치를 극대화하는 나온우리의 차별화된 미디어·전시 기획 솔루션을 만나보세요.",
    siteName: "나온우리",
    images: [
      {
        url: "https://---/images/og_image.jpg",
        width: 1200,
        height: 630,
        alt: "나온우리",
      },
    ],
    locale: "ko_KR",
    type: "website",
  },
  other: {
    "naver-site-verification": "search-advider",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="ko"
    >
      <body>
        <Header/>
        {children}
        <Footer/>
        </body>
    </html>
  );
}
