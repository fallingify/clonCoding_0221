$(document).ready(function() {
  let $storyList = $(".story-list");
  let $storyItem = $(".story-item");

  // 슬라이드 박스 너비
  let storyItemWidth = 350;
  // 슬라이드 이미지 인덱스 번호
  let storycurrentIdx = 0;
  // 총 슬라이드 이미지 수
  let storyCnt = $storyItem.length;
  console.log("storyCnt : " + storyCnt);

  checkEnd3();

  $("#story-right").on("click", function () {
    console.log("다음클릭");
    storycurrentIdx++;
    console.log("storycurrentIdx : " + storycurrentIdx);
    $storyList.css("left", -(storycurrentIdx * storyItemWidth));
    $storyList.css("transition", "0.5s ease");
    checkEnd3();
  });

  $("#story-left").on("click", function () {
    console.log("이전클릭");
    storycurrentIdx--;
    console.log("storycurrentIdx : " + storycurrentIdx);
    $storyList.css("left", -(storycurrentIdx * storyItemWidth));
    $storyList.css("transition", "0.5s ease");
    checkEnd3();
  });

  function checkEnd3() {
    if (storycurrentIdx <= 0) {
      $("#story-left").css("display", "none");
    } else {
      $("#story-left").css("display", "block");
    }

    if (storycurrentIdx > 2) {
      $("#story-right").css("display", "none");
    } else {
      $("#story-right").css("display", "block");
    }
  }
});
