<template>
    <OnClickOutside @trigger="()=>{navListBtn=0; mobileNav=false}">
        <div class="md:flex bg-black bg-opacity-75 p-2 justify-between justify-items-stretch z-30">
            <div class="md:flex-grow"></div>
            <div class="md:hidden text-white text-right leading-normal">
                <span class="material-icons inline-block p-1 hover:bg-white hover:text-black rounded duration-300" @click="mobileNav = !mobileNav">menu</span>
            </div>
            <div :class="{'hidden': !mobileNav, 'md:flex': true}">
                <div class="button" @click="$router.push('/')">{{dict.home[language]}}</div>
                <!--
                <div @click="navListBtn = navListBtn==1?0:1" class="button">
                    <span>{{dict.event_list[language]}}</span>
                    <div v-show="navListBtn==1" class="drop-list-normal">
                        <div>{{dict.event_list.sublink.nfcc[language]}}</div>
                        <div>{{dict.event_list.sublink.nisg[language]}}</div>
                        <div>{{dict.event_list.sublink.nao[language]}}</div>
                        <div>{{dict.event_list.sublink.others[language]}}</div>
                    </div>
                </div>
                -->
                <div class="button" @click="$router.push('/games')">{{dict.event_list[language]}}</div>
                <div class="button" @click="$router.push('/news')">{{dict.news[language]}}</div>
                <div class="button" @click="windowOpen('https://sports.nsysu.edu.tw/registration/#/login')">{{dict.registration[language]}}</div>
                <!--
                <div @click="navListBtn = navListBtn>=2?0:2" class="button">
                    <span>{{dict.school_team[language]}}</span>
                    <div v-show="navListBtn>=2 && navListBtn<=4" class="drop-list-multiple">
                        <div @click.stop="navListBtn = navListBtn==3?0:3">
                            <span>{{dict.school_team.sublink.ball_games[language]}}</span>
                            <div v-show="navListBtn==3" class="second-list">
                                <div>男子籃球隊</div>
                                <div>女子籃球隊</div>
                                <div>男子排球隊</div>
                                <div>女子排球隊</div>
                                <div>男子羽球隊</div>
                                <div>女子羽球隊</div>
                                <div>男子桌球隊</div>
                                <div>女子桌球隊</div>
                                <div>男子網球隊</div>
                                <div>女子網球隊</div>
                                <div>棒球隊</div>
                                <div>足球隊</div>
                            </div>
                        </div>
                        <div @click.stop="navListBtn = navListBtn==4?0:4">
                            <span>{{dict.school_team.sublink.others[language]}}</span>
                            <div v-show="navListBtn==4" class="second-list">
                                <template v-for="(item, index) in othersList" :key="index">
                                    <div>{{dict.school_team.sublink.others.sublink[item][language]}}</div>
                                </template>
                            </div>
                        </div>
                    </div>
                </div>-->
                <div @click="navListBtn = navListBtn==5?0:5" class="button">
                    <span>{{dict.links[language]}}</span>
                    <div v-show="navListBtn==5" class="drop-list-normal">
                        <!--<div>{{dict.links.sublink.about[language]}}</div>-->
                        <div>{{dict.links.sublink.epidemic[language]}}</div>
                        <div>{{dict.links.sublink.media[language]}}</div>
                        <div @click="windowOpen('https://www.nsysu.edu.tw/')">{{dict.links.sublink.nsysu[language]}}</div>
                    </div>
                </div>
                <div v-if="language=='en_us'" @click="language='zh_tw'" class="button">中文</div>
                <div v-if="language=='zh_tw'" @click="language='en_us'" class="button">ENGLISH</div>
            </div>
            <div class="md:flex-grow"></div>
        </div>
    </OnClickOutside>
</template>

<script lang="ts">
import { defineComponent, ref, watch } from 'vue';
import { useStore } from 'vuex';
import Dict from '@/assets/language/navbar.json';
import { OnClickOutside } from '@vueuse/components';

export default defineComponent({
    setup() {
        // vuex
        const store = useStore();
        // eslint-disable-next-line
        const dict: any = Dict;
        const navListBtn = ref(0);
        const language = ref(store.state.language);
        watch(language, () => {
            store.commit('changeLang', language.value);
        });
        return {
            navListBtn,
            mobileNav: ref(false),
            dict,
            language,
            ballGamesList: ['mens_basketball', 'womens_basketball'],
            othersList: ['athletics', 'swimming_men', 'swimming_women', 'archery', 'frisbee', 'sailing'],
            windowOpen: (url: string) => { window.open(url); },
        };
    },
    components: {
        OnClickOutside,
    },
});
</script>

<style lang="scss" scoped>
.button {
    @apply mx-1 lg:mx-2 my-auto relative text-white text-xl font-medium hover:bg-white hover:bg-opacity-90 hover:text-black duration-300 px-3 py-2 rounded cursor-pointer z-40;
}
.drop-list-normal {
    @apply md:absolute md:top-14 md:left-0 bg-black bg-opacity-75 shadow rounded text-white whitespace-nowrap text-left z-50 cursor-pointer;
    & > div {
        @apply p-3 text-center md:text-left hover:bg-gray-50 hover:text-black duration-300 hover:shadow cursor-pointer;
    }
}
.drop-list-multiple {
    @apply md:absolute md:top-14 md:left-0 bg-black bg-opacity-75 shadow rounded text-white text-left z-50;
    & > div {
        @apply p-3 text-center md:text-left hover:bg-gray-50 hover:text-black duration-300 hover:shadow whitespace-nowrap cursor-pointer;
    }
    .second-list {
        @apply md:absolute md:top-0 md:ml-32 bg-black bg-opacity-75 shadow rounded text-white text-left z-50;
        & > div {
            @apply p-3 text-center md:text-left hover:bg-gray-50 hover:text-black duration-300 hover:shadow whitespace-nowrap cursor-pointer;
        }
    }
}
</style>
