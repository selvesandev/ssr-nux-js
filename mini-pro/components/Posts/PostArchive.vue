<template>
    <div>
        <h2>
            {{title}}
        </h2>
        <img :src="thumbnail"
             alt="image">
        <p>
            {{previewText}}
        </p>
        <div class="links">
            <nuxt-link :to="postLink" class="button--green">Read more</nuxt-link>
            <!--<a href="https://github.com/nuxt/nuxt.js" target="_blank" class="button&#45;&#45;grey">GitHub</a>-->
        </div>
    </div>
</template>
<script>
    export default {
        name: 'PostArchive',
        props: {
            id: {
                type: String,
                required: true
            },
            title: {
                type: String,
                required: true
            },
            previewText: {
                type: String,
                required: true
            },
            thumbnail: {
                type: String,
                required: true
            },
            isAdmin: {
                type: Boolean,
                required: true
            }
        },
        computed: {
            postLink() {
                return this.isAdmin ? '/admin/' + this.id : '/posts/' + this.id;
            }
        }
    }
</script>