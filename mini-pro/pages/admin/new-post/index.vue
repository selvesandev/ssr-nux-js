<template>
    <div class="content">
        <PostForm @submit="onSubmitted"/>
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
            return {}
        },
        methods: {
            onSubmitted(postData) {
                this.$store.dispatch('addPost', postData).then(() => {
                    this.$router.push('/admin')
                })
            }
        }
    }
</script>

<style scoped>
    .content {
        max-width: 800px;
        margin: auto;
    }
</style>