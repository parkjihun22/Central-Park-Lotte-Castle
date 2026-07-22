import unit01 from "../../assets/UnitplanBox/unit01.jpg";
import unit02 from "../../assets/UnitplanBox/unit02.jpg";
import unit03 from "../../assets/UnitplanBox/unit03.jpg";
import unit04 from "../../assets/UnitplanBox/unit04.jpg";
import unit05 from "../../assets/FloorPlan/FloorPlan5/unit05.jpg";
import unit06 from "../../assets/FloorPlan/FloorPlan6/unit06.jpg";

export const unitPlanData = {
  eyebrow: "UNIT PLAN",
  title: "중앙공원 롯데캐슬 타입안내",

  description:
    "중앙공원 롯데캐슬은 전용 84㎡ 단일 주택형으로 구성됩니다. 84㎡A 265세대와 84㎡B 88세대의 타입별 평면, 공간 구성과 생활 동선을 비교해 보세요.",

  plans: [
    {
      id: "84A",
      type: "84A",
      name: "84㎡A",
      summary:
        "총 265세대로 구성되는 84㎡A 타입의 평면과 공간 활용, 생활 동선을 확인해 보세요.",
      image: unit01,
      alt: "중앙공원 롯데캐슬 84㎡A 타입 평면도",
      link: "/FloorPlan/59A",
    },
    {
      id: "84B",
      type: "84B",
      name: "84㎡B",
      summary:
        "총 88세대로 구성되는 84㎡B 타입의 평면과 수납공간, 주거 동선을 확인해 보세요.",
      image: unit02,
      alt: "중앙공원 롯데캐슬 84㎡B 타입 평면도",
      link: "/FloorPlan/59B",
    },
  ],
};