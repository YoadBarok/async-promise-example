const posts = [
    { title: 'Post One', body: 'This is post one' },
    { title: 'Post Two', body: 'This is post two' }
];

function getPosts() {
    setTimeout(() => {
        let output = '';
        posts.forEach((post, index) => {
            output += `<li>${post.title} - ${post.body}</li>`;
        });
        document.body.innerHTML = output;
    }, 1000);
}

function createPost(post) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const titleUsed = posts.some(p => p.title === post.title); // Using some to check for matching title.
            if (!titleUsed) {
                posts.push(post);
                resolve();
            } else {
                console.log(posts);
                reject("Error: Title is taken");
            }
        }, 2000);
    });

}

// createPost({title: "Post Three", body: "This is post three"})
// .then(getPosts)  // createPost returns a promise, so we need to process the result of it with then & catch.
// .catch(err => console.log(err))



// Async / Await

async function init() {  // Declaring as async function allows to use the await keyword.
    await createPost({ title: "Post Three", body: "This is post three" }); // await preceding the function call: wait for this to end and then continue.
    getPosts();  // calling get posts only after we finished creating the new post: the new post will be included.
    // no need to use then & catch when you use async function & await.
}

init();



// Async / Await / With fetch

var result = null;

function delayedFetch() {
    return new Promise((resolve, reject) => {
        setTimeout(async () => {
            result = await fetch('https://jsonplaceholder.typicode.com/users') // fetch returns a promise, using the await keyword to wait for its result
            const error = false;
            if (!error) resolve();
            else reject("Error!!!");
        }, 2000)
    })
}

async function fetchUsers() {
    await delayedFetch();
    const data = await result.json();
    console.log(data);
}

// fetchUsers();


// Promise.all

// const promise1 = Promise.resolve("Hello World!");
// const promise2 = 10;
// const promise3 = new Promise((resolve, reject) =>
//     setTimeout(resolve, 2000, "Goodbye"));

// const promise4 = fetch
// ('https://jsonplaceholder.typicode.com/users').then(res => res.json());

// Promise.all([promise1, promise2, promise3, promise4])
// .then(values => console.log(values));
