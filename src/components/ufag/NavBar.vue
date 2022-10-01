<template>
    <div class="md:flex shadow">
        <div class="flex items-center">
            <div class="flex-grow md:hidden"></div>
            <img class="h-12 sm:h-20 ml-2 sm:ml-6 mr-3 block" src="@/assets/logo.svg" alt="">
            <div class="text-left">
                <div class="text-xs sm:text-lg font-semibold">111學年度中山・高科・高大聯合新生田徑賽</div>
                <div class="text-xs font-medium">2022 UAAK Freshman Athletics Game in NSYSU</div>
            </div>
            <div class="flex-grow md:hidden"></div>
        </div>
        <div class="hidden md:block md:flex-grow"></div>
        <button @click="openWindow('https://sports.nsysu.edu.tw')" class="nav-button h-20 hidden md:block">中山體育賽事</button>
        <button @click="openWindow('https://sports.nsysu.edu.tw/registration/#/login')" class="nav-button h-20 hidden md:block">報名系統</button>
        <div class="hidden md:block h-12 sm:h-20 w-2 sm:w-6"></div>
    </div>
    <OnClickOutside @trigger="close">
        <div class="h-8 block bg-white shadow absolute top-12 sm:top-20 md:hidden left-0 w-full z-10 cursor-pointer" @click="mobileNav = ! mobileNav">
            <span v-if="mobileNav==true" class="material-icons text-gray-700">arrow_drop_up</span>
            <span v-if="mobileNav==false" class="material-icons text-gray-700">arrow_drop_down</span>
        </div>
        <div :class="{'hidden': !mobileNav, 'block': mobileNav, 'md:block cursor-pointer': true}">
            <div class="md:flex bg-white shadow absolute md:bg-opacity-80 top-20 sm:top-28 md:top-20 left-0 w-full z-10">
                <div class="hidden md:block md:flex-grow"></div>
                <button @click="$router.push('/2022ufag')" class="nav-button button-height block">首頁</button>
                <button @click="$router.push('/2022ufag/about')" class="nav-button button-height block">賽事介紹</button>
                <button @click="$router.push('/2022ufag/regulation')" class="nav-button button-height block">競賽規程</button>
                <button class="nav-button button-height block">場地資訊</button>
                <button class="nav-button button-height block">賽程資訊</button>
                <button class="nav-button button-height block">成績公告</button>
                <button class="nav-button button-height block">交通資訊</button>
                <button @click="openWindow('https://sports.nsysu.edu.tw')" class="nav-button button-height  block md:hidden">中山體育賽事</button>
                <button @click="openWindow('https://sports.nsysu.edu.tw/registration/#/login')" class="nav-button button-height  block md:hidden">報名系統</button>
                <div class="hidden md:block md:flex-grow"></div>
            </div>
        </div>
    </OnClickOutside>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import { OnClickOutside } from '@vueuse/components';

export default defineComponent({
    setup() {
        const mobileNav = ref(false);
        return {
            mobileNav,
            openWindow: (url: string) => { window.open(url); },
            close: () => {
                mobileNav.value = false;
            },
        };
    },
    components: {
        OnClickOutside,
    },
});
</script>

<style lang="scss" scoped>
.nav-button {
    @apply w-full md:w-auto px-5 text-xl font-medium text-gray-700 hover:bg-orange-500 hover:bg-opacity-95 hover:text-white duration-200;
}
.button-height {
    @apply h-12 md:h-16;
}
</style>
