require('./graphics.js');
require('./jquery-timing.min.js');
// instantiate the scrollama

//2010: 14,253

// 2017: 50,204




$(window).scroll(function() {
  var d = $('.fadeLead'),
      offsetT = d.offset().top + d.outerHeight(),
      scrollT = $(document).scrollTop(),
      y1 = 1, y2 = 0,
      x1 = 0, x2 = offsetT,
      m = (y2-y1)/(x2-x1);

  d.css('opacity', Math.max(0,y1 + m * scrollT));
});






var images311 = []

var complaints_text = ["“Everything from food to diapers to large TVs.”",
  "“Empty pizza boxes, fast food cups.”",
  "“Raccoons digging through bags.”",
  "“Filthy disaster all over the neighborhood.”"
]

for (i = 0; i < 41; i++) {
  var image = "http://media.philly.com/storage/inquirer/special%20project%20media/trash25/trash25_" + (i + 1) + ".jpg";
  images311.push(image)
}

function shuffle(a) {
  var j, x, i;
  for (i = a.length - 1; i > 0; i--) {
    j = Math.floor(Math.random() * (i));
    x = a[i];
    a[i] = a[j];
    a[j] = x;
  }
}

$(".column_311 img").each(function(n) {
  image = images311[n];
  $(this).attr("src", image);
});

var t = 0;
window.setInterval(function(i) {
  shuffle(images311);
  // $(".column_311 img").each(function(n) {
  //   $(this).fadeOut(400, function() {
  //     image = images311[n];
  //     $(this).attr("src", image)
  //   }).fadeIn(400);
  //   console.log(n);
  // });
  $("#complaints").fadeOut(400, function() {
    $(this).html(complaints_text[t])
  }).fadeIn(400);
  t++
  if (t == 4) {
    t = 0;
  }
  console.log(t);

}, 5000);

var trashBag_10 = '<svg class="trashBag complaints_2010" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" x="0px" y="0px" viewBox="0 0 96.001 120" enable-background="new 0 0 96.001 96" xml:space="preserve"><g display="none"><g display="inline" opacity="0.2"><g><path fill="#000000" stroke="#EC2227" stroke-width="0.5" stroke-miterlimit="10" d="M90.594,84.537     c0,3.331-2.727,6.058-6.057,6.058H11.651c-3.331,0-6.057-2.727-6.057-6.058V11.651c0-3.331,2.726-6.056,6.057-6.056h72.886' + 'c3.33,0,6.057,2.725,6.057,6.056V84.537z"/><path fill="#000000" stroke="#EC2227" stroke-width="0.5" stroke-miterlimit="10" d="M20.738,94.594     c-3.073,0-5.589-2.564-5.589-5.703V7.296c0-3.136,2.516-5.702,5.589-5.702h54.541c3.074,0,5.588,2.565,5.588,5.702v81.595     c0,3.139-2.514,5.703-5.588,5.703H20.738z"/><path fill="#000000" stroke="#EC2227" stroke-width="0.5" stroke-miterlimit="10" d="M7.267,80.885' + 'c-3.176,0-5.774-2.486-5.774-5.529V20.644c0-3.041,2.599-5.528,5.774-5.528h81.448c3.176,0,5.773,2.488,5.773,5.528v54.712     c0,3.043-2.598,5.529-5.773,5.529H7.267z"/></g><circle fill="#000000" stroke="#EC2227" stroke-width="0.5" stroke-miterlimit="10" cx="48" cy="48" r="19.363"/><circle fill="#000000" stroke="#EC2227" stroke-width="0.5" stroke-miterlimit="10" cx="48" cy="48" r="46.5"/><line fill="#000000" stroke="#EC2227" stroke-width="0.5" stroke-miterlimit="10" x1="0.009" y1="0.008"' + 'x2="95.992" y2="95.993"/><line fill="#000000" stroke="#EC2227" stroke-width="0.5" stroke-miterlimit="10" x1="95.992" y1="0.008" x2="0.009" y2="95.993"/></g></g><g><path d="M47.251,21.105V6.76c-1.767,1.061-5.017,3.507-3.861,6.655l1.512,4.118l-2.794-3.382c-3.275-3.965-7.035-7.316-7.844-7.022   c0.004,0-0.13,0.163-0.117,0.802l6.986,13.698C43.133,21.273,45.192,21.132,47.251,21.105z"/><path d="M71.469,53.06c0-27.405-12.354-30.154-20.805-30.431c3.619,1.61,10.113,5.55,11.866,13.588l-1.465,0.319' + 'c-1.832-8.4-9.592-12.028-12.314-13.058v14.765h-1.5V23.479c-2.723,1.03-10.483,4.658-12.315,13.058l-1.465-0.319   c1.753-8.038,8.248-11.978,11.867-13.588c-8.451,0.276-20.805,3.025-20.805,30.431c0,15.695-2.734,20.488-4.048,22.792   c-0.958,1.679-0.958,1.679,2.775,5.763c6.536,7.15,13.815,8.136,20.709,8.136c0.743,0,1.464-0.01,2.157-0.02   c0.649-0.009,1.275-0.018,1.874-0.018s1.225,0.009,1.874,0.018c0.693,0.01,1.414,0.02,2.157,0.02' + 'c6.893,0,14.172-0.985,20.709-8.136c3.733-4.084,3.733-4.084,2.775-5.763C74.203,73.548,71.469,68.755,71.469,53.06z"/><path d="M61.854,7.932c0.013-0.653-0.128-0.809-0.129-0.81c-0.826-0.286-4.557,3.065-7.832,7.03l-2.796,3.384l1.514-4.12   c1.156-3.147-2.094-5.594-3.86-6.655v14.345c2.059,0.027,4.118,0.168,6.118,0.525L61.854,7.932z"/></g></svg>'

