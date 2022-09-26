<template>
    <div  class="mx-auto my-5 w-11/12 sm:w-5/6 md:w-3/4 lg:w-2/3 text-left">
        <div @click="$router.push('/news')" class="py-5 text-left text-gray-500 hover:text-gray-400 duration-200 cursor-pointer text-xl inline-block">
            <span v-if="language=='zh_tw'">回上頁</span>
            <span v-if="language=='en_us'">Back</span>
        </div>
        <div class="text-2xl font-medium text-left mb-4">
            <span v-if="language=='zh_tw'">最新消息</span>
            <span v-if="language=='en_us'">Latest News</span>
        </div>
        <hr class="border-black">
        <div class="py-4">
            <div class="flex">
                <div class="text-lg basis-1/2 text-left">
                    <span v-if="data.pinned==1" class="category bg-orange-500 mr-2">
                        <span v-if="language=='zh_tw'">置頂</span>
                        <span v-if="language=='en_us'">Pinned</span>
                    </span>
                    <span v-if="data.category==0" class="category bg-green-600">
                        <span v-if="language=='zh_tw'">一般公告</span>
                        <span v-if="language=='en_us'">General</span>
                    </span>
                    <span v-if="data.category==1" class="category bg-yellow-500">
                        <span v-if="language=='zh_tw'">競賽資訊</span>
                        <span v-if="language=='en_us'">Event Info</span>
                    </span>
                    <span v-if="data.category==2" class="category bg-blue-600">
                        <span v-if="language=='zh_tw'">檔案下載</span>
                        <span v-if="language=='en_us'">Download</span>
                    </span>
                    <span v-if="data.category==3" class="category bg-red-600">
                        <span v-if="language=='zh_tw'">重要消息</span>
                        <span v-if="language=='en_us'">Important</span>
                    </span>
                </div>
                <div class="text-lg basis-1/2 text-right">[{{data.date}}]</div>
            </div>
            <div class="text-2xl mt-4">{{data.title}}</div>
        </div>
        <hr>
        <div class="py-4 text-left">
            <p v-if="data.content">{{data.content}}</p>
            <span v-else>本公告無內文 No Content</span>
        </div>
        <hr>
        <div class="py-4" v-if="links.length>0">
            <div class="mb-3 text-xl">檔案連結</div>
            <template v-for="(item, index) in links" :key="index">
                <div class="text-orange-400">
                    <a :href="item.url" target="_blank">{{item.title}}</a>
                </div>
            </template>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent, ref, computed } from 'vue';
import { QuickFetch } from '@/quick';
import { useRoute } from 'vue-router';
import { useStore } from 'vuex';

export default defineComponent({
    setup(props) {
        const qf = new QuickFetch();
        const route = useRoute();
        const store = useStore();
        const data: any = ref({});
        const links: any = ref([]);
        function getNews() {
            qf.Url(`bulletin/post/${route.params.postId}`).GetNoH(data).then(() => {
                links.value = JSON.parse(data.value.links);
            });
        }
        getNews();
        return {
            data,
            language: computed(() => store.state.language),
            links,
        };
    },
});
</script>

<style lang="scss" scoped>
.category {
    @apply text-white px-2 py-1 inline-block text-center;
}
</style>
