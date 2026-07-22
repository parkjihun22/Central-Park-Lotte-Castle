const SITE_URL = "https://geomoho-hobansummit.com";

export const siteSeo = {
  siteName: "중앙공원 롯데캐슬",
  siteUrl: SITE_URL,
  phone: "1533-8848",
  ogImage: "/img/og/main.jpg",
  locale: "ko_KR",

  organizationId: `${SITE_URL}/#organization`,
  websiteId: `${SITE_URL}/#website`,

  defaultDescription:
    "광주 중앙공원 롯데캐슬 시그니처 분양안내입니다. 광주광역시 서구 화정동·금호동·풍암동 일원에 조성되는 1BL·2-1BL·2-2BL, 총 39개동 2,772세대의 사업개요, 블록별 평면도, 분양가, 잔여세대, 모델하우스 및 방문예약 정보를 확인하세요.",

  project: {
    addressCountry: "KR",
    addressRegion: "광주광역시",
    addressLocality: "서구",
    streetAddress:
      "화정동 457-20번지·금호동 80번지·풍암동 569번지 일원",

    brands: [
      "중앙공원 롯데캐슬",
      "중앙공원 롯데캐슬 시그니처",
      "광주 중앙공원 롯데캐슬",
      "광주 중앙공원 롯데캐슬 시그니처",
      "롯데캐슬",
      "롯데건설",
    ],

    navigationSchemaName: "중앙공원 롯데캐슬 주요 메뉴",
  },

  keywords: [
    "중앙공원 롯데캐슬",
    "중앙공원 롯데캐슬 시그니처",
    "광주 중앙공원 롯데캐슬",
    "광주 중앙공원 롯데캐슬 시그니처",
    "중앙공원 롯데캐슬 1BL",
    "중앙공원 롯데캐슬 2-1BL",
    "중앙공원 롯데캐슬 2-2BL",
    "중앙공원 롯데캐슬 평면도",
    "중앙공원 롯데캐슬 모델하우스",
    "중앙공원 롯데캐슬 견본주택",
    "롯데캐슬 시그니처",
  ],
};

export const seoNavigation = [
  {
    name: "브랜드소개",
    path: "/Brand/intro",
    children: [
      {
        name: "브랜드소개",
        path: "/Brand/intro",
      },
    ],
  },
  {
    name: "사업안내",
    path: "/BusinessGuide/intro",
    children: [
      {
        name: "사업안내",
        path: "/BusinessGuide/intro",
      },
    ],
  },
  {
    name: "입지환경",
    path: "/LocationEnvironment/intro",
    children: [
      {
        name: "입지안내",
        path: "/LocationEnvironment/intro",
      },
      {
        name: "프리미엄",
        path: "/LocationEnvironment/primium",
      },
    ],
  },
  {
    name: "단지안내",
    path: "/ComplexGuide/intro",
    children: [
      {
        name: "단지배치도",
        path: "/ComplexGuide/intro",
      },
      {
        name: "호수배치도",
        path: "/ComplexGuide/detailintro",
      },
      {
        name: "커뮤니티",
        path: "/ComplexGuide/community",
      },
    ],
  },
  {
    name: "타입안내",
    path: "/FloorPlan/59A",
    children: [
      {
        name: "1BL 평면도",
        path: "/FloorPlan/59A",
      },
      {
        name: "2-1BL 평면도",
        path: "/FloorPlan/59B",
      },
      {
        name: "2-2BL 평면도",
        path: "/FloorPlan/84A",
      },
    ],
  },
  {
    name: "홍보센터",
    path: "/Promotion/Customer",
    children: [
      {
        name: "관심고객등록",
        path: "/Promotion/Customer",
      },
    ],
  },
];

const page = ({
  path,
  title,
  description,
  menu,
  image = siteSeo.ogImage,
  priority = 0.8,
  changefreq = "weekly",
  robots = "index, follow, max-snippet:-1, max-image-preview:large",
}) => ({
  path,
  title,
  description,
  menu,
  image,
  priority,
  changefreq,
  robots,
});

