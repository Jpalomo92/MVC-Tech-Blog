const postId = document.querySelector('input[name="post-id"]').value;

const commentFormHandler = async (event) => {
    event.preventDefault();
    const comment = document.querySelector('textarea[name="comment-body"]').value.trim();
    console.log(comment);
}