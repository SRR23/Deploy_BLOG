const likeIcon = document.getElementById('like-icon');


likeIcon.onclick = () => {
    const blogId = likeIcon.getAttribute('data-blog');
    const url = `/like_blog/${parseInt(blogId)}/`;
    fetch(url, {
        method: 'GET',
        headers: {
            'Content-type': 'applicatin/json'
        }
    })
    .then(response => {
        return response.json();
    })
    .then(data => {
        if(data.liked) {
            likeIcon.classList.remove('empty-heart');
        }
        else {
            likeIcon.classList.add('empty-heart');
        }
    })
    .catch(error => {
        console.log(error);
    })
}