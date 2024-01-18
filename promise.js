const posts = [

]

function renderLocalPosts() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            posts.push({ title: 'Post one', body: 'this is post one' })
            posts.push({ title: 'Post two', body: 'this is post two' })
            resolve('renderLocalPostsSuccess')
        }, 1000);
    })

}

function createPosts(post) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const isSuccess = Math.random() <= 0.5 ? false : true
            if (isSuccess) {
                posts.push(post)
                resolve('createPostssuccess')
            } else {
                reject('Something is wrong')
            }
        }, 2000);
    })
}

const createPostPromise = createPosts({ title: 'Post three', body: 'this is post three' })
const getPostsPromise = renderLocalPosts()

Promise.all([createPostPromise, getPostsPromise]).then((params1, params2) => {
    console.log(params1,params2);
    let output = ''
    posts.forEach((post) => {
        output += `<li>${post.title}</li>`
    })
    document.body.innerHTML = output
}).catch((erro) => {
    console.log(erro);
})