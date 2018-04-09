# Server Side Rendering
Rendering the first initial page in the server. The first page the user visits for any given url 
not matter it is a root or another url that first page can be pre rendered in the server on the fly
when the user request it. That is specially where nuxt js comes to place.

## Nuxt Js.
Nuxt js comes with all the functionality where you can create a normal vue app but it actually get pre rendered 
dymanically or statically in the server.
So whenever a user request the page he gets it pre rendered from the server then we get the usual single page application after that
no other page is going to be rendered.

> Nuxt js in not a server side programming.


## Install Nuxt js
The simplest way to create a nuxt app is using the cli.

**Step 1 Install Nuxt js cli globally**
```
sudo npm install -g create-nuxt-app 
``` 


**Step 2 Create the project**
```
create-nux-app <my-project-name>
```

**Run the project**
```
cd <my-project-name>
npm install
npm run dev
```

Go to `http://localhost:3000`

### Routing
Routing in nuxt.js is handled automatically for your  all you have to do is create 
a `.vue` eg `users.vue` components in pages folder. Now you are ready to open your page by `domain.com/user`  
`index.vue` is opened automatically.
  
**Dynamic Uri in the URL**
eg: `domain.com/users/2` here 2 is dynamic.  
For this create a vue file with `_` in from eg: `_id.vue`.   
If you create a `_id.vue` inside a users folder then your route is `https://route.com/user/1`  
Access the dynamic value with `$route.params.id`

**OR**  
you can also create `_id` folder and keep a `index.vue` file inside it. This approach will be helpful if
you are using sub routing.


##### Navigation with Links
Use the `<nuxt-link to='/users'>users</nuxt-link>` to create a async page request.  
**Programmatic Routing :** `this.$router.push('/users/' + this.userId);`

##### Validating Parameter.
```
    export default {
        validate(data) {
            console.log();
        }
    }
```
**validate()** is a special methods that gets executed by the nuxt (not available in vue only) before the route is rendered. 

```
    export default {
        validate(data) {
            return (data.params.id == 1);
        }
    }
```

Now the page is loadable only if the page has the uri id and is only 1.

##### Nested Routing.
**Steps**
* create `users` folder with `index.vue`
* create `users.vue` file just besides the `users` folder.
* Now add a `<nuxt-child/>` component in `users.vue` file.
* Which will render the contents of the `users\index.vue` file in `users.js`
* Check out the `nuxt-hello-world` for reference.


## Layouts Pages and Components.
**Every Page is rendered in Layout**
**Page may have child or Vue components**
**Compoenents are component kept in the component folder**

#### Adding New Layout.
A pages are loaded in the browser via routes. Layouts provide a application frame. Checkout
the layouts folder.  
Acts as the master page of laravel.
The layouts folder in nuxt js will come with a `default.vue` layout installed.  
If you want to create a new layout eg: `users.vue`
```
<template>
    <nuxt></nuxt>
</template>
<style>
    body {
        background: #eee;
    }
</style>
```
Now you can use this layout by using the layout property in you page component.
```
    export default {
        layout: 'users',
     }
```
#### Special Layouts.
```error.vue``` is a reserved name. Is used when your vue application throws a error.

```
<template>
    <h1>An Error Occured</h1>
</template>
```
Now if your nuxt app have any errors your `layouts/error.vue` will load.

#### Component.
You can also use your component in layouts.`~` and `@` means root folder.


## Styling.
```
<style scoped>

</style>
```

If you want to use a central place to add all your css you have `assets folder.`
To link this css file go to `nuxt.conf.js` file in your root folder and add the css to the global css array.
`nuxt.conf.js` is the file that is rendered to each folder.

```
h1 {
    font-family: Arial;
}
```

nuxt.config.js
```
  css: [
      '~/assets/styles/main.css'
  ],
```