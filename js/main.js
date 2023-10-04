function myFunction() {
    var dots = document.getElementById("dots");
    var dots = document.getElementById("dots");
  let moreText = document.getElementById("more");
  let btnText = document.getElementById("myBtn");

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = "Read more";
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    btnText.innerHTML = "Read less";
    moreText.style.display = "inline";
  }
}

//like button

/*document.addEventListener("DOMContentLoaded", function (){
  const likeButton = document.getElementById("like-button-1");
  const likeCount = document.getElementById("like-count-1");
  
  let likes=0;
  likeButton.addEventListener("click", function (){
    likes++;
    likeCount.textContent = likes + " " + (likes=== 1 ? "like" : "likes");
  });
});


document.addEventListener("DOMContentLoaded", function (){
  const likeButton = document.getElementById("lik-button");
  const likeCount = document.getElementById("lik-count");
  
  let likes=0;
  likeButton.addEventListener("click", function (){
    likes++;
    likeCount.textContent = likes + " " + (likes=== 1 ? "like" : "likes");
  });
});

document.addEventListener("DOMContentLoaded", function (){
  const likeButton = document.getElementById("li-button");
  const likeCount = document.getElementById("li-count");
  
  let likes=0;
  likeButton.addEventListener("click", function (){
    likes++;
    likeCount.textContent = likes + " " + (likes=== 1 ? "like" : "likes");
  });
});

document.addEventListener("DOMContentLoaded", function (){
  const likeButton = document.getElementById("l-button");
  const likeCount = document.getElementById("l-count");
  
  let likes=0;
  likeButton.addEventListener("click", function (){
    likes++;
    likeCount.textContent = likes + " " + (likes=== 1 ? "like" : "likes");
  });
});

document.addEventListener("DOMContentLoaded", function (){
  const likeButton = document.getElementById("like-utton");
  const likeCount = document.getElementById("like-ount");
  
  let likes=0;
  likeButton.addEventListener("click", function (){
    likes++;
    likeCount.textContent = likes + " " + (likes=== 1 ? "like" : "likes");
  });
});

document.addEventListener("DOMContentLoaded", function (){
  const likeButton = document.getElementById("like-btn");
  const likeCount = document.getElementById("like-counter");
  
  let likes=0;
  likeButton.addEventListener("click", function (){
    likes++;
    likeCount.textContent = likes + " " + (likes=== 1 ? "like" : "likes");
  });
});*/


//like button 1

