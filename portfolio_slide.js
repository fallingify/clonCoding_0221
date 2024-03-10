let $portfolioSlidetrack = $("#portfolio-slide-track");
let $slideItem = $(".slide-item");

//슬라이드 박스 너비
let slideitemWidth = 241;
//슬라이드 이미지 인덱스 번호
let portfolioCurrentIdx = 0;
//총 슬라이드 이미지 수
let portfolioSlideCnt = $slideItem.length;
console.log("portfolioSlideCnt : " + portfolioSlideCnt);

checkEnd();

$(".porfolio-right").on("click", function () {
    console.log("다음클릭");
    portfolioCurrentIdx++;
    console.log("portfolioCurrentIdx : " + portfolioCurrentIdx);
    $portfolioSlidetrack.css("left", -(portfolioCurrentIdx * slideitemWidth));
    $portfolioSlidetrack.css("transition", "0.5s ease");
    checkEnd();
});

//이전으로 넘어가는 것 이벤트 주기
$(".portfolio-left").on("click", function () {
  console.log("이전클릭");
  portfolioCurrentIdx--;
  console.log("currentIdx : " + portfolioCurrentIdx);
  $portfolioSlidetrack.css("left", -(portfolioCurrentIdx * slideitemWidth));
  $portfolioSlidetrack.css("transition", "0.5s ease");
  checkEnd();
});

//처음 이미지와 마지막 이미지는 화살표 감추기
function checkEnd() {
    if (portfolioCurrentIdx <= 0) {
        $(".portfolio-left").css("display", "none");
    } else {
        $(".portfolio-left").css("display", "block");
    }

    if (portfolioCurrentIdx > 3) {
        $(".porfolio-right").css("display", "none");
    } else {
        $(".porfolio-right").css("display", "block");
    }
}
