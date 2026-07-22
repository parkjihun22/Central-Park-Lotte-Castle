import siteLayout1BlImage from "../../assets/ComplexGuide/ComplexGuide1/page1.webp";
import siteLayout21BlImage from "../../assets/ComplexGuide/ComplexGuide1/page2.webp";
import siteLayout22BlImage from "../../assets/ComplexGuide/ComplexGuide1/page3.webp";
import householdLayout1BlImage from "../../assets/ComplexGuide/ComplexGuide2/page1.webp";
import householdLayout21BlImage from "../../assets/ComplexGuide/ComplexGuide2/page2.webp";
import householdLayout22BlImage from "../../assets/ComplexGuide/ComplexGuide2/page3.webp";
import community1BlImage from "../../assets/ComplexGuide/ComplexGuide3/page1.jpg";
import community21BlImage from "../../assets/ComplexGuide/ComplexGuide3/page2.jpg";
import community22BlImage from "../../assets/ComplexGuide/ComplexGuide3/page3.jpg";


export const complexMenuContents = [
  { title: "단지 배치도", url: "/ComplexGuide/intro" },
  { title: "호수 배치도", url: "/ComplexGuide/detailintro" },
  { title: "커뮤니티", url: "/ComplexGuide/community" },
];

export const siteLayoutBlocks = [
  {
    slug: "1bl",
    label: "1BL",
    title: "1BL 단지 배치도",
    description: "1BL의 동 배치, 주출입 동선, 조경 계획을 한눈에 확인하세요.",
    image: siteLayout1BlImage,
    alt: "중앙공원 롯데캐슬 1BL 단지배치도",
  },
  {
    slug: "2-1bl",
    label: "2-1BL",
    title: "2-1BL 단지 배치도",
    description: "2-1BL의 단지 구성과 보행 동선을 정리한 배치도 영역입니다.",
    image: siteLayout21BlImage,
    alt: "중앙공원 롯데캐슬 2-1BL 단지배치도",
  },
  {
    slug: "2-2bl",
    label: "2-2BL",
    title: "2-2BL 단지 배치도",
    description: "2-2BL의 단지 구성과 생활 동선을 확인할 수 있는 배치도 영역입니다.",
    image: siteLayout22BlImage,
    alt: "중앙공원 롯데캐슬 2-2BL 단지배치도",
  },
];

export const householdLayoutBlocks = [
  {
    slug: "1bl",
    label: "1BL",
    title: "1BL 호수 배치도",
    description: "1BL의 동별 세대 위치와 타입별 호수 구성을 확인하세요.",
    image: householdLayout1BlImage,
    alt: "중앙공원 롯데캐슬 1BL 호수배치도",
  },
  {
    slug: "2-1bl",
    label: "2-1BL",
    title: "2-1BL 호수 배치도",
    description: "2-1BL의 동호수 구성과 세대 배치를 정리한 안내 영역입니다.",
    image: householdLayout21BlImage,
    alt: "중앙공원 롯데캐슬 2-1BL 호수배치도",
  },
  {
    slug: "2-2bl",
    label: "2-2BL",
    title: "2-2BL 호수 배치도",
    description: "2-2BL의 동호수 구성과 타입별 세대 위치를 확인할 수 있는 안내 영역입니다.",
    image: householdLayout22BlImage,
    alt: "중앙공원 롯데캐슬 2-2BL 호수배치도",
  },
];

export const communityBlocks = [
  {
    slug: "1bl",
    label: "1BL",
    title: "1BL 커뮤니티",
    description: "1BL 입주민을 위한 건강, 교육, 문화, 편의 커뮤니티 공간을 확인하세요.",
    image: community1BlImage,
    alt: "중앙공원 롯데캐슬 1BL 커뮤니티 안내",
  },
  {
    slug: "2-1bl",
    label: "2-1BL",
    title: "2-1BL 커뮤니티",
    description: "2-1BL 입주민 커뮤니티 시설과 생활 편의 공간을 정리한 안내 영역입니다.",
    image: community21BlImage,
    alt: "중앙공원 롯데캐슬 2-1BL 커뮤니티",
  },
  {
    slug: "2-2bl",
    label: "2-2BL",
    title: "2-2BL 커뮤니티",
    description: "2-2BL 입주민 커뮤니티 시설과 여가 공간을 확인할 수 있는 안내 영역입니다.",
    image: community22BlImage,
    alt: "중앙공원 롯데캐슬 2-2BL 커뮤니티",
  },
];

export const getActiveBlock = (blocks, blockSlug) =>
  blocks.find((block) => block.slug === blockSlug) || blocks[0];
