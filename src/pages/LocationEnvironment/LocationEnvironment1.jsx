import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { FiSearch, FiX } from "react-icons/fi";

import styles from "./LocationEnvironment.module.scss";
import Header from "../../components/Header/Header";
import MenuBar from "../../components/MenuBar/MenuBar";
import Footer from "../../components/Footer/Footer";
import Bener from "../../components/Bener/Bener";
import FixIcon from "../../components/FixIcon/FixIcon";
import LocationSectionBox from "../../components/LocationSectionBox/LocationSectionBox";
import page1 from "../../assets/LocationEnvironment/LocationEnvironment1/page1.jpg";
import section2Image1 from "../../assets/LocationEnvironment/LocationEnvironment1/session2-1.jpg";
import section2Image2 from "../../assets/LocationEnvironment/LocationEnvironment1/session2-2.jpg";
import section2Image3 from "../../assets/LocationEnvironment/LocationEnvironment1/session2-3.jpg";
import section2Image4 from "../../assets/LocationEnvironment/LocationEnvironment1/session2-4.jpg";
import section2Image5 from "../../assets/LocationEnvironment/LocationEnvironment1/session2-5.jpg";
import section2Image6 from "../../assets/LocationEnvironment/LocationEnvironment1/session2-6.jpg";

const locationMenu = [
  { title: "입지안내", url: "/LocationEnvironment/intro" },
  { title: "프리미엄", url: "/LocationEnvironment/primium" },
];

const locationSections = [
  {
    img: section2Image1,
    titleText: "광주 중앙공원 1지구<br />새로운 주거 중심",
    contentText:
      "광주광역시 서구 화정동·금호동·풍암동 일원<br />3개 블록, 총 2,772세대로 조성되는 중앙공원 롯데캐슬 시그니처",
  },
  {
    img: section2Image2,
    titleText: "광주 도심을 연결하는<br />편리한 교통환경",
    contentText:
      "풍암IC와 광주 제2순환도로를 이용하는 교통망<br />상무지구를 비롯한 광주 주요 지역으로 편리하게 이동",
  },
  {
    img: section2Image3,
    titleText: "더욱 편리해지는 교통<br />기대되는 미래가치",
    contentText:
      "광주도시철도 2호선 등 예정된 교통 개발계획<br />화정·금호·풍암 생활권을 연결하는 도심 주거 입지",
  },
  {
    img: section2Image4,
    titleText: "중앙공원과 풍암호수를 누리는<br />공원 중심 주거환경",
    contentText:
      "약 224만㎡ 규모로 조성되는 광주 중앙공원 1지구<br />테마숲과 산책로, 휴게공간이 어우러진 자연환경",
  },
  {
    img: section2Image5,
    titleText: "교육·쇼핑·문화시설을 갖춘<br />풍부한 생활 인프라",
    contentText:
      "화개초·화정남초·마재초·광주중·풍암고 등 교육시설<br />롯데마트·롯데아울렛·광주월드컵경기장 등 생활문화시설",
  },
  {
    img: section2Image6,
    titleText: "롯데캐슬 브랜드가 완성하는<br />프리미엄 주거생활",
    contentText:
      "1BL·2-1BL·2-2BL 총 39개동의 대규모 브랜드 타운<br />중앙공원 롯데캐슬 시그니처에서 만나는 품격 있는 주거 가치",
  },
];

const LocationEnvironment1 = () => {
  const [isScroll, setIsScroll] = useState(false);
  const [zoomImage, setZoomImage] = useState(null);
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScroll(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    if (!zoomImage) return undefined;

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        setZoomImage(null);
      }
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [zoomImage]);

  const openZoom = (src, alt) => {
    setZoomImage({ src, alt });
  };

  return (
    <div className={styles.container}>
      <Header isChanged={isScroll} />
      <FixIcon />

      <Bener title="입지환경" />
      <MenuBar contents={locationMenu} />

      <div className={styles.textBox}>
  <div>광주 중앙공원 1지구의 새로운 주거 중심에서</div>
  <div>자연의 여유와 도심의 편리함을 함께 누리는 곳</div>
  <div>중앙공원 롯데캐슬 시그니처가 새로운 주거 가치로 찾아옵니다.</div>
</div>

<figure className={styles.locationMapFrame}>
  <img
    src={page1}
    className={styles.image2}
    alt="중앙공원 롯데캐슬 입지환경 생활권 안내"
  />

  <button
    type="button"
    className={styles.zoomButton}
    onClick={() =>
      openZoom(
        page1,
        "중앙공원 롯데캐슬 입지환경 생활권 안내"
      )
    }
    aria-label="중앙공원 롯데캐슬 입지환경 이미지 크게 보기"
  >
          <FiSearch />
          <span>크게 보기</span>
        </button>
      </figure>

      <div className={styles.section2}>
        {locationSections.map((value) => (
          <LocationSectionBox
            key={value.titleText}
            image={value.img}
            title={value.titleText}
            text={value.contentText}
            onZoom={() =>
              openZoom(
                value.img,
                `중앙공원 롯데캐슬 ${value.titleText.replace(/<[^>]*>/g, " ")} 이미지`
              )
            }
          />
        ))}
      </div>

      <div className={styles.commonBox}>
        <div className={styles.notice}>
          본 홍보물의 내용과 이미지는 소비자의 이해를 돕기 위한 것으로, 개발 예정 및 교통,
          학교 계획 등에 관한 사항은 해당 기관의 자료를 토대로 제작되었습니다. 사업계획 및
          일정은 관계 기관과 사업 주체의 사정에 따라 변경될 수 있으며, 자세한 내용은
          입주자모집공고와 관계 기관의 최종 고시를 확인하시기 바랍니다.
        </div>
      </div>

      {zoomImage && (
        <div
          className={styles.zoomModal}
          role="dialog"
          aria-modal="true"
          aria-label="이미지 확대 보기"
          onClick={() => setZoomImage(null)}
        >
          <div className={styles.zoomModalInner} onClick={(event) => event.stopPropagation()}>
            <button
              type="button"
              className={styles.zoomClose}
              onClick={() => setZoomImage(null)}
              aria-label="확대 이미지 닫기"
            >
              <FiX />
            </button>
            <img src={zoomImage.src} alt={zoomImage.alt} />
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
};

export default LocationEnvironment1;
