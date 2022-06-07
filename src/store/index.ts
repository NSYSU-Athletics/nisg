import { createStore } from 'vuex';

export default createStore({
    state: {
        language: 'zh_tw',
    },
    getters: {
    },
    mutations: {
        changeLang(state, langCode: string) {
            state.language = langCode;
        },
    },
    actions: {
    },
    modules: {
    },
});
