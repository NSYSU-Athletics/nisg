<template>
    <div class="min-h-screen flex flex-col">
        <NavBar></NavBar>
        <div class="flex-grow">
            <router-view></router-view>
        </div>
        <Footer></Footer>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import NavBar from '@/components/main/NavBar.vue';
import Footer from '@/components/main/FooterElement.vue';

export default defineComponent({
    components: {
        NavBar,
        Footer,
    },
});
</script>
