$(document).ready(function() {
  $('.item').each(function() {
    var $item = $(this);
    var originalText = $item.find('.item__name').text(); // 원래 텍스트를 자식 요소에서 가져옴

    $item.hover(
      function() {
        var hoverText = $item.attr('data-hover-text');
        $item.find('.item__name').text(hoverText).css({color: '#999'});
      },
      function() {
        // 원래 텍스트로 복구
        $item.find('.item__name').text(originalText).css({color: '#000'});
      }
    );
  });

  $('.yellow_arr1').animate({opacity: '1', left: '820px'}, 500);
  setTimeout(() => {
    $('.visual .text').animate({opacity: '1', left: '910px'}, 500);
    $('.visual .sub_text').animate({opacity: '1', top: '537px'}, 500);
  }, 500);

  let scrollTimeout;
  let isToTopClicked = false;

  $('#to-top').on('click', function (event) {
      event.preventDefault();
      event.stopPropagation();

      $('html, body').animate({ scrollTop: 0 }, 500);

      isToTopClicked = true;
      $('#to-top').stop(true).css({'pointer-events': 'none', 'opacity': '0'});
  });

  $(window).on('scroll', function() {
      var scrollTop = $(window).scrollTop();

      if (scrollTop > 100) {
          $('#to-top').css({'pointer-events': 'auto'}).stop(true).animate({opacity: '1'}, 500);
          isToTopClicked = false;
      } else {
          $('#to-top').stop(true).animate({opacity: '0'}, 500);
      }

      if (scrollTimeout) {
          clearTimeout(scrollTimeout);
      }

      scrollTimeout = setTimeout(function() {
          console.log(scrollTop);
      }, 200);

      if (scrollTop >= 400) {
          $('.notice .text').animate({opacity: '1', top: '255px'}, 500);
      }
      if (scrollTop >= 500) {
          $('.notice .icon_box').animate({opacity: '1'}, 500);
          $('.notice .icon_box p').animate({opacity: '1', top: '0px'}, 500);
      }
      if (scrollTop >= 600) {
          $('.notice .mark3').animate({opacity: '1', left: '60px'}, 500);
          setTimeout(() => {
              $('.notice .text2').animate({opacity: '1', bottom: '47px'}, 500);
          }, 500);
      }
      if (scrollTop >= 1300) {
          $('.mark4').addClass('objScale');
          $('.rewards .title').animate({opacity: '1', left: '473px'}, 1000);
          $('.rewards .text').animate({opacity: '1', left: '830px'}, 1000);
      }
      if (scrollTop >= 2000) {
          $('.mark5').addClass('objScale');
          $('.season .title').animate({opacity: '1', left: '54px'}, 1000);
          $('.season .text').animate({opacity: '1', left: '411px'}, 1000);
      }
      if (scrollTop >= 2720) {
          $('.coffee .title').animate({opacity: '1', left: '473px'}, 1000);
          $('.coffee .text').animate({opacity: '1', left: '828px'}, 1000);
      }
  });


});