export const seoPages = {
  home: page({
    path: "/",
    title: "중앙공원 롯데캐슬",
    description: siteSeo.defaultDescription,
    menu: "홈",
    priority: 1,
    changefreq: "daily",
  }),

  brandIntro: page({
    path: "/Brand/intro",
    title: "브랜드소개 | 중앙공원 롯데캐슬",
    description:
      "광주 중앙공원 롯데캐슬 시그니처 브랜드소개입니다. 롯데캐슬의 주거 철학과 중앙공원 1지구에서 선보이는 총 2,772세대 프리미엄 브랜드 타운을 확인하세요.",
    menu: "브랜드소개",
  }),

  businessIntro: page({
    path: "/BusinessGuide/intro",
    title: "사업안내 | 중앙공원 롯데캐슬",
    description:
      "중앙공원 롯데캐슬 시그니처 사업안내입니다. 광주광역시 서구 화정동·금호동·풍암동 일원에 조성되는 1BL·2-1BL·2-2BL, 총 39개동 2,772세대의 블록별 사업개요를 확인하세요.",
    menu: "사업안내",
    image: "/img/og/business.jpg",
    priority: 0.9,
  }),

  locationIntro: page({
    path: "/LocationEnvironment/intro",
    title: "입지환경 | 중앙공원 롯데캐슬",
    description:
      "중앙공원 롯데캐슬 시그니처 입지환경입니다. 약 224만㎡ 중앙공원 1지구와 풍암호수, 풍암IC, 광주 제2순환도로, 화정·금호·풍암 생활권의 교육·쇼핑·문화 인프라를 확인하세요.",
    menu: "입지환경",
    image: "/img/og/location.jpg",
    priority: 0.9,
  }),

  locationPremium: page({
    path: "/LocationEnvironment/primium",
    title: "프리미엄 | 중앙공원 롯데캐슬",
    description:
      "중앙공원 롯데캐슬 시그니처 프리미엄입니다. 중앙공원과 풍암호수의 자연환경, 총 2,772세대 대단지, 블록별 평면과 롯데캐슬 브랜드 가치를 확인하세요.",
    menu: "입지환경",
    image: "/img/og/location.jpg",
  }),

  complexIntro: page({
    path: "/ComplexGuide/intro",
    title: "단지배치도 | 중앙공원 롯데캐슬",
    description:
      "중앙공원 롯데캐슬 시그니처 단지배치도입니다. 1BL·2-1BL·2-2BL 총 39개동의 블록별 동 배치와 조경계획, 보행 동선을 확인하세요.",
    menu: "단지안내",
    image: "/img/og/complex.jpg",
    priority: 0.9,
  }),

  complexDetail: page({
    path: "/ComplexGuide/detailintro",
    title: "호수배치도 | 중앙공원 롯데캐슬",
    description:
      "중앙공원 롯데캐슬 시그니처 호수배치도입니다. 3개 블록의 동·호수 구성과 전용 84㎡부터 233㎡까지 주택형별 세대 위치 및 배치정보를 확인하세요.",
    menu: "단지안내",
    image: "/img/og/complex.jpg",
  }),

  complexCommunity: page({
    path: "/ComplexGuide/community",
    title: "커뮤니티 | 중앙공원 롯데캐슬",
    description:
      "중앙공원 롯데캐슬 시그니처 커뮤니티 안내입니다. 스카이라운지와 피트니스, 골프연습장, 사우나 등 블록별 입주민 시설을 확인하세요.",
    menu: "단지안내",
    image: "/img/og/complex.jpg",
  }),

  floorPlan1BL: page({
    path: "/FloorPlan/59A",
    title: "1BL 평면도 | 중앙공원 롯데캐슬",
    description:
      "중앙공원 롯데캐슬 시그니처 1BL 평면도입니다. 114㎡, 119㎡A·B, 135㎡A·B, 211㎡P, 233㎡P의 통합 평면과 공간 구성을 확인하세요.",
    menu: "타입안내",
    priority: 0.9,
  }),

  floorPlan21BL: page({
    path: "/FloorPlan/59B",
    title: "2-1BL 평면도 | 중앙공원 롯데캐슬",
    description:
      "중앙공원 롯데캐슬 시그니처 2-1BL 평면도입니다. 84㎡A·B, 121㎡, 139㎡A·B·C·D, 166㎡의 통합 평면과 공간 구성을 확인하세요.",
    menu: "타입안내",
    priority: 0.9,
  }),

  floorPlan22BL: page({
    path: "/FloorPlan/84A",
    title: "2-2BL 평면도 | 중앙공원 롯데캐슬",
    description:
      "중앙공원 롯데캐슬 시그니처 2-2BL 평면도입니다. 84㎡A·B, 102㎡, 121㎡, 139㎡A·B·C, 166㎡의 통합 평면과 공간 구성을 확인하세요.",
    menu: "타입안내",
    priority: 0.9,
  }),

  customer: page({
    path: "/Promotion/Customer",
    title: "모델하우스 방문예약 | 중앙공원 롯데캐슬",
    description:
      "중앙공원 롯데캐슬 시그니처 관심고객등록 및 모델하우스 방문예약 페이지입니다. 1BL·2-1BL·2-2BL의 분양가, 잔여세대, 동·호수, 공급방식과 현재 계약조건을 안내받으세요.",
    menu: "홍보센터",
    image: "/img/og/customer.jpg",
    priority: 0.9,
    changefreq: "daily",
  }),

  notFound: page({
    path: "/404",
    title: "페이지를 찾을 수 없습니다 | 중앙공원 롯데캐슬",
    description:
      "요청하신 페이지를 찾을 수 없습니다. 중앙공원 롯데캐슬의 사업안내, 입지환경, 단지안내, 1BL·2-1BL·2-2BL 평면도와 모델하우스 방문예약 메뉴를 이용해 주세요.",
    menu: "오류",
    priority: 0,
    changefreq: "yearly",
    robots: "noindex, follow",
  }),
};

