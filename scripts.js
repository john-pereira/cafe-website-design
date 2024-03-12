function toggleMenu() {
    const menu = document.querySelector(".mobile-menu__links");
    const icon = document.querySelector(".mobile-menu__icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
}


// function expandFunction() {
//     var dots = document.getElementById("dots");
//     var moreText = document.getElementById("more");
//     var btnText = document.getElementById("myBtn");
  
//     if (dots.style.display === "none") {
//       dots.style.display = "inline";
//       btnText.innerHTML = "Read more"; 
//       moreText.style.display = "none";
//     } else {
//       dots.style.display = "none";
//       btnText.innerHTML = "Read less"; 
//       moreText.style.display = "inline";
//     }
//   }

  // $(document).load()
  
  $(function($){
    var flip = 0;
    $( "#myBtn" ).on( "click", function() {
      $( "#more" ).toggle( flip++ % 2 === 0 );
    });
  });