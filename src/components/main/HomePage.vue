<template>
    <div class="mx-auto my-5 w-11/12 sm:w-5/6 md:w-3/4 lg:w-2/3">
        <!--Count Down-->
        <CountdownMod v-if="countDown.display" :start-time="countDown.time" :name-ch="countDown.ch" :name-en="countDown.en"></CountdownMod>
        <!--Latest News-->
        <PostList :display-mode="'home'"></PostList>
        <!--Media-->
        <div class="text-2xl font-medium text-left my-2">影音資訊</div>
        <hr class="border-black">
    </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import { QuickFetch } from '@/quick';
// eslint-disable-next-line
import PostList from '@/components/main/PostList.vue';
import CountdownMod from '@/components/main/CountdownMod.vue';

export default defineComponent({
    setup() {
        const qf = new QuickFetch();
        const countDown: any = ref({ display: 0, time: '' });
        qf.Url('countdown').GetNoH(countDown);
        return {
            countDown,
        };
    },
    components: {
        CountdownMod,
        PostList,
    },
});
</script>

<style lang="scss" scoped>
</style>
