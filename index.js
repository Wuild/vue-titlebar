import TitlebarComponent from "./components/titlebar"

export default {
    install(Vue) {
        Vue.component(TitlebarComponent.name, TitlebarComponent);
    }
};