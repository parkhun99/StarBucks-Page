const badgeEl = document.querySelector('header .badges');
const toTopEl = document.querySelector('#to-top');

window.addEventListener('scroll', _.throttle(function() {
  console.log(window.scrollY);
  if (window.scrollY > 500) {
    //gsap.to(요소, 지속시간, 옵션)
    //사이드 광고 숨기기
    gsap.to(badgeEl, .6, {
      opacity: 0, //시각적으로 보이지 않도록 
      display: 'none' //시각 뿐만 아니라 전부 사라지도록 
    });
    //상단으로 올라가는 아이콘 보이기
    gsap.to(toTopEl, .2, {
      x: 0, //x축으로 0px 이동 옵션
    });
  } else {
    //사이드 광고 보이기
    gsap.to(badgeEl, .6, {
      opacity: 1,
      display: 'block'
    });
    //상단으로 올라가는 아이콘 숨기기
    gsap.to(toTopEl, .2, {
      x: 100, //x축으로 100px 이동 옵션
    });
  }
}, 300))

toTopEl.addEventListener('click', function () { //클릭하면 익명의 함수인 function을 실행
  gsap.to(window, .7, {
    scrollTo: 0 //화면의 지점을 0px 부분으로 옮기는 옵션 -> ScrollToPlugin의 코드를 등록해야지만 사용 가능(index.html에 등록)
  });
});


const fadeEls = document.querySelectorAll('.visual .fade-in');
fadeEls.forEach(function (fadeEl, index) {
  gsap.to(fadeEl, 1, {
    delay: (index + 1) * .7, //0.7초후 에니메이션 동작하도록 기능 구현
    opacity: 1,
  });
});

//new Swiper(선택자, 옵션)
new Swiper('.notice-line .swiper-container', {
  direction: 'vertical',
  autoplay: true, //자동재생
  loop: true //반복재생
});

new Swiper('.promotion .swiper-container', {
  slidesPerView: 3, // 한 번에 보여줄 슬라이드 개수
  spaceBetween: 10, // 슬라이드 사이 여백
  centeredSlides: true, // 1번 슬라이드가 가운데 보이기
  loop: true,
  // autoplay: {
  //   delay: 5000, //5s에 한번 씩 자동재생
  // },
  pagination: {
    el: '.promotion .swiper-pagination', //페이지 번호 요소 선택자
    clickable: true, //사용자의 페이지 번호 요소 제어 여부
  },
  navigation: {
    prevEl: '.promotion .swiper-prev',
    nextEl: '.promotion .swiper-next'
  }
});
new Swiper('.awards .swiper-container', {
  autoplay: true,
  loop: true,
  spaceBetween: 30,
  slidesPerView: 5,
  navigation: {
    prevEl: '.awards .swiper-prev',
    nextEl: '.awards .swiper-next',
  }
});

const promotionEl = document.querySelector('.promotion');
const promotionToggleBtn = document.querySelector('.toggle-promotion');
let isHidePromotion = false;
promotionToggleBtn.addEventListener('click', function () {
  isHidePromotion = !isHidePromotion
  if(isHidePromotion) {
    promotionEl.classList.add('hide');
  } else {
    promotionEl.classList.remove('hide');
  }
});
// 범위 랜덤 함수(소수점 2자리까지)
function random(min, max) {
  // `.toFixed()`를 통해 반환된 '문자 데이터'를,
  // `parseFloat()`을 통해 소수점을 가지는 '숫자 데이터'로 변환
  return parseFloat((Math.random() * (max - min) + min).toFixed(2))
}
function floatingObject(selector, delay, size) {
  gsap.to(selector, random(1.5, 2.5), {
    y: size, //y축 방향으로 내려가는 애니메이션
    repeat: -1, //반복에 -1 값을 주면 무한 반복이라는 기능을 가지고 있음
    yoyo: true, //한 번 재생된 애니메이션을 다시 뒤로 재생하는 기능
    ease: Power1.easeInOut,
    delay: random(0, delay), //최소값 0초에서 최대값인 1, 0.5, 1.5초 사이에 랜덤값 발생
  });
}
floatingObject('.floating1', 1, 15);
floatingObject('.floating2', .5, 15);
floatingObject('.floating3', 1.5, 20);

/**
 * 요소가 화면에 보여짐 여부에 따른 요소 관리
 */
// 관리할 요소들 검색!
const spyEls = document.querySelectorAll('section.scroll-spy')
// 요소들 반복 처리!
spyEls.forEach(function (spyEl) {
  new ScrollMagic
    .Scene({ // 감시할 장면(Scene)을 추가
      triggerElement: spyEl, // 보여짐 여부를 감시할 요소를 지정
      triggerHook: .8 // 화면의 80% 지점에서 보여짐 여부 감시
    })
    .setClassToggle(spyEl, 'show') // 요소가 화면에 보이면 show 클래스 추가
    .addTo(new ScrollMagic.Controller()) // 컨트롤러에 장면을 할당(필수!)
})
