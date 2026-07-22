import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

import styles from "./LocationEnvironment.module.scss";
import Header from "../../components/Header/Header";
import MenuBar from "../../components/MenuBar/MenuBar";
import Footer from "../../components/Footer/Footer";
import Bener from "../../components/Bener/Bener";
import FixIcon from "../../components/FixIcon/FixIcon";
import page1 from "../../assets/LocationEnvironment/LocationEnvironment2/page1.jpg";

const locationMenu = [
  { title: "입지안내", url: "/LocationEnvironment/intro" },
  { title: "프리미엄", url: "/LocationEnvironment/primium" },
];

const LocationEnvironment2 = () => {
  const [isScroll, setIsScroll] = useState(false);
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

      <Bener title="프리미엄" />
      <MenuBar contents={locationMenu} />

      <div className={styles.textBox}>
  <div>광주광역시 서구 화정동·금호동·풍암동 일원에서</div>
  <div>중앙공원 롯데캐슬 시그니처의 프리미엄을 누리세요.</div>
  <div>
    3개 블록, 총 39개동 2,772세대 규모로 조성되는 롯데캐슬 브랜드
    주거 가치를 제안합니다.
  </div>
</div>

<figure className={styles.locationMapFrame}>
  <img
    src={page1}
    className={styles.image3}
    alt="중앙공원 롯데캐슬 프리미엄 주거 가치"
  />
      </figure>

      <Footer />
    </div>
  );
};

export default LocationEnvironment2;
