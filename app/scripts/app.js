(function (window, undefined) {
  'use strict';
  var imagePath = 'app/images/';
  var templateData = [
    { age: '0.0000',
      desc: 'I was born. The world has not been the same since.'
    },
    { age: '2.4543',
      img: [imagePath+'bathtub.jpg'],
      desc: 'Bathing at my cabin in northern canada'
    },
    { age: '5.3452'
    },
    { age: '9.4566'
    },
    { age: '12.7645'
    },
    { age: '13.3453'
    },
    { age: '14.6456'
    },
    { age: '15.2344',
      desc: 'I took my first whitewater kayaking lesson. I have been in love ever since'
    },
    { age: '21.1455',
      img: [imagePath+'sketch_fly.jpg'],
      desc: 'First watercolor.'
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
    { age: '25.7892'
    }
  ];
  
  var ractive = new Ractive({
    el: 'timeline',
    template: '#template',
    data: { timelineItem: templateData}
  });

  var DOM = {
    $timelineItem: null
  };
  
  function focusTimelineItem(e) {
    e.preventDefault();
    $('.timeline-item').removeClass('focus');
    DOM.$timelineItem = $(e.target).closest('li');
    DOM.$timelineItem.addClass('focus');
  }

  $('#timeline').on('click', '.js-age', focusTimelineItem.bind(this));


  window.Homesite = window.Homesite || {
    components: {},
    ractives: {}
  };
})(window);
