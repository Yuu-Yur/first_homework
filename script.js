document.getElementById('login-form').addEventListener('submit', function(event) {
  event.preventDefault(); // 기본 폼 제출 방지

  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;

  // 이메일 유효성 검사
  if (!validateEmail(username)) {
      alert("유효한 이메일을 입력해 주세요.");
      return;
  }

  // 로그인 처리 로직 (여기서 실제 서버 검증을 진행할 수 있음)
  console.log("이메일:", username);
  console.log("비밀번호:", password);

  // 로그인 성공 시 main_page.html로 이동
  window.location.href = "main_page.html"; // 페이지 이동
});

function validateEmail(email) {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // 이메일 형식 정규 표현식
  return re.test(String(email).toLowerCase());
}
