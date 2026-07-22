import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

import styles from "./FloorPlan.module.scss";
import Header from "../../components/Header/Header";
import MenuBar from "../../components/MenuBar/MenuBar";
import Footer from "../../components/Footer/Footer";
import Bener from "../../components/Bener/Bener";
import FixIcon from "../../components/FixIcon/FixIcon";
import page1 from "../../assets/FloorPlan/FloorPlan2/unit02.jpg";

const menuContents = [
  { title: "1BL 평면도", url: "/FloorPlan/59A" },
  { title: "2-1BL 평면도", url: "/FloorPlan/59B" },
  { title: "2-2BL 평면도", url: "/FloorPlan/84A" },
  // { title: "75B", url: "/FloorPlan/84B" },
  // { title: "84A", url: "/FloorPlan/114A" },
  // { title: "84B", url: "/FloorPlan/114B" },
  // { title: "E-모델하우스", url: "/FloorPlan/Emodel" },
];

const FloorPlan2 = () => {
  const [isScroll, setIsScroll] = useState(false);
  const [isImage2Loaded, setIsImage2Loaded] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  useEffect(() => {
    const handleScroll = () => setIsScroll(window.scrollY > 0);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className={styles.container}>
      <Header isChanged={isScroll} />
      <FixIcon />

      <Bener title="평면도" />
      <MenuBar contents={menuContents} />

      <div className={styles.textBox}>
      <div>중앙공원 롯데캐슬 타입안내</div>
      <div>공간 구성과 수납계획, 실거주 생활 동선을 확인하세요.</div>
    </div>

      <img
        className={`${styles.image2} ${isImage2Loaded ? styles.showImage2 : ""}`}
        src={page1}
        alt="중앙공원 롯데캐슬 타입 평면도2"
        onLoad={() => setIsImage2Loaded(true)}
      />

      <div className={styles.commonBox2}>
        <div className={styles.notice}>
          ※ 상기 이미지는 소비자의 이해를 돕기 위한 것으로, 타입별 옵션 적용 항목과
          실제 시공 내용은 입주자 모집공고 및 계약서 기준에 따라 달라질 수 있습니다.
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default FloorPlan2;
