$(document).ready(function(){
    $(".coursel-title").slideDown(5000);

    var title=["I'm Software Engineer","I'm Web Developer","Graphic Designer"];
    

    var title_h3=document.getElementsByClassName("title-h3")[0];
    setInterval(() => {
      
      setTimeout(() => {
        title_h3.innerHTML=title[0];
      }, 1000);

      setTimeout(() => {
        title_h3.innerHTML=title[1];
      }, 2000);

      setTimeout(() => {
        title_h3.innerHTML=title[2];
      }, 3000);

      

    }, 5000);


    
  })