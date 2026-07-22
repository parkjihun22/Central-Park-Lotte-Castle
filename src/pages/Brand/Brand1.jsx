import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

import styles from './Brand.module.scss';
import Header from "../../components/Header/Header";
import MenuBar from "../../components/MenuBar/MenuBar";
import Footer from "../../components/Footer/Footer";
import Bener from "../../components/Bener/Bener";
import FixIcon from "../../components/FixIcon/FixIcon";
import page1 from "../../assets/Brand/intro/page1.jpg";

const Brand1 = () => {
    const menuContents = [
      { title: "브랜드 소개", url: "/Brand/intro" },
    //   { title: "홍보 영상", url: "/Brand/video" }
    ];
    const [isScroll, setIsScroll] = useState(false);
    const [isTextVisible, setIsTextVisible] = useState(false); // 텍스트 애니메이션 상태
    const [isImageVisible, setIsImageVisible] = useState(false); // 이미지 애니메이션 상태
    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);

    useEffect(() => {
        const handleScroll = () => {
            setIsScroll(window.scrollY > 0);
            // 스크롤 시 이미지와 텍스트 애니메이션을 트리거
            if (window.scrollY > 200) {
                setIsImageVisible(true); // 이미지가 보이도록
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsTextVisible(true); // 메뉴 클릭 시 텍스트가 보이도록
        }, 500); // 딜레이를 두고 텍스트 애니메이션 시작

        return () => clearTimeout(timer);
    }, []);

    return (
        <div className={styles.container}>
<Header isChanged={isScroll} />
<FixIcon />

<Bener title="브랜드 소개" />
<MenuBar contents={menuContents} />
<div
  className={`${styles.textBox} ${isTextVisible ? styles.active : ""}`}
>
  <div>광주 중앙공원 1지구를 대표할 새로운 주거 중심</div>
  <div>
    중앙공원 롯데캐슬 시그니처, 롯데건설이 완성하는 프리미엄 주거 가치
  </div>
</div>

<img
  className={`${styles.image} ${isImageVisible ? styles.visible : ""}`}
  src={page1}
  alt="광주 중앙공원 롯데캐슬 시그니처 브랜드 소개와 중앙공원 1지구 주거 가치"
/>
            <Footer />
        </div>
    );
}

export default Brand1;
