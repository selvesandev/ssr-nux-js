<template>
    <div class="post-list">
        <PostArchive
                :is-admin="isAdmin"
                id="2"
                previewText="lorem ipsum dolor set amet"
                title="Hello World"
                thumbnail="image"/>
        <br>
        <hr>
        <br>
        <PostArchive
                :is-admin="isAdmin"
                id="4"
                previewText="lorem ipsum dolor set amet info x y z"
                title="Hello World continue.."
                thumbnail="image and ok"/>
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
            }
        }
    }


</script>
<style scoped>

</style>