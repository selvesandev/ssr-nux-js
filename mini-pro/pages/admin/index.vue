<template>
    <div class="container admin-page">
        <section>
            <button class="button--green">Create Post</button>
            <br>
            <br>
            <PostList/>
        </section>
    </div>
</template>

<script>
    import PostList from '@/components/Posts/PostList'

    export default {
        components: {
            PostList
        }
    }
</script>

<style>
    .container {
        padding: 20px 0;
        background: url("~assets/images/background.jpg");
        min-height: 60vh;
        display: flex;
        justify-content: center;
        align-items: center;
        text-align: center;
    }
</style>
