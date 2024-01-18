const posts = [
    { title: 'Post one', body: 'this is post one' },
    { title: 'Post two', body: 'this is post two' }
]

function getPosts() {
    setTimeout(() => {
        let output = ''
        posts.forEach((post) => {
            output += `<li>${post.title}</li>`
        })
        document.body.innerHTML = output
    }, 1000);
}

getPosts()

function createPosts(post,callBack) {
    setTimeout(() => {
        posts.push(post)
        callBack()    
    }, 2000);
}

createPosts({title: 'Post three', body: 'this is post three'},getPosts)