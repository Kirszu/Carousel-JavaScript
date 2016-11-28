var items = $(".photo").length;
var width = $(".photo").width();
var actualWidth = 0;



var arrowClickLeft = $(".left-arrow").click(function(){
  if (actualWidth === 0) return
  actualWidth -= width;
  var scrollLeft = $( ".content" ).animate({scrollLeft:actualWidth}, 400);
  console.log(actualWidth);
});

var arrowClickRight = $(".right-arrow").click(function(){
  if (actualWidth === (items * width)-width) return
  actualWidth += width;
  var scrollRight = $( ".content" ).animate({scrollLeft:actualWidth}, 400);
  console.log(actualWidth);
});
