document.addEventListener("DOMContentLoaded", function () {

  let heartArr = document.getElementsByClassName("fa-heart");
  let divListingArr = document.getElementsByClassName("div-listing");
  let imageArr = document.querySelectorAll(".selected-small-images img");
  let mainSelectedImg = document.querySelector(".div-selected-image > img")
  for (let i = 0; i < heartArr.length; i++) {
    const heartIcon = heartArr[i];
    heartIcon.addEventListener("click", (e) => {
      e.stopPropagation();
      if (heartIcon.style.color === "red") {
        heartIcon.style.color = "black";
        heartIcon.style.opacity = "0.5";
      } else {
        heartIcon.style.color = "red";
        heartIcon.style.opacity = "0.8";
      }
    });
  }

  for(let i = 0; i < divListingArr.length; i++){
    divListingArr[i].addEventListener("click", () => {
      window.location = "selected_house.html";
    })
  }

  //------ Image expands on hover (Will be added later on) ------//

  // for(let i = 0; i < imageArr.length; i++){
  //   const focusedImage = imageArr[i];
  //   focusedImage.addEventListener("mouseover", () => {
  //     if(focusedImage.style.maxWidth === "25%"){
  //       focusedImage.style.maxWidth = "30%"
  //     } else{
  //       focusedImage.style.maxWidth = "25%"
  //     }
  //   })
  // }

  // Change the selected image on selected_house.html
  for(let i = 0; i < imageArr.length; i++){
    const focusedImage = imageArr[i];
    focusedImage.addEventListener("click", () => {
      mainSelectedImg.setAttribute("src", focusedImage.getAttribute("src"));
      // alert(mainSelectedImg.offsetHeight);
    })
  }
  
});
