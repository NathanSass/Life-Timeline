(function (window, undefined) {
  'use strict';
  var imagePath = 'app/images/';
  var templateData = [
    { age: '0.0011',
      desc: 'I was born. The world has not been the same since.'
    },
    { age: '2.4543',
      img: [imagePath+'bathtub.jpg'],
      desc: 'Bathing at my cabin in northern Canada.'
    },
    { age: '15.2344',
      desc: 'I took my first whitewater kayaking lesson. I have been in love ever since'
    },
    { age: '16.4345',
      img: [imagePath + 'nathan_ruby.jpg'],
      desc: 'Spent most weekends in the mountains fishing with my dog Ruby.'
    },
    {
      age: '18.5839',
      img: [imagePath+'mexico_with_mom.jpg'],
      desc: 'Wrestling with my mom during a multiday kayaking trip in Mexico.'
    },
    {
      age: '18.7432',
      img: [imagePath+'ice_breaker_slalom.jpg'],
      desc: 'Qualifying for the Olympic Trials in North Carolina. I did not end up racing at the Olympic Trials because of a car accident.'
    },
    { age: '21.1455',
      img: [imagePath+'sketch_fly.jpg'],
      desc: 'First watercolor.'
    },
    { age: '22.0000',
      img: [imagePath+'falls_race.jpg'],
      desc: 'Second place at Falls Race on the Potomac River'

    },
    { age: '22.0542',
      img: [imagePath+ 'otis_sup.jpg'],
      desc: 'Went stand up paddleboarding with my puppy and took this cute photo.'
    },
    { age: '23.4455',
      img: [imagePath+'pond1.jpg', imagePath+'pond2.jpg'],
      desc: 'While studying abroad in the UK I designed this garden as place for meditation.'
    },
    { age: '23.9832',
      img: [imagePath+'nsv1.jpg'],
      desc: 'I made a website to showcase my architecture portfolio. I found the process exhilirating and I was instantly hooked.'
    },
    { age: '24.3545',
      desc: 'I quit my job as an architect to travel and pursue web development'
    },
    { age: '24.4532',
      img: [imagePath+'truchas.jpg'],
      desc: 'Alseseca River, Mexico. - After days of rain, the sun broke through the jungle canopy lighting up this beautiful waterfall. Making for a memorable descent.'
    },
    { age: '24.6657',
      img: [imagePath+'beach_log.jpg'],
      desc: 'Moved to California'
    },
    { age: '25.0002',
      desc: 'Began my first job as software developer at JPMorgan Chase'
    },
    { age: '25.5233',
      img:[imagePath+'kirkwood.jpg'],
      desc: 'Rode an incredible line down from the top of Kirkwood mountain during a storm.'
    },
    {
      age: '26.1328',
      desc: 'Woke up on a Saturday and wanted to find a fun activity in the best possible weather. So I built a location / weather aggregator to do it. Click <a href="http://nathansass.github.io/adventurePlanner/#/landing">here</a> to check it out'
    },
    { age: '26.2499',
      img:[imagePath+'strawberry_sunrise.jpg'],
      desc: 'Watched the sunrise over a reservoir in the Stanislaus National forest and made some pretty amazing life plans - stay tuned!'
    },
    { age: '26.3193',
      img:[imagePath+'robert_spout.jpg'],
      desc: 'Experimented with triangles.'
    }
  ];

  var secondPhrases = [
    'Ran a marathon at 15. Never ran again.',
    'Got lost in the jungle and spent the night alone.',
    'About to go to Indonesia.',
    'Studied Architecture. Quit. Moved to the west coast. Dancing and kayaking.'
  ];
  
  var ractive = new Ractive({
    el: 'timeline',
    template: '#template',
    data: { timelineItem: templateData},
  });

  var DOM = {
    $timelineItem: null,
    blogMode: false
  };
  
  function focusTimelineItem(e) {
    e.preventDefault();
    DOM.$timelineItem = $(e.target).closest('li');
    DOM.$timelineItem.toggleClass('focus');
    scrollToTop(DOM.$timelineItem);
    DOM.blogMode = false;
  }

  function scrollToTop(el){
    var distTop = el.offset().top;
    $('body').animate({
      scrollTop: distTop
    }, 500);
  }

  function openAllPosts(e){
    var $timelineItems = $('.timeline-item');
    $timelineItems.removeClass('focus');
    $timelineItems.removeClass('image-focus');
    scrollToTop($('.timeline-blurb'));
    if (DOM.blogMode) {
      DOM.blogMode = false;
    }else {
      $('.timeline-item').addClass('focus');
      DOM.blogMode = true;
    }
  }

  function focusImage(e) {
    DOM.$timelineItem = $(e.target).closest('li');
    if (DOM.$timelineItem.hasClass('image-focus')) {
      DOM.$timelineItem.removeClass('image-focus');
    } else {
      $('.timeline-item').removeClass('image-focus');
      DOM.$timelineItem.addClass('image-focus');
    }
  }

  function changeTheme(e) {
    $('body').toggleClass('dark');
  }

  function changeSecondPhrase() {
    var randomIndex = Math.floor(Math.random() * (secondPhrases.length + 1));
    $('.js-second-phrase').html(secondPhrases[randomIndex]);
  }

  function coolButtonClicked(e) {
    changeTheme();
    changeSecondPhrase();
  }

  function entryAnimation() {
    if( !/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
      $('body').addClass('animate');
      setTimeout(function(){
        $('body').removeClass('entry-animation');
      }, 1000);
    } else {
      $('body').removeClass('entry-animation');
    }
  }

  $('#timeline').on('click', '.js-age', focusTimelineItem.bind(this));
  $('.js-blog-mode').on('click', openAllPosts.bind(this));
  $('.timeline-image').on('click', focusImage.bind(this));
  $('.js-first-breaker-link').on('click', coolButtonClicked.bind(this));

  entryAnimation();


  window.Homesite = window.Homesite || {
    components: {},
    ractives: {}
  };
})(window);
