$(function () {
  $(window).scrollTop(0);
  $(window).scroll(function () {
    let ot_height =  document.getElementById('ot').offsetTop;
    let con_height = document.getElementById('content').scrollTop + window.innerHeight + 100;
    if(ot_height > con_height){
      console.log("trumin");
      $(window).scrollTop(0);
    }
  });
  let musik_original = [
    {
      link: 'pMNnZIz6YYM',
      title: 'メイジ・オブ・ヴァイオレット'
    },
    {
      link: 'PxiiB40eTWY',
      title: 'アカシア・シンドローム'
    },
    {
      link: 'Y-pC9U_usX8',
      title: 'シャンデリア'
    },
    {
      link: '68KV7JnrvDo',
      title: 'Shiny Smily Story'
    },
    {
      link: 'rDSIUPkuM7U',
      title: 'Kirameki Rider [hololive 1st fes. "Nonstop Story"]'
    },
    {
      link: 't1yXDcuwzpY',
      title: '今宵はHalloween Night!'
    },
  ]
  let aside = $('aside');
  let content = $('#content');
  let home = $('.home');
  let nav = $('.nav');
  let toggler = $('#nav-toggler');
  // Smooth scroll function
  articles  = $('article')
  for(ind in articles){
    article = articles[ind];
    $('a[href^="#'+article.id+'"]').on('click', function (e) {
        e.preventDefault();

        var target = (this.hash).slice(1),
            $target = document.getElementById(target);
        console.log($target);
        console.log($('html, body'));
        $('#content').stop().animate({
            'scrollTop': $target.offsetTop - 80
        }, 400, 'swing', function () {
            // window.location.hash = target;
        });
    });
  }
  $(content).scroll(function () {
    if (window.innerWidth > 780){
      aside.toggleClass('show', $(this).scrollTop() > nav.outerHeight() + home.outerHeight());
      if($(this).scrollTop() > nav.outerHeight() + 20){
        aside.addClass('show');
        content.addClass('padding-left');
        // nav.addClass('fixed');
      }else{
        content.removeClass('padding-left');
        // nav.removeClass('fixed');
        aside.removeClass('show');
      }
    }
    let ot_height =  document.getElementById('ot').offsetTop;
    let con_height = document.getElementById('content').scrollTop + window.innerHeight + 100;
    if(ot_height > con_height){
      $(window).scrollTop(0);
    }else{
      $(window).stop().animate({
          'scrollTop': 60
      }, 200, 'swing', function () {
      });
    }
  });
  
  // SWIPE 
  document.addEventListener('touchstart', handleTouchStart, false);        
  document.addEventListener('touchmove', handleTouchMove, false);

  var xDown = null;                                                        
  var yDown = null;

  function getTouches(evt) {
    return evt.touches ||             // browser API
          evt.originalEvent.touches; // jQuery
  }                                                     
                                                                          
  function handleTouchStart(evt) {
      const firstTouch = getTouches(evt)[0];                                      
      xDown = firstTouch.clientX;                                      
      yDown = firstTouch.clientY;                                      
  };                                                
                                                                          
  function handleTouchMove(evt) {
      if ( ! xDown || ! yDown ) {
          return;
      }

      var xUp = evt.touches[0].clientX;                                    
      var yUp = evt.touches[0].clientY;

      var xDiff = xDown - xUp;
      var yDiff = yDown - yUp;
                                                                          
      if ( Math.abs( xDiff ) > Math.abs( yDiff ) ) {/*most significant*/
          if ( xDiff > 0 ) {
            $('aside').addClass('swipe-left')
            $('.float-button').addClass('float-button-swipe')
          } else {
            $('aside').removeClass('swipe-left')
            $('.float-button').removeClass('float-button-swipe')
          }                       
      } else {
          if ( yDiff > 0 ) {
              /* down swipe */ 
          } else { 
              /* up swipe */
          }                                                                 
      }
      /* reset values */
      xDown = null;
      yDown = null;                                             
  };
  
  toggler.on('click', function(){
    $('#nav-menu-mobile').addClass('nav-menu-mobile-show');
  });
  $('#nav-toggler-close').on('click', function(){
    $('#nav-menu-mobile').removeClass('nav-menu-mobile-show');
  });
  $('#nav-menu-mobile a').on('click', function(){
    $('#nav-menu-mobile').removeClass('nav-menu-mobile-show');
  });
  for (let index = 1; index <= 16; index++) {
    $('.galeri-wrapper').append(`<div class="img-wrapper"><img loading="lazy" src="assets/img/ilust/ilust (${index}).jpg"></div>`);
  }
  for (let index = 1; index <= 4; index++) {
    $('.galeri-wrapper').append(`<div class="img-wrapper"><img loading="lazy" src="assets/img/concept-ilust/${index}.jpg"></div>`);
  }
  for (let index = 1; index <= 5; index++) {
    $('.galeri-wrapper').append(`<div class="img-wrapper"><img loading="lazy" src="assets/img/collabs/${index}.jpg"></div>`);
  }
  musik_original.forEach(musik => {
    $('.musik-wrapper').append(`
    <div class="musik">
      <div class="musik-card">
        <iframe loading="lazy" src="https://www.youtube.com/embed/${musik.link}?modestbranding=1&autohide=1&showinfo=0&controls=0" frameborder="0"></iframe>
      </div>
      <p>${musik.title}</p>
    </div>
    `);
  });
});
function potraitOnClick(image){
  $('#potrait').attr('src', `assets/img/${image}`);
  $('#potrait').addClass('potrait-in');
  setTimeout(() => {
    $('#potrait').removeClass('potrait-in');
  }, 1000);

}