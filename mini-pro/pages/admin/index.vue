<template>
    <div class="container admin-page">
        <section>
            <nuxt-link to="/admin/new-post" class="button--green">Create Post</nuxt-link>
            <br>
            <br>
            <PostList :is-admin="true" :posts="posts"/>
        </section>
    </div>
</template>

<script>
    import PostList from '@/components/Posts/PostList'
    import NuxtLink from "../../.nuxt/components/nuxt-link";

    export default {
        layout: 'admin',
        components: {
            NuxtLink,
            PostList
        },
        computed: {
            posts() {
                return this.$store.getters.loadedPosts;
            }
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
