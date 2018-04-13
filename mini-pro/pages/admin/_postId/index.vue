<template>
    <div class="admin-post-page">
        <section class="update-form">
            <PostForm :post="loadedPost"/>
        </section>
    </div>
</template>

<script>
    import PostForm from '@/components/Admin/PostForm';

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
        }
    }
</script>

<style scoped>
    .admin-post-page {
        max-width: 800px;
        margin: auto;
    }
</style>