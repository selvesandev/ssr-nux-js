import Vuex from 'vuex';

const createStore = () => {
    return new Vuex.Store({
        state: {
            loadedPosts: []
        },
        mutations: {
            setPosts(state, posts) {
                state.loadedPosts = posts;
            }
        },
        actions: {
            nuxtServerInit(vuexContent, context) {
                return new Promise((resolve, reject) => {
                    setTimeout(() => {
                        vuexContent.commit('setPosts', [
                            {
                                id: '1',
                                title: 'First Post',
                                previewText: 'The is a preview text',
                                content: 'content is not very long',
                                thumbnail: 'http://s3-us-west-2.amazonaws.com/cdn1.staticpixel.com/wp-content/uploads/2013/02/wayne_mah_430080036.jpg'
                            },
                            {
                                id: '2',
                                title: 'Second Post',
                                previewText: 'The is a preview text for second post',
                                content: 'content is not very long also for second post',
                                thumbnail: 'http://s3-us-west-2.amazonaws.com/cdn1.staticpixel.com/wp-content/uploads/2013/02/wayne_mah_430080036.jpg'
                            }
                        ]);
                        resolve();
//                    reject(new Error('test'));
                    })
                }).catch(e => {
                    context.error(e);
                });
            },
            setPosts(vuexContext, posts) {
                vuexContext.commit('setPosts', posts);
            }
        },
        getters: {
            loadedPosts(state) {
                return state.loadedPosts;
            }
        }
    });
};

export default createStore;