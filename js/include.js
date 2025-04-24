document.addEventListener('DOMContentLoaded', function() {
  // 헤더 불러오기
  fetch('header.html')
    .then(res => res.text())
    .then(data => {
      document.getElementById('header').innerHTML = data;
      // 메뉴 토글 기능 연결 (헤더가 로드된 후에 실행)
      const toggleBtn = document.querySelector('.menu-toggle');
      const navList = document.querySelector('#navbar ul');
      if (toggleBtn && navList) {
        toggleBtn.addEventListener('click', () => {
          navList.classList.toggle('active');
        });
      }
    });

  // 푸터 불러오기
  fetch('footer.html')
    .then(res => res.text())
    .then(data => {
      document.getElementById('footer').innerHTML = data;
    });
});
