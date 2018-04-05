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