// script.js

document.addEventListener("DOMContentLoaded", function () {
    const usernameInput = document.getElementById("username");
    const rememberMeCheckbox = document.getElementById("rememberMe");
    const autoLoginCheckbox = document.getElementById("autoLogin");
  
    // 페이지 로딩 시 저장된 정보 불러오기
    if (localStorage.getItem("rememberMe") === "true") {
      usernameInput.value = localStorage.getItem("username");
      rememberMeCheckbox.checked = true;
    }
  
    if (localStorage.getItem("autoLogin") === "true") {
      autoLoginCheckbox.checked = true;
      // 자동 로그인이 체크되어 있으면 로그인 절차 생략 (여기서는 경고창으로 처리)
      alert("Auto login is enabled. Logging in...");
    }
  
    document.getElementById("loginForm").addEventListener("submit", function (event) {
      event.preventDefault();
  
      const username = usernameInput.value;
      const rememberMe = rememberMeCheckbox.checked;
      const autoLogin = autoLoginCheckbox.checked;
  
      if (rememberMe) {
        // Remember me가 체크되었으면 사용자 이름을 저장
        localStorage.setItem("username", username);
        localStorage.setItem("rememberMe", true);
      } else {
        // 체크 해제 시 저장된 정보 삭제
        localStorage.removeItem("username");
        localStorage.removeItem("rememberMe");
      }
  
      if (autoLogin) {
        // Auto login이 체크되었으면 자동 로그인 설정 저장
        localStorage.setItem("autoLogin", true);
      } else {
        localStorage.removeItem("autoLogin");
      }
  
      // 로그인 성공 시 처리 (실제 로그인 구현은 백엔드가 필요함)
      alert("Logged in successfully!");
    });
  });
  