/*document.addEventListener("DOMContentLoaded", function (){
  const likeButton = document.getElementById("like-button-1");
  const likeCount = document.getElementById("like-counter-1");
  
  let likes = parseInt(localStorage.getItem("likes-1")) || 0;
  let isLiked = false;

  if (likes === 1) {
      isLiked = true;
  }

  updateLikeText();
  
  likeButton.addEventListener("click", function (){
    if (isLiked){
      likes--;
    }
    else{
      likes++;
    }
    isLiked = !isLiked;
    localStorage.setItem("likes-1", likes.toString())
    
    localStorage.setItem("likes-1", likes.toString());
    likeCount.textContent = likes-1 + " " + (likes=== 1 ? "like" : "likes");
    updateLikeText();
  });
  function updateLikeText() {
    likeCount.textContent = likes-1 + " " + (likes=== 1 ? "like" : "likes");
  }
});


//like button 2
document.addEventListener("DOMContentLoaded", function (){
  const likeButton2 = document.getElementById("like-button-2");
  const likeCounter2 = document.getElementById("like-counter-2");
  
  let likes2 = parseInt(localStorage.getItem("likes-2")) || 0;
  let isLiked = false;

  if (likes === 1) {
      isLiked = true;
  }

  updateLikeText();
  
  likeButton.addEventListener("click", function (){
    if (isLiked){
      likes--;
    }
    else{
      likes++;
    }
    isLiked = !isLiked;
    localStorage.setItem("likes-2", likes.toString())
    
    localStorage.setItem("likes-2", likes.toString());
    likeCount.textContent = likes-2 + " " + (likes=== 1 ? "like" : "likes");
    updateLikeText();
  });
  function updateLikeText() {
    likeCount.textContent = likes-2+ " " + (likes=== 1 ? "like" : "likes");
  }
});


//like button 3
document.addEventListener("DOMContentLoaded", function (){
  const likeButton = document.getElementById("li-button");
  const likeCount = document.getElementById("li-count");
  
  let likes = parseInt(localStorage.getItem("likes")) || 0;
  let isLiked = false;

  if (likes === 1) {
      isLiked = true;
  }

  updateLikeText();
  
  likeButton.addEventListener("click", function (){
    if (isLiked){
      likes--;
    }
    else{
      likes++;
    }
    isLiked = !isLiked;
    localStorage.setItem("likes", likes.toString())
    
    localStorage.setItem("likes", likes.toString());
    likeCount.textContent = likes + " " + (likes=== 1 ? "like" : "likes");
    updateLikeText();
  });
  function updateLikeText() {
    likeCount.textContent = likes + " " + (likes=== 1 ? "like" : "likes");
  }
});



//like button 4
document.addEventListener("DOMContentLoaded", function (){
  const likeButton = document.getElementById("l-button");
  const likeCount = document.getElementById("l-count");
  
  let likes = parseInt(localStorage.getItem("likes")) || 0;
  let isLiked = false;

  if (likes === 1) {
      isLiked = true;
  }

  updateLikeText();
  
  likeButton.addEventListener("click", function (){
    if (isLiked){
      likes--;
    }
    else{
      likes++;
    }
    isLiked = !isLiked;
    localStorage.setItem("likes", likes.toString());
    
    localStorage.setItem("likes", likes.toString());
    likeCount.textContent = likes + " " + (likes=== 1 ? "like" : "likes");
    updateLikeText();
  });
  function updateLikeText() {
    likeCount.textContent = likes + " " + (likes=== 1 ? "like" : "likes");
  }
});


//like button 5
document.addEventListener("DOMContentLoaded", function (){
  const likeButton = document.getElementById("like-utton");
  const likeCount = document.getElementById("like-ount");
  
  let likes = parseInt(localStorage.getItem("likes")) || 0;
  let isLiked = false;

  if (likes === 1) {
      isLiked = true;
  }

  updateLikeText();
  
  likeButton.addEventListener("click", function (){
    if (isLiked){
      likes--;
    }
    else{
      likes++;
    }
    isLiked = !isLiked;
    localStorage.setItem("likes", likes.toString());
    
    localStorage.setItem("likes", likes.toString());
    likeCount.textContent = likes + " " + (likes=== 1 ? "like" : "likes");
    updateLikeText();
  });
  function updateLikeText() {
    likeCount.textContent = likes + " " + (likes=== 1 ? "like" : "likes");
  }
});


//like button 6 
document.addEventListener("DOMContentLoaded", function (){
  const likeButton = document.getElementById("like-btn");
  const likeCount = document.getElementById("like-counter");
  
  let likes = parseInt(localStorage.getItem("likes")) || 0;
  let isLiked = false;

  if (likes === 1) {
      isLiked = true;
  }

  updateLikeText();
  
  likeButton.addEventListener("click", function (){
    if (isLiked){
      likes--;
    }
    else{
      likes++;
    }
    isLiked = !isLiked;
    localStorage.setItem("likes", likes.toString());
    
    localStorage.setItem("likes", likes.toString());
    likeCount.textContent = likes + " " + (likes=== 1 ? "like" : "likes");
    updateLikeText();
  });
  function updateLikeText() {
    likeCount.textContent = likes + " " + (likes=== 1 ? "like" : "likes");
  }
});*/

  /*likeCount.textContent = likes + " " + (likes=== 1 ? "like" : "likes");
  likeButton.addEventListener("click", function (){
    likes++;
    localStorage.setItem("likes", likes.toString());
    likeCount.textContent = likes + " " + (likes=== 1 ? "like" : "likes");
  });
});*/


//another code for like buttons
//document.addEventListener("DOMContentLoaded", function(){

  //get the like buttons and counters
  /*const likeButtons = document.querySelectorAll(".like-button-");
  const likeCounters = document.querySelectorAll(".like-counter-");*/

  
  //for (let i = 0; i < likeButtons.length; i++) {
    //const likeButton= likeButtons + i;
    //const likeCounter = likeCounters + i;
    //const likeButtons = document.querySelectorAll(".like-button-" + i);
   // const likeCounters = document.querySelectorAll(".like-counter-"+ i);
   // const cardId= i + 1; //Assuming you have only button per card
   //initialize likes from local storage or set to 0
   /* const storedLikes = localStorage.getItem("likes-" + i);
    if (storedLikes !== null) {
      likeCounters.textContent = storedLikes + " likes";
    } else {
      localStorage.setItem("likes-"+ i, 0);
    }
    //Add a click event linstener to each like button
    likeButtons.addEventListener("click", function (){
      const currentLikes = parseInt(localStorage.getItem("likes-" + i));
      const newLikes = currentLikes + 1;
      localStorage.setItem("likes-" + 1, newLikes);
      likeCounters[i].textContent = newLikes + "likes";
    });
  } 
});*/