export const seoPathMap = Object.fromEntries(
  Object.entries(seoPages).map(([key, value]) => [
    value.path.toLowerCase(),
    key,
  ])
);

const complexBlockLabels = {
  "1bl": "1BL",
  "2-1bl": "2-1BL",
  "2-2bl": "2-2BL",
};

const businessBlockDescriptions = {
  "1bl":
    "광주광역시 서구 화정동 457-20번지 일원에 조성되는 지하 3층~지상 28층, 12개동, 총 929세대의 중앙공원 롯데캐슬 시그니처 1BL 사업개요입니다.",

  "2-1bl":
    "광주광역시 서구 금호동 80번지 일원에 조성되는 지하 3층~지상 28층, 13개동, 총 915세대의 중앙공원 롯데캐슬 시그니처 2-1BL 사업개요입니다.",

  "2-2bl":
    "광주광역시 서구 풍암동 569번지 일원에 조성되는 지하 2층~지상 28층, 14개동, 총 928세대의 중앙공원 롯데캐슬 시그니처 2-2BL 사업개요입니다.",
};

const getComplexBlockSeo = (normalizedPath, decodedPath) => {
  const businessPrefix = "/businessguide/intro/";
  const introPrefix = "/complexguide/intro/";
  const detailPrefix = "/complexguide/detailintro/";
  const communityPrefix = "/complexguide/community/";

  if (normalizedPath.startsWith(businessPrefix)) {
    const blockSlug = normalizedPath.replace(businessPrefix, "");
    const blockLabel = complexBlockLabels[blockSlug];

    if (!blockLabel) return null;

    return {
      ...seoPages.businessIntro,
      path: decodedPath,
      title: `${blockLabel} 사업개요 | 중앙공원 롯데캐슬`,
      description: businessBlockDescriptions[blockSlug],
    };
  }

  if (normalizedPath.startsWith(introPrefix)) {
    const blockSlug = normalizedPath.replace(introPrefix, "");
    const blockLabel = complexBlockLabels[blockSlug];

    if (!blockLabel) return null;

    return {
      ...seoPages.complexIntro,
      path: decodedPath,
      title: `${blockLabel} 단지배치도 | 중앙공원 롯데캐슬`,
      description: `중앙공원 롯데캐슬 시그니처 ${blockLabel} 단지배치도입니다. 블록별 동 배치와 조경계획, 보행 동선을 확인하세요.`,
    };
  }

  if (normalizedPath.startsWith(detailPrefix)) {
    const blockSlug = normalizedPath.replace(detailPrefix, "");
    const blockLabel = complexBlockLabels[blockSlug];

    if (!blockLabel) return null;

    return {
      ...seoPages.complexDetail,
      path: decodedPath,
      title: `${blockLabel} 호수배치도 | 중앙공원 롯데캐슬`,
      description: `중앙공원 롯데캐슬 시그니처 ${blockLabel} 호수배치도입니다. 블록별 동·호수 구성과 주택형별 세대 위치를 확인하세요.`,
    };
  }

  if (normalizedPath.startsWith(communityPrefix)) {
    const blockSlug = normalizedPath.replace(communityPrefix, "");
    const blockLabel = complexBlockLabels[blockSlug];

    if (!blockLabel) return null;

    return {
      ...seoPages.complexCommunity,
      path: decodedPath,
      title: `${blockLabel} 커뮤니티 | 중앙공원 롯데캐슬`,
      description: `중앙공원 롯데캐슬 시그니처 ${blockLabel} 커뮤니티 안내입니다. 블록별 입주민 시설과 건강·휴식·여가 공간을 확인하세요.`,
    };
  }

  return null;
};

export const getAbsoluteUrl = (path = "/") => {
  if (/^https?:\/\//.test(path)) return path;

  return `${siteSeo.siteUrl}${path}`;
};

export const getSeoPageByPath = (pathname = "/") => {
  const decodedPath = decodeURI(pathname).replace(/\/$/, "") || "/";
  const normalizedPath = decodedPath.toLowerCase();
  const exactKey = seoPathMap[normalizedPath];

  if (exactKey) return seoPages[exactKey];

  const complexBlockPage = getComplexBlockSeo(
    normalizedPath,
    decodedPath
  );

  if (complexBlockPage) return complexBlockPage;

  if (normalizedPath.endsWith("/customer")) {
    return seoPages.customer;
  }

  return seoPages.notFound;
};