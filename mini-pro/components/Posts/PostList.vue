<template>
    <div class="post-list">
        <PostArchive
                id="2"
                previewText="lorem ipsum dolor set amet"
                title="Hello World"
                thumbnail="image"/>
        <br>
        <hr>
        <br>
        <PostArchive
                id="4"
                previewText="lorem ipsum dolor set amet info x y z"
                title="Hello World continue.."
                thumbnail="image and ok"/>
    </div>

</template>
<script>
    import PostArchive from '~/components/Posts/PostArchive.vue'
    export default {
        components:{
            PostArchive
        }
    }


</script>
<style scoped>

</style>