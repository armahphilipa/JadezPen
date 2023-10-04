/*function addComment() {
    const newCommentText = document.getElementById("new-comment").value;
    if (newCommentText.trim() !== "") {
        const commentsContainer = document.querySelector(".comments");
        const newComment = document.createElement("div");
        newComment.classList.add("comment");
        newComment.innerHTML = "<p><span>User:</span> ${newCommentText} </p>";
        commentsContainer.appendChild(newComment);
        document.getElementById("new-comment").value =""
    }
}*/
//comment section
/*const commentList = document.getElementById

document.getElementById("submit").addEventListener("click",function(){
    var commentText = document.getElementById("new-comment").value;
    var commentName = document.getElementById("name").value;
    if (commentText !== "") {
        var commentElement = document.createElement("div");
        commentElement.className ="new-comment";
        commentElement.textContent = commentName + ": "+ commentText;
        document.getElementById("comment-list").appendChild(commentElement);
        document.getElementById("new-comment").value="";
    }
}
)*/

//comment section

//load comments from localStorage on page load
/*document.addEventListener("DOMContentLoaded", function (){
    addComment();
});


function addComment(){
    const name = document.getElementById("name").value;
    const commentText = document.getElementById("new-comment").value;
    if (name && commentText){
        const comment = {
            name,
            commentText
        };
        
        //save comment to localStorage
        saveComment(comment);

        //clear input fields
        document.getElementById("name").value = "";
        document.getElementById("new-comment").value = "";

        //display the comment
        displayComment(comment);
    }
}

function saveComment(comment) {
    let comments = JSON.parse(localStorage.getItem("comment")) || [];
    comments.push(comment);
    localStorage.setItem("comments", JSON.stringify(comments));
}

function loadComments(){
    let comments = JSON.parse(localStorage.getItem("comments"));
    comments.forEach(displayComment);
}

function displayComment(comment){
    const commentsContainer = document.getElementById("comments");
    
    const commentDiv = document.createElement("div");
    commentDiv.classList.add("comment");

    const profileCard = document.createElement("div");
    profileCard.classList.add("profile-card");
    profileCard.innerText = comment.name.charAt(0);

    const commentText =document.createElement("p");
    commentText.innerText = comment.commentText;

    commentDiv.appendChild(profileCard);
    commentDiv.appendChild(commentText);

    commentsContainer.appendChild(commentDiv);
}*/

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

            //display the cojmment in the comment selection
            displayComment(comment);

            //clear the input fields
            nameInput.value = "";
            commentInput.value = "";
        }

    });

    function saveComment(comment){
        let comments = JSON.parse(localStorage.getItem("comments"))|| [];
        comments.push(comment);
        localStorage.setItem("comments",JSON.stringify(comments));
    }
    
    function loadComments(){
        let comments = JSON.parse(localStorage.getItem("comments")) || [];
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

    commentInput.addEventListener("input", function(){
        const commentText = commentInput.value.trim();
        if (commentText === ""){
            commentList.style.display = "none";
        } else {
            commentList.style.display = "block";
        }

    }); 
});