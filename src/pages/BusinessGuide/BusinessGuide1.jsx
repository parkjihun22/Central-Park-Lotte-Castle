import React, { useEffect, useRef, useState } from "react";
import { Link, useLocation, useParams } from "react-router-dom";
import { useMediaQuery } from "react-responsive";
import styles from './BusinessGuide.module.scss';
import Header from "../../components/Header/Header";
import MenuBar from "../../components/MenuBar/MenuBar";
import Footer from "../../components/Footer/Footer";
import Bener from "../../components/Bener/Bener";
import FixIcon from "../../components/FixIcon/FixIcon";
import page1 from "../../assets/BusinessGuide/BusinessGuide1/page1.jpg";
import tableImage from "../../assets/BusinessGuide/BusinessGuide1/tableImage.jpg";

const projectData1BL = [
  {
    label: "블록명",
    value: "1BL",
  },
  {
    label: "현장명",
    value: "중앙공원 롯데캐슬 시그니처",
  },
  {
    label: "사업명",
    value: "광주광역시 민간공원 개발행위 특례사업(중앙근린공원)",
  },
  {
    label: "대지위치",
    value: "광주광역시 서구 화정동 457-20번지 일원",
  },
  {
    label: "규모",
    value: "지하 3층~지상 28층 / 총 12개동",
  },
  {
    label: "세대수",
    value: "총 929세대",
  },
  {
    label: "주택형",
    value: "114㎡ / 119㎡A·B / 135㎡A·B / 211㎡P / 233㎡P",
  },
  {
    label: "분양시기",
    value: "2024년 4월 5일",
  },
  {
    label: "입주시기",
    value: "2027년 8월 예정",
  },
  {
    label: "용도",
    value: "공동주택(아파트) 및 부대복리시설",
  },
  {
    label: "시행사",
    value: "빛고을중앙공원개발 주식회사",
  },
  {
    label: "시공사",
    value: "롯데건설(주)",
  },
];

const projectData21BL = [
  {
    label: "블록명",
    value: "2-1BL",
  },
  {
    label: "현장명",
    value: "중앙공원 롯데캐슬 시그니처",
  },
  {
    label: "사업명",
    value: "광주광역시 민간공원 개발행위 특례사업(중앙근린공원)",
  },
  {
    label: "대지위치",
    value: "광주광역시 서구 금호동 80번지 일원",
  },
  {
    label: "규모",
    value: "지하 3층~지상 28층 / 총 13개동",
  },
  {
    label: "세대수",
    value: "총 915세대",
  },
  {
    label: "주택형",
    value: "84㎡A·B / 121㎡ / 139㎡A·B·C·D / 166㎡",
  },
  {
    label: "분양시기",
    value: "2024년 4월 5일",
  },
  {
    label: "입주시기",
    value: "2027년 8월 예정",
  },
  {
    label: "용도",
    value: "공동주택(아파트) 및 부대복리시설",
  },
  {
    label: "시행사",
    value: "빛고을중앙공원개발 주식회사",
  },
  {
    label: "시공사",
    value: "롯데건설(주)",
  },
];

const projectData22BL = [
  {
    label: "블록명",
    value: "2-2BL",
  },
  {
    label: "현장명",
    value: "중앙공원 롯데캐슬 시그니처",
  },
  {
    label: "사업명",
    value: "광주광역시 민간공원 개발행위 특례사업(중앙근린공원)",
  },
  {
    label: "대지위치",
    value: "광주광역시 서구 풍암동 569번지 일원",
  },
  {
    label: "규모",
    value: "지하 2층~지상 28층 / 총 14개동",
  },
  {
    label: "세대수",
    value: "총 928세대",
  },
  {
    label: "주택형",
    value: "84㎡A·B / 102㎡ / 121㎡ / 139㎡A·B·C / 166㎡",
  },
  {
    label: "분양시기",
    value: "2024년 4월 5일",
  },
  {
    label: "입주시기",
    value: "2027년 8월 예정",
  },
  {
    label: "용도",
    value: "공동주택(아파트) 및 부대복리시설",
  },
  {
    label: "시행사",
    value: "빛고을중앙공원개발 주식회사",
  },
  {
    label: "시공사",
    value: "롯데건설(주)",
  },
];

