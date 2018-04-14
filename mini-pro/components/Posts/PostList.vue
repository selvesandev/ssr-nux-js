<template>
    <div class="post-list">
        <PostArchive
                v-for="post in posts"
                :key="post.id"
                :is-admin="isAdmin"
                :id="post.id"
                :previewText="post.previewText"
                :title="post.title"
                :thumbnail="post.thumbnail"/>
    </div>

</template>
<script>
    import PostArchive from '~/components/Posts/PostArchive.vue'

    export default {
        components: {
            PostArchive
        },
        props: {
            isAdmin: {
                type: Boolean,
                default: false
            },
            posts: {
                type: Array,
                required: true
            }
        }
    }


</script>
<style scoped>

</style>