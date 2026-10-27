import React, { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import { useCookies } from "react-cookie";
import { FaAngleRight } from "react-icons/fa6";

import styles from "./Popup.module.scss";
import page1 from "../../assets/Popup/condition-benefits-20261027.jpg";

const COOKIE_NAME = "Popup_Cookie_PC_20261027";

const Popup = ({
  openInterestPopup = () => {},
  suspended = false,
}) => {
  const [isClick, setIsClick] = useState(false);

  const [cookies, setCookie] = useCookies([COOKIE_NAME]);
  const isPopupShown = Boolean(cookies[COOKIE_NAME]);

  // 팝업 표시 속도: 500 = 0.5초
  useEffect(() => {
    if (isPopupShown) return;

    const timer = setTimeout(() => {
      setIsClick(true);
    }, 500);

    return () => clearTimeout(timer);
  }, [isPopupShown]);

  useEffect(() => {
    if (!isClick || suspended || isPopupShown) return;

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        setIsClick(false);
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isClick, suspended, isPopupShown]);

  const handleTodayClose = () => {
    const expires = new Date();

    // 오늘 자정까지 숨김
    expires.setHours(24, 0, 0, 0);

    setCookie(COOKIE_NAME, true, {
      path: "/",
      expires,
      sameSite: "lax",
    });

    setIsClick(false);
  };

  const handleClose = () => {
    setIsClick(false);
  };

  const handleReservationClick = () => {
    setIsClick(false);
    openInterestPopup();
  };

  if (
    isPopupShown ||
    suspended ||
    typeof document === "undefined"
  ) {
    return null;
  }

  // body에 직접 표시해 부모 요소의 겹침·잘림 영향을 피합니다.
  return createPortal(
    <div
      className={styles.container}
      data-native-scroll-section="true"
    >
      {isClick ? (
        <section
          className={styles.popupBox}
          aria-label="중앙공원 롯데캐슬 조건변경 특별혜택"
        >
          <div className={styles.imgContainer}>
            <img
              className={styles.popupImg}
              src={page1}
              alt="중앙공원 롯데캐슬 조건변경 특별혜택. 적용 대상별 분양 및 10년 임대 혜택과 필수 납부 조건 안내."
            />
          </div>

          <button
            type="button"
            className={styles.visitReservationBtn}
            onClick={handleReservationClick}
          >
            특별혜택 상담 · 방문예약
            <FaAngleRight size={15} aria-hidden="true" />
          </button>

          <div className={styles.btnContainer}>
            <button
              type="button"
              onClick={handleTodayClose}
            >
              오늘 하루 보지 않기
            </button>

            <button
              type="button"
              onClick={handleClose}
            >
              닫기
              <span
                className={styles.closeIcon}
                aria-hidden="true"
              >
                ×
              </span>
            </button>
          </div>
        </section>
      ) : (
        <button
          type="button"
          className={styles.openPopupBtn}
          onClick={() => setIsClick(true)}
          aria-label="특별혜택 팝업 다시 열기"
        >
          <FaAngleRight size={18} aria-hidden="true" />
          <span>특별혜택</span>
        </button>
      )}
    </div>,
    document.body
  );
};

export default Popup;