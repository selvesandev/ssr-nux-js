<template>
    <div class="single-post-page">
        <section class="post">
            <h1>{{loadedPost.title}}</h1>
            <div class="post-details">
                <div>{{loadedPost.updatedDate}}</div>
                <div>Created By {{loadedPost.author}}</div>
            </div>
            <p>
                {{loadedPost.content}}
            </p>
            <section class="post-feedback">
                you can contact us at <a href="">Here.</a>
            </section>
        </section>
    </div>
</template>


<script>
    import axios from 'axios';

    export default {
        head: {
            title: 'A blog post'
        },
        asyncData(context, callback) {
            return axios.get('https://nuxt-blog-e6337.firebaseio.com/' + context.params.id + '.json').then(response => {
                return {
                    loadedPosts: response.data
                }
            }).catch(err => {
                context.error(err);
            })

//            setTimeout(() => {
//                callback(null, {
//                    loadedPost: {
//                        id: '1',
//                        title: 'Title of the post (#id:' + context.params.id + ')',
//                        previewText: '',
//                        author: 'selvesan',
//                        updatedData: new Date(),
//                        content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad amet cupiditate ' +
//                        'dolore eius eligendi explicabo fuga, fugit itaque' +
//                        'maxime molestiae molestias officia quas, repudiandae' +
//                        'sapiente similique tenetur ullam.' +
//                        'Nesciunt, quasi.'
//                    }
//                })
//            }, 1000)
        }
    }
</script>

<style scoped>
    .single-post-page {
        max-width: 800px;
        margin: auto;
    }
</style>