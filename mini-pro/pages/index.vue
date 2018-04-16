<template>
    <section class="container">
        <div>
            <Logo/>
            <div style="max-width: 800px">
                <h1 class="subtitle">
                    Get the latest Tech News
                </h1>
                <br>
                <br>
                <PostList :posts="loadedPosts"/>

            </div>
        </div>
    </section>
</template>

<script>
    import Logo from '~/components/Logo.vue'
    import NuxtLink from "../.nuxt/components/nuxt-link";

    export default {
        components: {
            NuxtLink,
            Logo,
        },
        data() {
            return {}
        },
        //executed in the server
//        asyncData(context, callback) {
//            setTimeout(() => {
//                callback(null, {
//                    loadedPosts: [
//                        {
//                            id: '1',
//                            title: 'First Post',
//                            previewText: 'The is a preview text',
//                            content: 'content is not very long',
//                            thumbnail: 'http://s3-us-west-2.amazonaws.com/cdn1.staticpixel.com/wp-content/uploads/2013/02/wayne_mah_430080036.jpg'
//                        },
//                        {
//                            id: '2',
//                            title: 'Second Post',
//                            previewText: 'The is a preview text for second post',
//                            content: 'content is not very long also for second post',
//                            thumbnail: 'http://s3-us-west-2.amazonaws.com/cdn1.staticpixel.com/wp-content/uploads/2013/02/wayne_mah_430080036.jpg'
//                        }
//                    ]
//                })
//            }, 1000);
//        },
        created() {
        },
        computed: {
            loadedPosts() {
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

    .title {
        font-family: "Quicksand", "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif; /* 1 */
        display: block;
        font-weight: 300;
        font-size: 100px;
        color: #35495e;
        letter-spacing: 1px;
    }

    .subtitle {
        font-weight: 300;
        font-size: 42px;
        color: #526488;
        word-spacing: 5px;
        padding-bottom: 15px;
    }

    .links {
        padding-top: 15px;
    }
</style>