var trashBag_17 = '<svg class="trashBag complaints_2017" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" x="0px" y="0px" viewBox="0 0 96.001 120" enable-background="new 0 0 96.001 96" xml:space="preserve"><g display="none"><g display="inline" opacity="0.2"><g><path fill="#000000" stroke="#EC2227" stroke-width="0.5" stroke-miterlimit="10" d="M90.594,84.537     c0,3.331-2.727,6.058-6.057,6.058H11.651c-3.331,0-6.057-2.727-6.057-6.058V11.651c0-3.331,2.726-6.056,6.057-6.056h72.886' + 'c3.33,0,6.057,2.725,6.057,6.056V84.537z"/><path fill="#000000" stroke="#EC2227" stroke-width="0.5" stroke-miterlimit="10" d="M20.738,94.594     c-3.073,0-5.589-2.564-5.589-5.703V7.296c0-3.136,2.516-5.702,5.589-5.702h54.541c3.074,0,5.588,2.565,5.588,5.702v81.595     c0,3.139-2.514,5.703-5.588,5.703H20.738z"/><path fill="#000000" stroke="#EC2227" stroke-width="0.5" stroke-miterlimit="10" d="M7.267,80.885' + 'c-3.176,0-5.774-2.486-5.774-5.529V20.644c0-3.041,2.599-5.528,5.774-5.528h81.448c3.176,0,5.773,2.488,5.773,5.528v54.712     c0,3.043-2.598,5.529-5.773,5.529H7.267z"/></g><circle fill="#000000" stroke="#EC2227" stroke-width="0.5" stroke-miterlimit="10" cx="48" cy="48" r="19.363"/><circle fill="#000000" stroke="#EC2227" stroke-width="0.5" stroke-miterlimit="10" cx="48" cy="48" r="46.5"/><line fill="#000000" stroke="#EC2227" stroke-width="0.5" stroke-miterlimit="10" x1="0.009" y1="0.008"' + 'x2="95.992" y2="95.993"/><line fill="#000000" stroke="#EC2227" stroke-width="0.5" stroke-miterlimit="10" x1="95.992" y1="0.008" x2="0.009" y2="95.993"/></g></g><g><path d="M47.251,21.105V6.76c-1.767,1.061-5.017,3.507-3.861,6.655l1.512,4.118l-2.794-3.382c-3.275-3.965-7.035-7.316-7.844-7.022   c0.004,0-0.13,0.163-0.117,0.802l6.986,13.698C43.133,21.273,45.192,21.132,47.251,21.105z"/><path d="M71.469,53.06c0-27.405-12.354-30.154-20.805-30.431c3.619,1.61,10.113,5.55,11.866,13.588l-1.465,0.319' + 'c-1.832-8.4-9.592-12.028-12.314-13.058v14.765h-1.5V23.479c-2.723,1.03-10.483,4.658-12.315,13.058l-1.465-0.319   c1.753-8.038,8.248-11.978,11.867-13.588c-8.451,0.276-20.805,3.025-20.805,30.431c0,15.695-2.734,20.488-4.048,22.792   c-0.958,1.679-0.958,1.679,2.775,5.763c6.536,7.15,13.815,8.136,20.709,8.136c0.743,0,1.464-0.01,2.157-0.02   c0.649-0.009,1.275-0.018,1.874-0.018s1.225,0.009,1.874,0.018c0.693,0.01,1.414,0.02,2.157,0.02' + 'c6.893,0,14.172-0.985,20.709-8.136c3.733-4.084,3.733-4.084,2.775-5.763C74.203,73.548,71.469,68.755,71.469,53.06z"/><path d="M61.854,7.932c0.013-0.653-0.128-0.809-0.129-0.81c-0.826-0.286-4.557,3.065-7.832,7.03l-2.796,3.384l1.514-4.12   c1.156-3.147-2.094-5.594-3.86-6.655v14.345c2.059,0.027,4.118,0.168,6.118,0.525L61.854,7.932z"/></g></svg>'

