<template>
    <div class="mx-auto my-5 w-11/12 sm:w-5/6 md:w-3/4 lg:w-2/3">
        <!--Latest News-->
        <PostList :display-mode="'news'"></PostList>
    </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import { QuickFetch } from '@/quick';
import PostList from '@/components/main/PostList.vue';

export default defineComponent({
    setup() {
        return {

        };
    },
    components: {
        PostList,
    },
});
</script>
