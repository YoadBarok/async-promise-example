const posts = [
    { title: 'Post One', body: 'This is post one' },
    { title: 'Post Two', body: 'This is post two' }
];

function getPosts(lastPost) {
                                    // setTimeout takes two parameters:
                                    // 1st - is the function to execute after the time is up,
                                    // 2nd - how many milliseconds to delay
    setTimeout(() => {             
        let output = '';
        posts.forEach(post => {
            output += `<li>${post.title}</li>`;
        });
        document.body.innerHTML = output + `<li>${lastPost}</li>`;
    }, 1000);
}

function createPost(post, callback, callBackParam) {
    setTimeout(() => {
        posts.push(post);
        callback(callBackParam);
    }, 2000);
}

createPost({title: "Post Three", body: "This is post three"}, getPosts, "Last post");