import Vuex from 'vuex';
import axios from 'axios';

const createStore = () => {
    return new Vuex.Store({
        state: {
            loadedPosts: []
        },
        mutations: {
            setPosts(state, posts) {
                state.loadedPosts = posts;
            },
            addPost(state, post) {
                state.loadedPosts.push(post);
            },
            editPost(state, editedPost) {
                const postIndex = state.loadedPosts.findIndex(post => post.id === editedPost.id);
                state.loadedPosts[postIndex] = editedPost;
            }
        },
        actions: {
            nuxtServerInit(vuexContent, context) {
                return axios.get('https://nuxt-blog-e6337.firebaseio.com/posts.json').then(response => {
                    // console.log(response);
                    const postsArray = [];
                    for (const key in response.data) {
                        postsArray.push({...response.data[key], id: key});
                    }
                    vuexContent.commit('setPosts', postsArray);
                });

//                 return new Promise((resolve, reject) => {
//                     setTimeout(() => {
//                         vuexContent.commit('setPosts', [
//                             {
//                                 id: '1',
//                                 title: 'First Post',
//                                 previewText: 'The is a preview text',
//                                 content: 'content is not very long',
//                                 thumbnail: 'http://s3-us-west-2.amazonaws.com/cdn1.staticpixel.com/wp-content/uploads/2013/02/wayne_mah_430080036.jpg'
//                             },
//                             {
//                                 id: '2',
//                                 title: 'Second Post',
//                                 previewText: 'The is a preview text for second post',
//                                 content: 'content is not very long also for second post',
//                                 thumbnail: 'http://s3-us-west-2.amazonaws.com/cdn1.staticpixel.com/wp-content/uploads/2013/02/wayne_mah_430080036.jpg'
//                             }
//                         ]);
//                         resolve();
// //                    reject(new Error('test'));
//                     })
//                 }).catch(e => {
//                     context.error(e);
//                 });
            },
            setPosts(vuexContext, posts) {
                vuexContext.commit('setPosts', posts);
            },
            addPost(vuexContent, post) {
                const createdPost = {
                    ...post,
                    updatedDate: new Date()
                };
                return axios.post('https://nuxt-blog-e6337.firebaseio.com/posts.json',
                    createdPost
                ).then((response) => {
                    vuexContent.commit('addPost', {...createdPost, id: response.data.name});
                    console.log(response);
                }).catch(err => {
                    console.log(err);
                });
            },

        },
        getters: {
            loadedPosts(state) {
                return state.loadedPosts;
            }
        }
    });
};

export default createStore;