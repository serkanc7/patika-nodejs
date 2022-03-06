let posts = [{
    title: 'Title 1',
    post: 'Post 1'
},
{
    title: 'Title 2',
    post: 'Post 2'
},
{
    title: 'Title 3',
    post: 'Post 3'
}];

const showPosts = () => {
    return new Promise((resolve, reject) => {
        console.log('Postlar gösteriliyor..');
        if (posts) {
            posts.forEach(post => {
                console.log(post);
            });
            resolve(posts);

        } else {
            reject('Postlar gösterilemedi.');
        }
    })
}

const addPost = (newPost) => {
    return new Promise((resolve, reject) => {
        console.log('Post ekleniyor...')
        if (newPost) {
            posts.push(newPost);
            resolve(newPost);
        }
        else {
            reject('Post eklenemedi');
        }
    });

};

async function init() {
    try {
        await showPosts();
        await addPost({ title: 'Title 4', post: 'Post 4' });
        await showPosts();
    }
    catch (e) {
        console.log(e);
    }
}

init();