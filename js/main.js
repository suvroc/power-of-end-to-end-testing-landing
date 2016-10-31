$(document).ready(function() {
 
  
      // Owl carousel
    $("#owl-example").owlCarousel(
    {
        items :1,
        autoPlay : true,
        pagination : false,
    });
 
});

function showTableOfContents() {
    $("#shortTOC").hide();
    $("#fullTOC").show();
}

function hideTableOfContents() {
    $("#shortTOC").show();
    $("#fullTOC").hide();
}
