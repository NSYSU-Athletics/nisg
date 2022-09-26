<template>
    <div>
        <div class="text-2xl font-medium text-left mb-2">
            <span v-if="language=='zh_tw'">最新消息</span>
            <span v-if="language=='en_us'">Latest News</span>
        </div>
        <hr class="border-black">
        <div class="my-5 filter-button">
            <button class=" bg-black" @click="newsFilter=9">
                <span v-if="language=='zh_tw'">全部公告</span>
                <span v-if="language=='en_us'">All Posts</span>
            </button>
            <button class="bg-red-600" @click="newsFilter=3">
                <span v-if="language=='zh_tw'">重要消息</span>
                <span v-if="language=='en_us'">Important</span>
            </button>
            <button class="bg-yellow-500" @click="newsFilter=1">
                <span v-if="language=='zh_tw'">競賽資訊</span>
                <span v-if="language=='en_us'">Event Info</span>
            </button>
            <button class="bg-green-600" @click="newsFilter=0">
                <span v-if="language=='zh_tw'">一般公告</span>
                <span v-if="language=='en_us'">General</span>
            </button>
            <button class="bg-blue-600" @click="newsFilter=2">
                <span v-if="language=='zh_tw'">檔案下載</span>
                <span v-if="language=='en_us'">Download</span>
            </button>
        </div>
        <table class="bulletin-table">
            <template v-for="(item, index) in newsList" :key="index">
                <tbody @click="$router.push(`/news/post/${item.bulletin_id}`)" v-if="((display=='home' && index<8)|| display=='news') && (newsFilter==9 || item.category==newsFilter) && item.release_status!=0">
                    <tr>
                        <td class="w-[3%]"><span v-if="item.pinned==1" class="material-icons text-3xl text-orange-500">label_important</span></td>
                        <td class="text-left w-[40%] md:w-[20%] lg:w-[15%] xl:w-[12%]">
                            <span v-if="item.category==0" class="category bg-green-600">
                                <span v-if="language=='zh_tw'">一般公告</span>
                                <span v-if="language=='en_us'">General</span>
                            </span>
                            <span v-if="item.category==1" class="category bg-yellow-500">
                                <span v-if="language=='zh_tw'">競賽資訊</span>
                                <span v-if="language=='en_us'">Event Info</span>
                            </span>
                            <span v-if="item.category==2" class="category bg-blue-600">
                                <span v-if="language=='zh_tw'">檔案下載</span>
                                <span v-if="language=='en_us'">Download</span>
                            </span>
                            <span v-if="item.category==3" class="category bg-red-600">
                                <span v-if="language=='zh_tw'">重要消息</span>
                                <span v-if="language=='en_us'">Important</span>
                            </span>
                        </td>
                        <td class="text-left hidden md:table-cell truncate max-w-0">{{item.title}}</td>
                        <td class="w-1/2 text-right md:text-center md:w-[20%]">[{{item.date}}]</td>
                    </tr>
                    <tr class="md:hidden">
                        <td colspan="3" class="text-left border-b-2 w-full truncate max-w-0">{{item.title}}</td>
                    </tr>
                </tbody>
            </template>
        </table>
        <div v-if="display=='home'" class="bg-gray-100 p-3 tezt-center mb-3">
            <button class="bg-gray-500 text-white py-2 px-5" @click="$router.push('/news')">更多 More...</button>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent, ref, computed } from 'vue';
import { QuickFetch } from '@/quick';
import { useStore } from 'vuex';

export default defineComponent({
    props: ['displayMode'],
    setup(props) {
        const qf = new QuickFetch();
        const store = useStore();
        const display = ref(props.displayMode);
        const newsList: any = ref([]);
        const newsFilter = ref(9);
        function getNews() {
            qf.Url('bulletin/list').GetNoH(newsList);
        }
        getNews();
        return {
            newsList,
            newsFilter,
            display,
            language: computed(() => store.state.language),
        };
    },
});
</script>

<style lang="scss" scoped>
.filter-button {
    button {
        @apply text-xl font-medium p-2 w-full sm:w-1/5 hover:bg-opacity-80 text-white duration-100 ;
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
