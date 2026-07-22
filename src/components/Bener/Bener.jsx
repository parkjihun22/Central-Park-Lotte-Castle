import React, { useEffect, useState } from "react";
import styles from "./Bener.module.scss";
import img from "../../assets/Bener/bener.jpg";

const Bener = ({ title = "중앙공원 롯데캐슬" }) => {
    const [isLoaded, setIsLoaded] = useState(false);

    // 이미지가 로드된 후 애니메이션 시작
    useEffect(() => {
        const timer = setTimeout(() => {
            setIsLoaded(true); // 이미지 로딩 후 애니메이션을 시작
        }, 100); // 0.1초 후에 애니메이션을 시작

        return () => clearTimeout(timer);
    }, []);

    return (
        <div className={styles.container}>
            {/* 배너 이미지 */}
            <img
                className={`${styles.benerImage} ${isLoaded ? styles.showImage : ''}`}
                src={img}
                alt="중앙공원 롯데캐슬 배너이미지"
            />
            <div className={styles.overlay}></div>
            <div
                className={`${styles.contents} ${isLoaded ? styles.showContents : ''}`}
            >
                <h1
                    className={`${styles.title} ${isLoaded ? styles.showTitle : ''}`}
                >
                    {title}
                </h1>
                {contents(title, isLoaded)}
            </div>
        </div>
    );
};

export default Bener;

const contents = (text, isLoaded) => {
  const normalizedText = text.replace(/\s/g, "");

  const brandTitles = [
    "홍보영상",
    "브랜드소개",
    "중앙공원롯데캐슬",
    "중앙공원롯데캐슬시그니처",
  ];

  const businessTitles = [
    "사업개요",
    "사업안내",
    "분양일정",
    "분양안내",
    "입주자모집공고",
    "공급안내",
    "계약서류안내",
  ];

  const locationTitles = [
    "입지환경",
    "입지안내",
    "프리미엄",
  ];

  const complexTitles = [
    "단지안내",
    "단지배치도",
    "동호수배치도",
    "호수배치도",
    "커뮤니티",
  ];

  const unitTitles = [
    "세대안내",
    "세대안내영상",
    "타입안내",
    "평면안내",
    "1BL평면안내",
    "2-1BL평면안내",
    "2-2BL평면안내",
    "59A㎡평면도",
    "59B㎡평면도",
    "84A㎡평면도",
    "E모델하우스",
    "E-모델하우스",
  ];

  const promotionTitles = [
    "홍보센터",
    "언론보도",
    "관심고객등록",
    "방문예약등록",
  ];

  if (brandTitles.includes(normalizedText)) {
    return (
      <>
        <div className={`${styles.text} ${isLoaded ? styles.showText : ""}`}>
          광주 중앙공원 1지구를 대표하는 프리미엄 주거단지,
          중앙공원 롯데캐슬 시그니처.
        </div>

        <div className={`${styles.text} ${isLoaded ? styles.showText : ""}`}>
          롯데캐슬의 브랜드 가치와 품격을 담은 총 2,772세대 대단지.
        </div>

        <div className={`${styles.text} ${isLoaded ? styles.showText : ""}`}>
          중앙공원과 풍암호수를 가까이 누리는 특별한 주거생활을
          만나보세요.
        </div>
      </>
    );
  } else if (
    businessTitles.includes(normalizedText) ||
    unitTitles.includes(normalizedText) ||
    normalizedText.includes("인테리어")
  ) {
    return (
      <>
        <div className={`${styles.text} ${isLoaded ? styles.showText : ""}`}>
          중앙공원 롯데캐슬 시그니처의 사업개요와 공급정보를 안내합니다.
        </div>

        <div className={`${styles.text} ${isLoaded ? styles.showText : ""}`}>
          1BL·2-1BL·2-2BL, 총 39개 동 2,772세대로 조성되는 롯데캐슬
          브랜드 타운.
        </div>

        <div className={`${styles.text} ${isLoaded ? styles.showText : ""}`}>
          전용 84㎡부터 233㎡까지 블록별 평면과 다양한 타입 구성을
          확인하세요.
        </div>

        <div className={`${styles.text} ${isLoaded ? styles.showText : ""}`}>
          분양가와 잔여세대, 공급조건 및 모델하우스 정보를 안내합니다.
        </div>
      </>
    );
  } else if (locationTitles.includes(normalizedText)) {
    return (
      <>
        <div className={`${styles.text} ${isLoaded ? styles.showText : ""}`}>
          중앙공원과 풍암호수를 가까이 누리는 도심 속 공원 프리미엄.
        </div>

        <div className={`${styles.text} ${isLoaded ? styles.showText : ""}`}>
          화정·금호·풍암 생활권의 교육·교통·쇼핑·문화 인프라를 편리하게
          이용할 수 있습니다.
        </div>

        <div className={`${styles.text} ${isLoaded ? styles.showText : ""}`}>
          풍암IC와 광주 제2순환도로를 통해 광주 주요 지역으로 편리하게
          이동합니다.
        </div>
      </>
    );
  } else if (complexTitles.includes(normalizedText)) {
    return (
      <>
        <div className={`${styles.text} ${isLoaded ? styles.showText : ""}`}>
          3개 블록, 총 39개 동 2,772세대로 조성되는 중앙공원 롯데캐슬
          시그니처.
        </div>

        <div className={`${styles.text} ${isLoaded ? styles.showText : ""}`}>
          블록별 단지배치와 동호수 구성, 쾌적한 조경계획을 확인하세요.
        </div>

        <div className={`${styles.text} ${isLoaded ? styles.showText : ""}`}>
          스카이라운지와 사우나, 피트니스, 골프연습장 등 품격 있는
          커뮤니티가 조성됩니다.
        </div>
      </>
    );
  } else if (promotionTitles.includes(normalizedText)) {
    return (
      <>
        <div className={`${styles.text} ${isLoaded ? styles.showText : ""}`}>
          중앙공원 롯데캐슬 시그니처의 분양 소식과 모델하우스 방문예약을
          안내합니다.
        </div>

        <div className={`${styles.text} ${isLoaded ? styles.showText : ""}`}>
          관심고객등록을 통해 블록별 잔여세대와 공급조건, 상담 정보를
          안내받아 보세요.
        </div>
      </>
    );
  }

  return (
    <div className={`${styles.text} ${isLoaded ? styles.showText : ""}`}>
      중앙공원 롯데캐슬 시그니처 분양정보와 모델하우스 방문예약 안내를
      확인하세요.
    </div>
  );
};
