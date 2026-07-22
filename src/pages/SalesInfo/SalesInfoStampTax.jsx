import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

import styles from "./SalesInfo.module.scss";
import Header from "../../components/Header/Header";
import MenuBar from "../../components/MenuBar/MenuBar";
import Footer from "../../components/Footer/Footer";
import Bener from "../../components/Bener/Bener";
import FixIcon from "../../components/FixIcon/FixIcon";

import page1 from "../../assets/SalesInfo/SalesInfoStampTax/page1.jpg";

const SalesInfoStampTax = () => {
  const menuContents = [
    {
      title: "공급안내",
      url: "/BusinessGuide/documents",
    },
    {
      title: "모집공고안내",
      url: "/SalesInfo/announcement",
    },
    {
      title: "인지세 납부안내",
      url: "/SalesInfo/StampTax",
    },
  ];

  const [isScroll, setIsScroll] = useState(false);

  // 이미지 로딩 상태
  const [isImage2Loaded, setIsImage2Loaded] = useState(false);

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

  return (
    <div className={styles.container}>
      <Header isChanged={isScroll} />
      <FixIcon />

      <Bener title="인지세 납부 안내" />

      <MenuBar contents={menuContents} />

      <div className={styles.textBox}>
        <div>공급계약에 필요한 인지세 납부 기준을 확인하세요.</div>
        <div>중앙공원 롯데캐슬 인지세 납부 안내</div>
      </div>

      {/* 이미지 로딩 후 애니메이션 적용 */}
      <img
        className={`${styles.image2} ${
          isImage2Loaded ? styles.showImage2 : ""
        }`}
        src={page1}
        alt="중앙공원 롯데캐슬 인지세 납부 안내"
        onLoad={() => setIsImage2Loaded(true)}
      />

      <div className={styles.commonBox2}>
        <div className={styles.notice}>
          ※ 상기 이미지는 고객의 이해를 돕기 위한 안내 자료입니다.
          계약 전 인지세 납부금액과 납부방법을 반드시 다시 확인하시기
          바랍니다.
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default SalesInfoStampTax;