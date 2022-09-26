<template>
    <div class="h-screen flex flex-col">
        <NavBar></NavBar>
        <div class="flex-grow overflow-y-auto flex flex-col">
            <div class="w-full">
                <VueHorizontal :button-between="false">
                    <div v-for="(item, index) in imgList" :key="index" class="w-full">
                        <img :src="item" class="w-full h-auto" alt="">
                    </div>
                </VueHorizontal>
            </div>
            <div class="flex-grow">
                <router-view></router-view>
                <Footer></Footer>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent, reactive } from 'vue';
import NavBar from '@/components/main/NavBar.vue';
import Footer from '@/components/main/FooterElement.vue';
import VueHorizontal from 'vue-horizontal';

export default defineComponent({
    setup() {
        const imgList = reactive([
            'https://ryanxuan930.github.io/cdn/nsysu_athletics/slideshow/02.jpg',
            'https://ryanxuan930.github.io/cdn/nsysu_athletics/slideshow/03.jpg',
        ]);
        return {
            imgList,
        };
    },
    components: {
        NavBar,
        Footer,
        VueHorizontal,
    },
});
</script>
