<template>
    <div class="content">
        <PostForm/>
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
            return {}
        },
        methods: {}
    }
</script>

<style scoped>
    .content {
        max-width: 800px;
        margin: auto;
    }
</style>