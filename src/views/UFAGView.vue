<template>
    <div class="h-screen flex flex-col">
        <NavBar></NavBar>
        <div class="flex-grow overflow-y-auto flex flex-col">
            <div class="w-full">
                <div class="h-8 md:h-16 bg-gray-700"></div>
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
import NavBar from '@/components/ufag/NavBar.vue';
import Footer from '@/components/ufag/FooterElement.vue';
import VueHorizontal from 'vue-horizontal';

export default defineComponent({
    setup() {
        document.title = '2022中山高科高大聯合新生田徑賽';
        const imgList = reactive([
            'https://ryanxuan930.github.io/cdn/nsysu_athletics/ufag/banner.JPG',
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
