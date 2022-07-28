<template>
    <section class="h-screen w-screen bg-pink-400">
        <div class="flex h-20 bg-red-400 px-32 items-center">
            <ul class="flex space-x-10">
                <li><router-link to="/">Home</router-link></li>
                <li><router-link to="/works">Works</router-link></li>
                <li><router-link to="/about">About</router-link></li>
                <li><router-link to="/contact">Contact</router-link></li>
            </ul>
        </div>
        <div class="flex flex-grow w-screen px-32">
            <router-view></router-view>
        </div>
    </section>
    <section>
        <div class="flex h-20 bg-blue-400"></div>
    </section>
</template>