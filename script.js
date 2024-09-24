document.getElementById('postButton').addEventListener('click', function() {
    const content = document.getElementById('postContent').value;

    if (content.trim()) {
        addPost(content);
        document.getElementById('postContent').value = '';
    }
});

function addPost(content) {
    const feed = document.getElementById('feed');
    const postDiv = document.createElement('div');
    postDiv.classList.add('post');

    postDiv.innerHTML = `
        <p>${content}</p>
        <div class="actions">
            <button class="action-button like-button">Like <span class="like-count">0</span></button>
            <button class="action-button dislike-button">Dislike <span class="dislike-count">0</span></button>
        </div>
        <div class="comment-section">
            <h4>Comments (<span class="comment-count">0</span>)</h4>
            <div class="comments"></div>
            <div class="comment-form">
                <input type="text" class="comment-input" placeholder="Write a comment..." />
                <button class="comment-button">Post</button>
            </div>
        </div>
    `;

    feed.appendChild(postDiv);

    let likeCount = 0;
    let dislikeCount = 0;
    postDiv.querySelector('.like-button').addEventListener('click', function() {
        likeCount++;
        postDiv.querySelector('.like-count').innerText = likeCount;
    });

    postDiv.querySelector('.dislike-button').addEventListener('click', function() {
        dislikeCount++;
        postDiv.querySelector('.dislike-count').innerText = dislikeCount;
    });
    postDiv.querySelector('.comment-button').addEventListener('click', function() {
        const commentInput = postDiv.querySelector('.comment-input');
        const commentText = commentInput.value;

        if (commentText.trim()) {
            addComment(postDiv.querySelector('.comments'), commentText);
            commentInput.value = '';
            updateCommentCount(postDiv);
        }
    });
}

function addComment(commentsDiv, commentText) {
    const commentDiv = document.createElement('div');
    commentDiv.classList.add('comment');

    commentDiv.innerHTML = `
        <p>${commentText}</p>
        <div class="comment-actions">
            <button class="like-comment-button">Like <span class="comment-like-count">0</span></button>
            <button class="dislike-comment-button">Dislike <span class="comment-dislike-count">0</span></button>
        </div>
    `;

    commentsDiv.appendChild(commentDiv);

    let commentLikeCount = 0;
    let commentDislikeCount = 0;
    commentDiv.querySelector('.like-comment-button').addEventListener('click', function() {
        commentLikeCount++;
        commentDiv.querySelector('.comment-like-count').innerText = commentLikeCount;
    });

    commentDiv.querySelector('.dislike-comment-button').addEventListener('click', function() {
        commentDislikeCount++;
        commentDiv.querySelector('.comment-dislike-count').innerText = commentDislikeCount;
    });
}

function updateCommentCount(postDiv) {
    const commentCount = postDiv.querySelector('.comments').children.length;
    postDiv.querySelector('.comment-count').innerText = commentCount;
}
