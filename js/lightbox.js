var $overlay = $("<div id='overlay'></");
var $image = $("<img>");
var $caption = $("<p></p>");

$overlay.append($image);
$overlay.append($caption);

$("#photo").append($overlay);

//Capture mouse click event on a link to an image.
$("#baristas a").click(function(event){
  event.preventDefault();
  var imageLocation = $(this).attr("href");
  //Update overlay with the linked image
  $image.attr("src", imageLocation);
  $overlay.show();
  // Get child's alt attribute and set caption.
  var captionText = $(this).children("img").attr("alt");
  $caption.text(captionText);
});

// When overlay is clicked
$overlay.click(function(){
    // Hide overlay
  $(this).hide();
});

//Use .load("filename") to add interview to lightbox?
//Example: $("#KathrynCaption").load(Kathryn.txt);