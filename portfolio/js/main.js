//header Animetion
window.addEventListener( "scroll", function() {
  var headerElement = document.getElementById( "Header" ) ; 
  var rect = headerElement.getBoundingClientRect() ; //
  var y = rect.top + window.pageYOffset ; 
  if (y > 200) { 
    headerElement.classList.remove('Hidden'); 
  } else {
    headerElement.classList.add('Hidden'); 
  }
});

//Loding
window.onload = function() {
  const spinner = document.getElementById('Loading');
  spinner.classList.add('Loaded');
}
  ;

//fadein
  $(function(){
    $(window).scroll(function (){
      $('.fadein').each(function(){
        var elemPos = $(this).offset().top;
        var scroll = $(window).scrollTop();
        var windowHeight = $(window).height();
        if (scroll > elemPos - windowHeight + 200){
          $(this).addClass('scrollin');
        }
      });
    });
  });

//anker
$('a[href^="#"]').click(function () {
  var speed = 400;
  var href = $(this).attr("href");
  var target = $(href == "#" || href == "" ? "html" : href);
  var position = target.offset().top;
  $("body,html").animate({ scrollTop: position }, speed, "swing");
  return false;
});