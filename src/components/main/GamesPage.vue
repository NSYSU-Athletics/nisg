<template>
    <div class="mx-auto my-5 w-11/12 sm:w-5/6 md:w-3/4 lg:w-2/3">
        <!--Latest News-->
        <GamesList></GamesList>
    </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import { QuickFetch } from '@/quick';
import GamesList from '@/components/main/GamesList.vue';

export default defineComponent({
    setup() {
        return {

        };
    },
    components: {
        GamesList,
    },
});
</script>
