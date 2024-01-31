// 스와이퍼 초기화
const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
      clickable: true, //버튼 클릭 여부
    },
    slidesPerView:"auto",// =>css에 지정한 슬라이더의 크기를 사용함
    autoplay:{
        //=>자동재생 명령
        delete:700,
        disableOnInteraction:true
    },
  });
  
// 숨김메뉴 토글
const menuButs = document.querySelectorAll(".menuBut");
const hiddenMenuBg = document.querySelector(".hiddenMenuBg")
menuButs.forEach(menuBut => {
    menuBut.addEventListener('click',() => {
        hiddenMenuBg.style.display = (hiddenMenuBg.style.display === "none") ? "block" : "none";
    })
});

// 검색창 토글
const searchModal = document.querySelector('.searchModal');

function searchToggle() {
    searchModal.style.display = (searchModal.style.display === "none") ? "block" : "none";
}

// 배너 타이틀 감지되면 오른쪽에서 투명도와 함께 나타나는 애니메이션
const bannerTitle = document.querySelector(".bannerTitle");

const bannerObserver = new IntersectionObserver(
    (entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add("bannerVisible");
            }else {
                entry.target.classList.remove("bannerVisible");
            }
        });
    }
);

bannerObserver.observe(bannerTitle);