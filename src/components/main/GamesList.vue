<template>
    <div>
        <div class="text-2xl font-medium text-left mb-2">
            <span v-if="language=='zh_tw'">賽事資訊</span>
            <span v-if="language=='en_us'">Games</span>
        </div>
        <hr class="border-black">
        <div class="my-5 filter-button">
            <button class=" bg-black" @click="gameFilter=9">
                <span v-if="language=='zh_tw'">全部賽事</span>
                <span v-if="language=='en_us'">All Games</span>
            </button>
            <button class="bg-red-600" @click="gameFilter=1">
                <span v-if="language=='zh_tw'">新生盃</span>
                <span v-if="language=='en_us'">NFSG</span>
            </button>
            <button class="bg-yellow-500" @click="gameFilter=2">
                <span v-if="language=='zh_tw'">系際盃</span>
                <span v-if="language=='en_us'">NISG</span>
            </button>
            <button class="bg-green-600" @click="gameFilter=0">
                <span v-if="language=='zh_tw'">其他賽事</span>
                <span v-if="language=='en_us'">Others</span>
            </button>
        </div>
        <table class="bulletin-table">
            <template v-for="(item, index) in gameList" :key="index">
                <tbody @click="$router.push(`/games/${item.game_id}`)" v-if="(gameFilter==9 || item.nsysu_game==gameFilter)">
                    <tr>
                        <td class="text-left w-[40%] md:w-[20%] lg:w-[15%]">
                            <span v-if="item.nsysu_game==1" class="category bg-red-600">
                                <span v-if="language=='zh_tw'">新生盃</span>
                                <span v-if="language=='en_us'">NFSG</span>
                            </span>
                            <span v-if="item.nsysu_game==2" class="category bg-yellow-500">
                                <span v-if="language=='zh_tw'">系際盃</span>
                                <span v-if="language=='en_us'">NISG</span>
                            </span>
                            <span v-if="item.nsysu_game==0" class="category bg-green-600">
                                <span v-if="language=='zh_tw'">其他賽事</span>
                                <span v-if="language=='en_us'">Others</span>
                            </span>
                        </td>
                        <td class="text-left hidden md:table-cell truncate max-w-0">
                            <span v-if="language=='zh_tw'">( {{item.sport_ch}} ) - {{item.name_ch}}</span>
                            <span v-if="language=='en_us'">( {{item.sport_en}} ) - {{item.name_en}}</span>
                        </td>
                        <td class="w-1/2 text-right md:text-center md:w-[20%]">[{{item.event_start}}]</td>
                    </tr>
                    <tr class="md:hidden">
                        <td colspan="3" class="text-left border-b-2 w-full truncate max-w-0">
                            <span v-if="language=='zh_tw'">( {{item.sport_ch}} ) - {{item.name_ch}}</span>
                            <span v-if="language=='en_us'">( {{item.sport_en}} ) - {{item.name_en}}</span>
                        </td>
                    </tr>
                </tbody>
            </template>
        </table>
    </div>
</template>

<script lang="ts">
import { defineComponent, ref, computed } from 'vue';
import { QuickFetch } from '@/quick';
import { useStore } from 'vuex';

export default defineComponent({
    setup() {
        const qf = new QuickFetch();
        const store = useStore();
        const gameList: any = ref([]);
        const gameFilter = ref(9);
        function getGames() {
            qf.Url('games/list').GetNoH(gameList);
        }
        getGames();
        return {
            gameList,
            gameFilter,
            language: computed(() => store.state.language),
        };
    },
});
</script>

<style lang="scss" scoped>
.filter-button {
    button {
        @apply text-xl font-medium p-2 w-full sm:w-1/4 hover:bg-opacity-80 text-white duration-100 ;
    }
}
.bulletin-table {
    @apply w-full bg-gray-100;
    tbody {
        @apply hover:bg-gray-200 duration-100 cursor-pointer;
    }
    td, th {
        @apply p-3 md:border-b-2 ;
    }
    .category {
        @apply text-white px-2 py-1 block text-center;
    }
    button {
        @apply inline-block text-white px-2 py-1 rounded m-1 bg-orange-400 hover:bg-orange-300 duration-200;
    }
}
</style>
