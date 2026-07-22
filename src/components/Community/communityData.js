import bgImage from "../../assets/ComplexGuide/ComplexGuide1/bg-section.jpg";
import bannerImage from "../../assets/ComplexGuide/ComplexGuide1/complex-1024x573.jpg";
import layoutImage from "../../assets/ComplexGuide/ComplexGuide1/page1.webp";
import designImage from "../../assets/ComplexGuide/ComplexGuide2/page1.webp";
import communityImage from "../../assets/ComplexGuide/ComplexGuide3/page1.jpg";

export const communityData = {
  eyebrow: "COMMUNITY",
  title: "중앙공원과 함께 완성되는 프리미엄 단지 설계",
  description:
    "중앙공원 롯데캐슬 시그니처는 1BL·2-1BL·2-2BL, 총 39개 동 2,772세대 규모로 조성됩니다. 중앙공원과 조화를 이루는 블록별 단지 배치와 풍부한 조경, 다양한 커뮤니티를 통해 자연과 일상이 이어지는 품격 있는 주거공간을 제안합니다.",
  backgroundImage: bgImage,

  banner: {
    image: bannerImage,
    alt: "중앙공원 롯데캐슬 시그니처 3개 블록 단지 전경",
  },

  items: [
    {
      id: "complex-layout",
      label: "단지 배치도",
      title: "3개 블록으로 완성되는 대규모 브랜드 타운",
      description:
        "1BL 929세대, 2-1BL 915세대, 2-2BL 928세대로 구성되며 채광과 통풍, 동간거리와 입주민의 보행 동선을 고려해 블록별로 쾌적한 주거환경을 계획하였습니다.",
      image: layoutImage,
      alt: "중앙공원 롯데캐슬 시그니처 단지 배치도",
    },
    {
      id: "complex-design",
      label: "동호수 배치도",
      title: "블록별 특성을 고려한 동호수 구성",
      description:
        "전용 84㎡부터 233㎡까지 다양한 주택형을 블록별로 구성하고, 단지 주변의 중앙공원 및 풍암호수와 조화를 이루도록 동 배치와 조경, 휴게공간 및 보행 동선을 계획하였습니다.",
      image: designImage,
      alt: "중앙공원 롯데캐슬 시그니처 동호수 배치도",
    },
    {
      id: "community-space",
      label: "프리미엄 커뮤니티",
      title: "건강과 휴식, 여가를 위한 커뮤니티",
      description:
        "스카이라운지와 피트니스, 골프연습장, 사우나 등 입주민의 건강과 휴식, 여가생활을 고려한 다양한 커뮤니티 시설이 블록별 계획에 따라 마련됩니다.",
      image: communityImage,
      alt: "중앙공원 롯데캐슬 시그니처 커뮤니티 시설",
    },
  ],
};