document.addEventListener("DOMContentLoaded", function(){
  //Get references to like buttons 
  const likeButton1 = document.getElementById("like-button-1");
  const likeCounter1 = document.getElementById("like-counter-1");

  const likeButton2 = document.getElementById("like-button-2");
  const likeCounter2 = document.getElementById("like-counter-2");

  const likeButton3 = document.getElementById("like-button-3");
  const likeCounter3 = document.getElementById("like-counter-3");

  const likeButton4 = document.getElementById("like-button-4");
  const likeCounter4 = document.getElementById("like-counter-4");

  const likeButton5 = document.getElementById("like-button-5");
  const likeCounter5 = document.getElementById("like-counter-5");

  const likeButton6 = document.getElementById("like-button-6");
  const likeCounter6 = document.getElementById("like-counter-6");

  //initialize likes from local storage or set to 0
  const storedLikes1 = localStorage.getItem("likes-1");
  if (storedLikes1 !== null) {
    likeCounter1.textContent = storedLikes1 + "likes";
  } else {
    localStorage.setItem("likes-1",0);
  }

  const storedLikes2 = localStorage.getItem("likes-2");
  if (storedLikes2 !== null) {
    likeCounter2.textContent = storedLikes2 + "likes";
  } else {
    localStorage.setItem("likes-2",0);
  }

  const storedLikes3 = localStorage.getItem("likes-3");
  if (storedLikes3 !== null) {
    likeCounter3.textContent = storedLikes3 + "likes";
  } else {
    localStorage.setItem("likes-3",0);
  }

  const storedLikes4 = localStorage.getItem("likes-4");
  if (storedLikes4 !== null) {
    likeCounter4.textContent = storedLikes4 + "likes";
  } else {
    localStorage.setItem("likes-4",0);
  }

  const storedLikes5 = localStorage.getItem("likes-5");
  if (storedLikes3 !== null) {
    likeCounter5.textContent = storedLikes5 + "likes";
  } else {
    localStorage.setItem("likes-5",0);
  }

  const storedLikes6 = localStorage.getItem("likes-6");
  if (storedLikes6 !== null) {
    likeCounter6.textContent = storedLikes6 + "likes";
  } else {
    localStorage.setItem("likes-6",0);
  }

  //Add click event listeners to the like buttons
  likeButton1.addEventListener("click",function (){
    const currentLikes = parseInt(localStorage.getItem("likes-1"));
    const newLikes = currentLikes + 1;
    localStorage.setItem("likes-1", newLikes);
    likeCounter1.textContent = newLikes + " likes";
  });

  likeButton2.addEventListener("click",function (){
    const currentLikes = parseInt(localStorage.getItem("likes-2"));
    const newLikes = currentLikes + 1;
    localStorage.setItem("likes-2", newLikes);
    likeCounter2.textContent = newLikes + " likes";
  });

  likeButton3.addEventListener("click",function (){
    const currentLikes = parseInt(localStorage.getItem("likes-3"));
    const newLikes = currentLikes + 1;
    localStorage.setItem("likes-3", newLikes);
    likeCounter3.textContent = newLikes + " likes";
  });

  likeButton4.addEventListener("click",function (){
    const currentLikes = parseInt(localStorage.getItem("likes-4"));
    const newLikes = currentLikes + 1;
    localStorage.setItem("likes-4", newLikes);
    likeCounter4.textContent = newLikes + " likes";
  });

  likeButton1.addEventListener("click",function (){
    const currentLikes = parseInt(localStorage.getItem("likes-5"));
    const newLikes = currentLikes + 1;
    localStorage.setItem("likes-5", newLikes);
    likeCounter5.textContent = newLikes + " likes";
  });

  likeButton1.addEventListener("click",function (){
    const currentLikes = parseInt(localStorage.getItem("likes-6"));
    const newLikes = currentLikes + 1;
    localStorage.setItem("likes-6", newLikes);
    likeCounter6.textContent = newLikes + " likes";
  });

  /*likeButton1.addEventListener("click",function (){
    const currentLikes = parseInt(localStorage.getItem("likes-1"));
    const newLikes = currentLikes + 1;
    localStorage.setItem("likes-1", newLikes);
    likeCounter1.textContent = newLikes + "likes";
  });*/
});

//newsletter

function newsletter() {
  alert("You have subscribed to our newletter");
};