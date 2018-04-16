<template>
    <div class="posts-page">
        <PostList :posts="loadedPosts"/>
    </div>
</template>

<script>

    export default {
        //executed in the server
        fetch(context) {

        },
        computed: {
            loadedPosts() {
                return this.$store.getters.loadedPosts;
            }
        }
    }
</script>

<style scoped>
    .posts-page {
        padding: 20px 0;
        display: flex;
        justify-content: center;
        align-items: center;
    }
</style>