<template>
    <div  class="mx-auto my-5 w-11/12 sm:w-5/6 md:w-3/4 lg:w-2/3 text-left">
        <div @click="$router.push('/games')" class="py-5 text-left text-gray-500 hover:text-gray-400 duration-200 cursor-pointer text-xl inline-block">
            <span v-if="language=='zh_tw'">回上頁</span>
            <span v-if="language=='en_us'">Back</span>
        </div>
        <div class="text-2xl font-medium text-left mb-4">
            <span v-if="language=='zh_tw'">賽事資訊</span>
            <span v-if="language=='en_us'">Games</span>
        </div>
        <hr class="border-black">
        <div class="py-4">
            <div class="flex">
                <div class="text-lg basis-1/2 text-left">
                    <span class="category bg-orange-500 mr-2">
                        <span v-if="language=='zh_tw'">{{data.sport_ch}}</span>
                        <span v-if="language=='en_us'">{{data.sport_en}}</span>
                    </span>
                    <span v-if="data.nsysu==0" class="category bg-blue-600 mr-2">
                        <span v-if="language=='zh_tw'">限中山師生</span>
                        <span v-if="language=='en_us'">NSYSU Only</span>
                    </span>
                    <span v-if="data.nsysu_game==0" class="category bg-green-600">
                        <span v-if="language=='zh_tw'">其他賽事</span>
                        <span v-if="language=='en_us'">Others</span>
                    </span>
                    <span v-if="data.nsysu_game==2" class="category bg-yellow-500">
                        <span v-if="language=='zh_tw'">系際盃</span>
                        <span v-if="language=='en_us'">NISG</span>
                    </span>
                    <span v-if="data.nsysu_game==1" class="category bg-red-600">
                        <span v-if="language=='zh_tw'">新生盃</span>
                        <span v-if="language=='en_us'">NFSG</span>
                    </span>
                </div>
                <div class="text-lg basis-1/2 text-right">[{{data.event_start}}]</div>
            </div>
            <div class="text-2xl mt-4">{{data.name_ch}}</div>
            <div class="text-lg mt-1">{{data.name_en}}</div>
        </div>
        <hr>
        <div class="content">
            <div>
                <span v-if="language=='zh_tw'">報名期限：</span>
                <span v-if="language=='en_us'">Registration period ：</span>
                <span>{{data.reg_start}} - {{data.reg_end}}</span>
            </div>
            <div v-if="data.use_reg==1 || (data.use_rag==0 && data.reg_url!=null)">
                <span v-if="language=='zh_tw'">報名系統：</span>
                <span v-if="language=='en_us'">Registration system：</span>
                <button class="button" @click="openWindow(1, data.use_reg, data.reg_url)">
                    <span v-if="language=='zh_tw'">點此前往</span>
                    <span v-if="language=='en_us'">Click here</span>
                </button>
            </div>
            <div v-if="data.use_site==0 && data.site_url!=null">
                <span v-if="language=='zh_tw'">賽事首頁：</span>
                <span v-if="language=='en_us'">Official website：</span>
                <button class="button" @click="openWindow(2, data.use_site, data.site_url)">
                    <span v-if="language=='zh_tw'">點此前往</span>
                    <span v-if="language=='en_us'">Click here</span>
                </button>
            </div>
            <hr class="my-2">
            <div>
                <span v-if="language=='zh_tw'">賽事內容：</span>
                <span v-if="language=='en_us'">Content：</span>
            </div>
            <p v-if="data.info">{{data.info}}</p>
            <span v-else>
                <span v-if="language=='zh_tw'">無資訊</span>
                <span v-if="language=='en_us'">No content</span>
            </span>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent, ref, computed } from 'vue';
import { QuickFetch } from '@/quick';
import { useRoute } from 'vue-router';
import { useStore } from 'vuex';

export default defineComponent({
    setup() {
        const qf = new QuickFetch();
        const route = useRoute();
        const store = useStore();
        const data: any = ref({});
        function getGame() {
            qf.Url(`games/${route.params.gameId}`).GetNoH(data);
        }
        getGame();
        return {
            data,
            language: computed(() => store.state.language),
            openWindow: (type: number, params: number, url: string|null) => {
                if (type === 1) {
                    if (params === 0 && url !== null) {
                        window.open(url);
                    } else {
                        window.open('https://sports.nsysu.edu.tw/registration/#/login');
                    }
                } else if (type === 2) {
                    if (params === 0 && url !== null) {
                        window.open(url);
                    }
                }
            },
        };
    },
});
</script>

<style lang="scss" scoped>
.category {
    @apply text-white px-2 py-1 inline-block text-center;
}
.button {
    @apply bg-orange-400 text-white px-2 py-0.5 rounded;
}
.content {
    @apply py-4 text-left text-lg;
    div {
        @apply my-2;
    }
}
</style>
