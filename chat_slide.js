$(document).ready(function() {
  let $chatSlidebox = $(".chat-slidebox");
  let $chatItem = $(".chat-item");

  // 슬라이드 박스 너비
  let chatItemWidth = 650;
  // 슬라이드 이미지 인덱스 번호
  let chatItemIdx = 0;
  // 총 슬라이드 이미지 수
  let chatCurrentIdx = $chatItem.length;
  console.log("chatCurrentIdx : " + chatCurrentIdx);

  checkEnd4();

  $("#chat-right").on("click", function() {
    console.log("다음클릭");
    chatItemIdx++;
    console.log("chatItemIdx : " + chatItemIdx);
    slideChat();
    checkEnd4();
  });

  // 이전으로 넘어가는 것 이벤트 주기
  $("#chat-left").on("click", function() {
    console.log("이전클릭");
    chatItemIdx--;
    console.log("chatItemIdx : " + chatItemIdx);
    slideChat();
    checkEnd4();
  });

  function slideChat() {
    let newPosition = -1 * chatItemIdx * chatItemWidth;
    $chatSlidebox.css("transform", "translateX(" + newPosition + "px)");
    $chatSlidebox.css("transition", "transform 0.5s ease");
  }

  function checkEnd4() {
    if (chatItemIdx <= 0) {
      $("#chat-left").css("display", "none");
    } else {
      $("#chat-left").css("display", "block");
    }

    if (chatItemIdx >= chatCurrentIdx - 1) {
      $("#chat-right").css("display", "none");
    } else {
      $("#chat-right").css("display", "block");
    }
  }
});
