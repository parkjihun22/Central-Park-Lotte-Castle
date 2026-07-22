import React, { useEffect, useRef, useState } from "react";
import { Link, useLocation, useParams } from "react-router-dom";
import styles from "./ComplexGuide.module.scss";
import Header from "../../components/Header/Header";
import MenuBar from "../../components/MenuBar/MenuBar";
import Footer from "../../components/Footer/Footer";
import Bener from "../../components/Bener/Bener";
import FixIcon from "../../components/FixIcon/FixIcon";
import {
  complexMenuContents,
  getActiveBlock,
  householdLayoutBlocks,
} from "./complexGuideData";


const ComplexGuide1 = () => {
  const [isScroll, setIsScroll] = useState(false);
  const [isImage2Loaded, setIsImage2Loaded] = useState(false); // 이미지 로딩 상태 추가
  const { pathname } = useLocation(); // 현재 경로를 가져옴
  const { blockId } = useParams();
  const blockTabsRef = useRef(null);
  const activeBlock = getActiveBlock(householdLayoutBlocks, blockId);

  // 이미지가 로드되면 호출되는 함수
  const handleImageLoad = () => {
    setIsImage2Loaded(true); // 이미지가 로드되면 상태 업데이트
  };

  useEffect(() => {
    setIsImage2Loaded(!activeBlock.image);
  }, [activeBlock.image]);

  useEffect(() => {
    const frame = window.requestAnimationFrame(() => {
      if (blockId && blockTabsRef.current) {
        blockTabsRef.current.scrollIntoView({ block: "start" });
        return;
      }

      window.scrollTo(0, 0); // 페이지가 처음 열릴 때는 스크롤을 최상단으로 이동
    });

    return () => window.cancelAnimationFrame(frame);
  }, [pathname, blockId]); // pathname이 변경될 때마다 실행

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScroll(true);
      } else {
        setIsScroll(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className={styles.container}>
<Header isChanged={isScroll} />
<FixIcon />

<Bener title="호수 배치도" />
<MenuBar contents={complexMenuContents} />
<div className={styles.textBox}>
  <div>1BL·2-1BL·2-2BL 블록별 호수 구성을 확인하세요.</div>
  <div>중앙공원 롯데캐슬 동·호수 배치를 확인하세요.</div>
</div>

<nav
  className={styles.blockTabs}
  ref={blockTabsRef}
  aria-label="호수 배치도 블록 선택"
>
  {householdLayoutBlocks.map((block) => {
    const isActive = activeBlock.slug === block.slug;

    return (
      <Link
        key={block.slug}
        className={isActive ? styles.blockTabActive : styles.blockTab}
        to={`/ComplexGuide/detailintro/${block.slug}`}
        aria-current={isActive ? "page" : undefined}
      >
        <span className={styles.blockLabel}>{block.label}</span>
        <span className={styles.blockCaption}>호수배치도</span>
      </Link>
    );
  })}
</nav>

<section
  className={styles.planShell}
  aria-labelledby="household-layout-title"
>
  <div className={styles.planHeader}>
    <span>{activeBlock.label}</span>
    <h2 id="household-layout-title">{activeBlock.title}</h2>
    <p>{activeBlock.description}</p>
  </div>

  {activeBlock.image ? (
    <img
      className={`${styles.image2} ${isImage2Loaded ? styles.showImage2 : ''}`}
      src={activeBlock.image}
      alt={activeBlock.alt}
      onLoad={handleImageLoad}
    />
  ) : (
    <div className={styles.planPlaceholder} role="img" aria-label={activeBlock.alt}>
      <div className={styles.placeholderMap}>
        <span className={styles.placeholderTower}>{activeBlock.label}</span>
        <span className={styles.placeholderTower}>101</span>
        <span className={styles.placeholderTower}>102</span>
        <span className={styles.placeholderPath} />
      </div>
      <strong>{activeBlock.title}</strong>
      <p>도면 이미지 준비 중입니다.</p>
    </div>
  )}
</section>

  

      <div className={styles.commonBox}>
        <div className={styles.notice}>
          ※ 상기 호수배치도 이미지는 소비자의 이해를 돕기 위한 것으로 실제와
          차이가 날 수 있습니다
        </div>
        <div className={styles.notice}>
          ※ 단지 내 조경 및 세부 식재계획, 시설물의 위치는 실제 시공시 현장
          상황에 따라 변경될 수 있습니다
        </div>
        
      </div>

      <Footer />
    </div>
  );
};

export default ComplexGuide1;
