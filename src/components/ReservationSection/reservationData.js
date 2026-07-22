const reservationData = {
  eyebrow: "RESERVATION",
  title: "모델하우스 방문예약",

  description:
    "중앙공원 롯데캐슬 시그니처 방문예약을 남겨주시면 담당 상담원이 순차적으로 연락드려 모델하우스 위치와 방문 가능 시간, 블록별 관람 및 상담 절차를 안내해 드립니다.",

  notice:
    "방문 전 관심 블록과 주택형, 상담 희망 내용을 남겨주시면 1BL·2-1BL·2-2BL 평면 구성과 분양가, 잔여세대, 공급 방식 및 현재 적용되는 계약조건을 더욱 정확하게 안내해 드릴 수 있습니다.",

  formAction: "https://formspree.io/f/mrenlnpj",

  points: [
    {
      id: "address",
      label: "ADDRESS SMS",
      title: "모델하우스 주소 안내",
      text:
        "예약 등록 후 상담 절차에 따라 중앙공원 롯데캐슬 모델하우스 위치와 방문 가능 시간, 찾아오시는 길을 안내해 드립니다.",
    },
    {
      id: "unit",
      label: "UNIT CHECK",
      title: "블록별 평면 및 타입 상담",
      text:
        "1BL·2-1BL·2-2BL에 구성된 전용 84㎡부터 233㎡까지 블록별 평면과 타입, 공간 구성을 비교해 안내해 드립니다.",
    },
    {
      id: "sales",
      label: "SALES GUIDE",
      title: "분양가 및 잔여세대 안내",
      text:
        "관심 블록의 잔여세대와 동·호수, 분양가, 공급 방식 및 현재 적용 가능한 계약조건을 상담해 드립니다.",
    },
  ],

  fields: [
    {
      id: "name",
      name: "name",
      label: "고객명",
      type: "text",
      placeholder: "고객명을 입력해 주세요",
      required: true,
      autoComplete: "name",
    },
    {
      id: "phone",
      name: "phone",
      label: "연락처",
      type: "tel",
      placeholder: "010-0000-0000",
      required: true,
      inputMode: "tel",
      autoComplete: "tel",
      pattern: "^01[0-9][-\\s]?[0-9]{3,4}[-\\s]?[0-9]{4}$",
      title: "예: 01012345678 또는 010-1234-5678",
    },
  ],

  messageField: {
    id: "message",
    name: "message",
    label: "문의 내용",
    placeholder:
      "관심 블록과 주택형, 방문 희망일 및 상담받고 싶은 내용을 남겨주세요",
    rows: 5,
  },

  submitLabel: "방문예약 등록",
};

export default reservationData;