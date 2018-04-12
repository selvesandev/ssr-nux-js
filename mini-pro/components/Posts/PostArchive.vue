<template>
    <div>
        <h2>
            {{title}}
        </h2>
        <img src="http://s3-us-west-2.amazonaws.com/cdn1.staticpixel.com/wp-content/uploads/2013/02/wayne_mah_430080036.jpg"
             alt="image">
        <p>
            {{previewText}}
        </p>
        <div class="links">
            <nuxt-link :to="'/posts/'+id" class="button--green">Read more</nuxt-link>
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
            }
        }
    }
</script>