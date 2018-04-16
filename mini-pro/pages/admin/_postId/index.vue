<template>
    <div class="admin-post-page">
        <section class="update-form">
            <PostForm :post="loadedPost" @submit="onSubmit"/>
        </section>
    </div>
</template>

<script>
    import PostForm from '@/components/Admin/PostForm';
    import axios from 'axios';

    export default {
        layout: 'admin',
        components: {
            PostForm
        },
        data() {
            return {
                loadedPost: {
                    author: 'selvesan',
                    title: 'My awesome post',
                    content: 'this is my content section',
                    thumbnailLink: 'http://s3-us-west-2.amazonaws.com/cdn1.staticpixel.com/wp-content/uploads/2013/02/wayne_mah_430080036.jpg'
                }
            }
        },
        methods: {
            onSubmit(editedPost) {
                axios.put('https://nuxt-blog-e6337.firebaseio.com/posts/' + this.$route.params.postId + '.json')
                    .then((res) => {
                        console.log(res);
                    }).catch(err => {
                    console.log(err);
                })
            }
        },
        computed: {
            loadedPost() {

            }
        }

    }
</script>

<style scoped>
    .admin-post-page {
        max-width: 800px;
        margin: auto;
    }
</style>