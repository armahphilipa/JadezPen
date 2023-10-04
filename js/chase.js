document.addEventListener("DOMContentLoaded", function (){
    const nameInput = document.getElementById("name");
    const commentInput = document.getElementById("new-comment");
    const submitButton = document.getElementById("submit");
    const commentList = document.getElementById("comment-list");

    //load commenys from localStorage on page load
    loadComments();

    //Add event listener for the submit button
    submitButton.addEventListener("click",function (){
        const name = nameInput.value;
        const commentText = commentInput.value;

        if (name && commentText){
            const comment = {
                name: name,
                text: commentText,
            };
            //save the comment to local storage
            saveComment(comment);

            //display the comment in the comment selection
            displayComment(comment);

            //clear the input fields
            nameInput.value = "";
            commentInput.value = "";
        }

    });

    function saveComment(comment){
        let comments = JSON.parse(localStorage.getItem("comments-2"))|| [];
        comments.push(comment);
        localStorage.setItem("comments-2",JSON.stringify(comments));
    }
    
    function loadComments(){
        let comments = JSON.parse(localStorage.getItem("comments-2")) || [];
        comments.forEach(displayComment);
    }
    
    function displayComment(comment){
        const commentDiv = document.createElement("div");
        commentDiv.classList.add("comment");

        const profileCard = document.createElement("div");
        profileCard.classList.add("profile-card");
        profileCard.innerText = comment.name.charAt(0);

        const firstName = document.createElement("p");
        firstName.classList.add("firstName");
        firstName.innerText = comment.name.split(" ")[0];

        const commentText = document.createElement("p");
        commentText.innerText = comment.text;

        commentDiv.appendChild(profileCard);
        commentDiv.appendChild(firstName);
        commentDiv.appendChild(commentText);

        commentList.appendChild(commentDiv);
    }

    //profile card
    commentInput.addEventListener("input", function(){
        const commentText = commentInput.value.trim();
        if (commentText === ""){
            commentList.style.display = "none";
        } else {
            commentList.style.display = "block";
        }

    }); 
});
