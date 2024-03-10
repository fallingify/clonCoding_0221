let $popularService = $(".popular-service");
let $popularServiceItem = $(".popular-service-item");

//슬라이드 박스 너비
let popularWidth = 245;
//슬라이드 이미지 인덱스 번호
let popularcurrentIdx = 0;
//총 슬라이드 이미지 수
let popularCnt = $popularServiceItem.length;
console.log("popularCnt : " + popularCnt);


checkEnd1();

$(".next-slide").on("click", function () {
  console.log("다음클릭");
  popularcurrentIdx++;
  console.log("popularcurrentIdx : " + popularcurrentIdx);
  $popularService.css(".prev-slide", -(popularcurrentIdx * popularWidth));
  $popularService.css("transition", "0.5s ease");
  checkEnd1();
});

//이전으로 넘어가는 것 이벤트 주기
$(".prev-slide").on("click", function () {
  console.log("이전클릭");
  popularcurrentIdx--;
  console.log("popularcurrentIdx : " + popularcurrentIdx);
  $popularService.css(".prev-slide", -(popularcurrentIdx * popularWidth));
  $popularService.css("transition", "0.5s ease");
  checkEnd1();
});

function checkEnd1() {
  if (popularcurrentIdx < -1) {
      $(".prev-slide").css("display", "none");
  } else {
      $(".prev-slide").css("display", "block");
  }

  if (popularcurrentIdx > 1) {
      $(".next-slide").css("display", "none");
  } else {
      $(".next-slide").css("display", "block");
  }
}