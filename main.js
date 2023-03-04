  // Get the button
  let mybutton = document.getElementById("myBtn");

  // When the user scrolls down 20px from the top of the document, show the button
  window.onscroll = function() { scrollFunction() };

  function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      mybutton.style.display = "block";
    } else {
      mybutton.style.display = "none";
    }
  }

  // When the user clicks on the button, scroll to the top of the document
  function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }

  // Get the modal
  var modal = document.getElementById("myModal");
  var modal_2 = document.getElementById("myModal_2");

  // Get the image and insert it inside the modal - use its "alt" text as a caption
  var img = document.getElementById("img_computer");
  var img2 = document.getElementById("img_phone");

  var modalImg = document.getElementById("img01");
  var modalImg2 = document.getElementById("img02");

  var captionText = document.getElementById("caption");
  var captionText2 = document.getElementById("caption2");
  img.onclick = function() {
    modal.style.display = "block";
    modalImg.src = this.src;
    captionText.innerHTML = this.alt;
  }
  img2.onclick = function() {
    modal_2.style.display = "block";
    modalImg2.src = this.src;
    captionText2.innerHTML = this.alt;
  }

  // Get the <span> element that closes the modal
  var span = document.getElementsByClassName("close_1")[0];
  var span2 = document.getElementsByClassName("close_2")[0];

  // When the user clicks on <span> (x), close the modal
  span.onclick = function() {
    modal.style.display = "none";
  }
  span2.onclick = function() {
    modal_2.style.display = "none";
  }