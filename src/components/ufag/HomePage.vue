<template>
    <div class="mx-auto my-5 w-11/12 sm:w-5/6 md:w-3/4 lg:w-2/3">
        <!--Count Down-->
        <CountdownMod></CountdownMod>
        <!--Media-->
        <div class="text-2xl font-medium text-left my-2">賽事簡介 Game Info</div>
        <hr class="border-black mb-5">
        <div class="sm:flex sm:gap-5 sm:items-center">
            <div class="hidden sm:block basis-1/2">
                <img src="https://ryanxuan930.github.io/cdn/nsysu_athletics/ufag/poster2.png" alt="">
            </div>
            <div class="text-left basis-1/2 font-medium">
                <div class="section">
                    <div class="title">賽事名稱：</div>
                    <div>111學年度中山・高科・高大聯合新生田徑賽</div>
                </div>
                <div class="section">
                    <div class="title">比賽日期：</div>
                    <div>111年10月29日至10月30日。</div>
                </div>
                <div class="section">
                    <div class="title">比賽地點：</div>
                    <div>國立中山大學田徑場 (高雄市鼓山區蓮海路70號)。</div>
                </div>
                <div class="section">
                    <div class="title">主辦單位：</div>
                    <div>國立中山大學田徑隊。</div>
                </div>
                <div class="section">
                    <div class="title">協辦單位：</div>
                    <div>國立高雄科技大學田徑隊、國立高雄大學田徑隊。</div>
                </div>
                <div class="section">
                    <div class="title">指導單位：</div>
                    <div>國立中山大學學生事務處體育發展組。</div>
                </div>
                <div class="section">
                    <div class="title">參加資格：</div>
                    <div>111學年度註冊之國立中山大學、國立高雄科技大學、國立高雄大學大學部、碩、博一年級新生及轉學生。</div>
                </div>
            </div>
            <div class="block sm:hidden">
                <img src="https://ryanxuan930.github.io/cdn/nsysu_athletics/ufag/poster2.png" alt="">
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import { QuickFetch } from '@/quick';
import CountdownMod from '@/components/ufag/CountdownMod.vue';

export default defineComponent({
    setup() {
        const qf = new QuickFetch();
        return {
        };
    },
    components: {
        CountdownMod,
    },
});
</script>

<style lang="scss" scoped>
.title {
    @apply text-xl font-medium text-orange-400 mb-2;
}
.section {
    @apply mb-3;
}
</style>
