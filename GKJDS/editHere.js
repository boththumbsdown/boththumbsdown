// 1. name: 웹 페이지에 표시될 폰트의 이름입니다. 이 이름은 사용자 인터페이스에 직접 보여지며,
//    사용자가 폰트를 선택할 때 표시되는 이름입니다.
// 2. url: 폰트 파일이 저장된 위치의 URL입니다. 이 URL은 웹 페이지에서 해당 폰트를
//    불러오기 위해 사용됩니다. 폰트 파일은 서버의 해당 경로에 저장되어 있어야 합니다.
//    기존에 저장된 위치는 fonts woff가 저장되어 있습니다.
// 3. textDirectionSelect.value: 화면 로드시 세로쓰기를 먼저 마주하고싶을 때 '1' 작성
// 4. text: 미리보기에 보여질 본문입니다.

const fonts = [{
    name: '노토산스 Regular',
    url: 'fonts/NotoSans-Regular.woff'
  }, {
    name: '노토산스 Medium',
    url: 'fonts/NotoSans-Medium.woff'
  }, {
    name: '노토산스 Bold',
    url: 'fonts/NotoSans-Bold.woff'
  }, {
    name: '농체',
    url: 'fonts/nong-Regular.woff2'
  }, {
    name: 'Helvetica 한글',
    url: 'fonts/Helvetica_Hangul.woff2'
  }];

window.onload = function () {
  insertText();
  // 가로쓰기 0
  // textDirectionSelect.value = "1";
  changetextDirection();
  convertText(contentEditableDiv);
};

function insertText() {
  const text = `글자 깎는 장인이 되기 싫었던 박진후와 이경태는 서체를 잘 그리는 디자이너 대신 서체를 매체로 작업하는 디자이너가 되기로 결심한다. 두 사람은 한 벌의 서체를 완성함에 있어, 서체 각 요소에 할당된 공간에 잘 그려진 획을 대신할 ‘무언가’를 배치하는 방식을 채택하였다. 본 전시에서는 서체를 매체로 하는 작업을 소개하고, 웹 또는 문자 입력 소프트웨어를 통해 관람객들로 하여금 직접 타이핑하며 체험할 수 있도록 한다.`;
  document.getElementById("editableDiv").innerHTML = text;
}