const businessBlocks = [
  {
    slug: "1bl",
    label: "1BL",
    title: "1BL 사업개요",
    description:
      "광주광역시 서구 화정동 457-20번지 일원에 조성되는 12개동, 총 929세대의 중앙공원 롯데캐슬 시그니처 1BL 사업개요입니다.",
    image: page1,
    imageAlt:
      "광주 중앙공원 롯데캐슬 시그니처 1BL 929세대 사업개요 안내",
    tableImage,
    tableAlt:
      "중앙공원 롯데캐슬 시그니처 1BL 위치 규모 세대수 사업개요",
    data: projectData1BL,
  },
  {
    slug: "2-1bl",
    label: "2-1BL",
    title: "2-1BL 사업개요",
    description:
      "광주광역시 서구 금호동 80번지 일원에 조성되는 13개동, 총 915세대의 중앙공원 롯데캐슬 시그니처 2-1BL 사업개요입니다.",
      image: page1,
    imageAlt:
      "광주 중앙공원 롯데캐슬 시그니처 2-1BL 915세대 사업개요 안내",
      tableImage,
      tableAlt:
        "중앙공원 롯데캐슬 시그니처 2-1BL 위치 규모 세대수 사업개요",
    data: projectData21BL,
  },
  {
    slug: "2-2bl",
    label: "2-2BL",
    title: "2-2BL 사업개요",
    description:
      "광주광역시 서구 풍암동 569번지 일원에 조성되는 14개동, 총 928세대의 중앙공원 롯데캐슬 시그니처 2-2BL 사업개요입니다.",
      image: page1,
    imageAlt:
      "광주 중앙공원 롯데캐슬 시그니처 2-2BL 928세대 사업개요 안내",
      tableImage,
      tableAlt:
        "중앙공원 롯데캐슬 시그니처 2-2BL 위치 규모 세대수 사업개요",
    data: projectData22BL,
  },
];

const getActiveBusinessBlock = (blockSlug) =>
  businessBlocks.find((block) => block.slug === blockSlug) || businessBlocks[0];

const BusinessGuide1 = () => {
  const menuContents = [
    { title: "사업안내", url: "/BusinessGuide/intro" },
    // { title: "분양일정", url: "/BusinessGuide/plan" },
  ];

  const [isScroll, setIsScroll] = useState(false);
  const { pathname } = useLocation();
  const { blockId } = useParams();
  const blockTabsRef = useRef(null);
  const isMobile = useMediaQuery({ query: '(max-width: 900px)' });
  const activeBlock = getActiveBusinessBlock(blockId);

  useEffect(() => {
    const frame = window.requestAnimationFrame(() => {
      if (blockId && blockTabsRef.current) {
        blockTabsRef.current.scrollIntoView({ block: "start" });
        return;
      }

      window.scrollTo(0, 0);
    });

    return () => window.cancelAnimationFrame(frame);
  }, [pathname, blockId]);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScroll(true);
      } else {
        setIsScroll(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className={styles.container}>
<Header isChanged={isScroll} />
<FixIcon />

<Bener title="사업개요" />

<MenuBar contents={menuContents} />
<div className={styles.textBox}>
  <div>
    1BL·2-1BL·2-2BL 블록별 사업개요를 확인하세요.
  </div>
  <div>
    중앙공원 롯데캐슬, 호반건설의 브랜드 프리미엄을 완성합니다.
  </div>
</div>

<nav
  className={styles.blockTabs}
  ref={blockTabsRef}
  aria-label="사업개요 블록 선택"
>
  {businessBlocks.map((block) => {
    const isActive = activeBlock.slug === block.slug;

    return (
      <Link
        key={block.slug}
        className={isActive ? styles.blockTabActive : styles.blockTab}
        to={`/BusinessGuide/intro/${block.slug}`}
        aria-current={isActive ? "page" : undefined}
      >
        <span className={styles.blockLabel}>{block.label}</span>
        <span className={styles.blockCaption}>사업개요</span>
      </Link>
    );
  })}
</nav>

<section className={styles.businessShell} aria-labelledby="business-title">
  <div className={styles.businessHeader}>
    <span>{activeBlock.label}</span>
    <h2 id="business-title">{activeBlock.title}</h2>
    <p>{activeBlock.description}</p>
  </div>

  {activeBlock.image ? (
    <img
      className={styles.img3}
      src={activeBlock.image}
      alt={activeBlock.imageAlt}
    />
  ) : (
    <div className={styles.businessPlaceholder} role="img" aria-label={activeBlock.imageAlt}>
      <span>{activeBlock.label}</span>
      <strong>{activeBlock.title}</strong>
      <p>사업개요 이미지 준비 중입니다.</p>
    </div>
  )}

  <div className={styles.tableContainer}>
    {!isMobile && activeBlock.tableImage && (
      <img
        className={styles.tableImg}
        src={activeBlock.tableImage}
        alt={activeBlock.tableAlt}
      />
    )}
    <table className={styles.projectTable}>
      <tbody>
        {activeBlock.data.map((item, index) => (
          <tr key={index}>
            <td className={styles.label}>{item.label}</td>
            <td className={styles.contents}>{item.value}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
</section>

			 <div className={styles.commonBox}>
				<div className={styles.notice}>
					※ 본 홈페이지에 표기된 내용은 하기의 내용을 근거로 한 내용이며, 추후 계획의 변동 등은 당사와 무관합니다.
				</div>
				
			</div> 


			<Footer />
		</div>
	)
}

export default BusinessGuide1;
