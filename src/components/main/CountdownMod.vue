<template>
    <div class="bg-yellow-400 py-2 px-3 md:px-5 w-full box-border mb-5">
        <div class="bg-yellow-400 text-center text-black mb-2 font-semibold text-xl md:text-2xl">
            <span v-if="language=='zh_tw'">{{titleCh}}</span>
            <span v-if="language=='en_us'">{{titleEn}}</span>
        </div>
        <div class="w-full p-1 text-2xl md:text-3xl lg:text-5xl text-center bg-black text-yellow-400">
            <VueCountdown :time="time" v-slot="{days,hours,minutes,seconds}">
                <span style="font-family: Digital;">
                    {{ String(days).padStart(2,'0') }} day {{ String(hours).padStart(2,'0') }} hrs {{ String(minutes).padStart(2,'0') }} min {{ String(seconds).padStart(2,'0') }} sec
                </span>
            </VueCountdown>
        </div>
        <div class="bg-yellow-400 text-center text-black mt-2 text-lg" style="font-family: Audiowide-Regular">TechNSport</div>
    </div>
</template>

<script lang="ts">
import { ref, computed } from 'vue';
import VueCountdown from '@chenfengyuan/vue-countdown';
import { useStore } from 'vuex';

export default {
    props: ['startTime', 'nameCh', 'nameEn'],
    setup(props: any) {
        const now:any = new Date();
        const store = useStore();
        const targetTime:any = new Date(props.startTime.replace(/-/g, '/'));
        const timeDiff = targetTime - now;
        const time = ref(timeDiff);
        const titleCh = ref(props.nameCh);
        const titleEn = ref(props.nameEn);
        return {
            time,
            titleCh,
            titleEn,
            language: computed(() => store.state.language),
        };
    },
    components: {
        VueCountdown,
    },
};
</script>

<style lang="scss" scoped>
@font-face {
    font-family: Digital;
    src: url("https://ryanxuan930.github.io/cdn/nsysu_athletics/font/digital.ttf");
}
@font-face {
    font-family: Audiowide-Regular;
    src: url("https://ryanxuan930.github.io/cdn/nsysu_athletics/font/Audiowide-Regular.ttf");
}
</style>
