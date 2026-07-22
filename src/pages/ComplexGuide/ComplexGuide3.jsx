import React, { useEffect, useRef, useState } from "react";
import { Link, useLocation, useParams } from "react-router-dom";
import styles from "./ComplexGuide.module.scss";
import Header from "../../components/Header/Header";
import MenuBar from "../../components/MenuBar/MenuBar";
import Footer from "../../components/Footer/Footer";
import Bener from "../../components/Bener/Bener";
import FixIcon from "../../components/FixIcon/FixIcon";
import {
  communityBlocks,
  complexMenuContents,
  getActiveBlock,
} from "./complexGuideData";

const ComplexGuide3 = () => {
  const [isScroll, setIsScroll] = useState(false);
  const [isImage2Loaded, setIsImage2Loaded] = useState(false); // 이미지 로딩 상태 추가
  const { pathname } = useLocation(); // 현재 경로를 가져옴
  const { blockId } = useParams();
  const blockTabsRef = useRef(null);
  const activeBlock = getActiveBlock(communityBlocks, blockId);

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

<Bener title="커뮤니티" />
<MenuBar contents={complexMenuContents} />
<div className={styles.textBox}>
  <div>1BL·2-1BL·2-2BL 블록별 커뮤니티를 확인하세요.</div>
  <div>중앙공원 롯데캐슬의 스마트 커뮤니티를 확인하세요.</div>
</div>

<nav
  className={styles.blockTabs}
  ref={blockTabsRef}
  aria-label="커뮤니티 블록 선택"
>
  {communityBlocks.map((block) => {
    const isActive = activeBlock.slug === block.slug;

    return (
      <Link
        key={block.slug}
        className={isActive ? styles.blockTabActive : styles.blockTab}
        to={`/ComplexGuide/community/${block.slug}`}
        aria-current={isActive ? "page" : undefined}
      >
        <span className={styles.blockLabel}>{block.label}</span>
        <span className={styles.blockCaption}>커뮤니티</span>
      </Link>
    );
  })}
</nav>

<section className={styles.planShell} aria-labelledby="community-title">
  <div className={styles.planHeader}>
    <span>{activeBlock.label}</span>
    <h2 id="community-title">{activeBlock.title}</h2>
    <p>{activeBlock.description}</p>
  </div>

  {activeBlock.image ? (
    <img
      className={`${styles.image2} ${
        isImage2Loaded ? styles.showImage2 : ""
      }`}
      src={activeBlock.image}
      alt={activeBlock.alt}
      onLoad={handleImageLoad}
    />
  ) : (
    <div className={styles.planPlaceholder} role="img" aria-label={activeBlock.alt}>
      <div className={styles.placeholderMap}>
        <span className={styles.placeholderTower}>{activeBlock.label}</span>
        <span className={styles.placeholderTower}>FIT</span>
        <span className={styles.placeholderTower}>CAFE</span>
        <span className={styles.placeholderPath} />
      </div>
      <strong>{activeBlock.title}</strong>
      <p>커뮤니티 이미지 준비 중입니다.</p>
    </div>
  )}
</section>

      <div className={styles.commonBox}>
              <div className={styles.notice}>
                ※ 커뮤니티 이미지는 소비자의 이해를 돕기 위한 것으로 실제와 차이가 날 수 있습니다
              </div>
              <div className={styles.notice}>
                ※ 커뮤니티내 조경 및 세부계획, 시설물의 위치는 실제 시공시 현장 상황에 따라 변경될 수 있습니다
              </div>
            </div>

      <Footer />
    </div>
  );
};

export default ComplexGuide3;