$("#growth-leg").html(trashBag_10 + "<span>Fifty 311 complaints (2011) </span>" + trashBag_17 + "<span>Fifty 311 complaints (2017)</span>");

var hh = $(".header").height(),
  wh = $(window).height(),
  rwh = ((wh - hh));
// $("#growth").css("top",hh);
$(".graphic.wide").css("top", (hh + 50));

var complaints_2010 = 14253,
  complaints_2017 = 50204;

// for (i = 0; i < (complaints_2010/50); i++) {
//   $(trashBag_10).appendTo("#growth");
// }

// $('.complaints_2010').each(function(){
//   var min = -20;
//   var max = 20;
//   var random = Math.floor(Math.random() * (max - min + 1)) + min;
//   $(this).css("opacity","0").appendTo("#growth").animate({
//     "opacity":"1"
//   }, 2000);

var trigger0 = $('#trigger_0').offset().top - $(window).outerHeight();

$(window).scroll(function(event) {
  // #target not yet in view
  if (trigger0 + 300 > $(window).scrollTop()) {
    return;
  }
  for (i = 0; i < (complaints_2010 / 50); i++) {
    $(trashBag_10).css("opacity", "0").appendTo("#growth").animate({
      "opacity": "1"
    }, 2000);

  }

  for (i = 0; i < ((complaints_2017 / 50)); i++) {
    $(trashBag_17).appendTo("#growth");
  }
  $('.complaints_2010').each(function() {
    var min = -20;
    var max = 20;
    var random = Math.floor(Math.random() * (max - min + 1)) + min;
    $(this).css("transform", "rotate(" + (random) + "deg)")
  })

  $(this).off(event);
});

var trigger1 = $('#trigger_1').offset().top - $(window).outerHeight();
$(window).scroll(function(event) {
  // #target not yet in view
  if (trigger1 + 300 > $(window).scrollTop()) {
    return;
  }
  $(".complaints_2017").animate({
    "opacity": "1"
  }, 2000);

  $('.complaints_2017').each(function() {
    var min = -20;
    var max = 20;
    var random = Math.floor(Math.random() * (max - min + 1)) + min;
    $(this).css("transform", "rotate(" + (random) + "deg)")
  })

  $(this).off(event);
});


  $(".bag_graph .icon").each(function() {
    var wait = $(this).parent().data("wait");
    for (i = 0; i < wait; i++) {
      $(this).append(trashBag_17);
    }
    $(this).parent().append("<span class='count'>"+wait+" days</span>")
  });
