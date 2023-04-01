// require("./bootstrap");

import { createApp, h } from "vue";
import { createInertiaApp } from "@inertiajs/inertia-vue3";
// import { resolvePageComponent } from "laravel-vite-plugin/inertia-helpers";
import { InertiaProgress } from "@inertiajs/progress";
import { Link, Head } from "@inertiajs/inertia-vue3";
import Layout from "./Shared/Layout.vue";

createInertiaApp({
    resolve: (name) => {
        const pages = import.meta.glob("./Pages/**/*.vue", { eager: true });
        let page = pages[`./Pages/${name}.vue`];
        page.default.layout = page.default.layout || Layout;
        return page;
    },
    // resolve: (name) =>
    //     resolvePageComponent(
    //         `./Pages/${name}.vue`,
    //         import.meta.glob("./Pages/**/*.vue")
    //     ),
    setup({ el, App, props, plugin }) {
        createApp({ render: () => h(App, props) })
            .use(plugin)
            .component("Link", Link)
            .component("Head", Head)
            .mount(el);
    },

    title: (title) => `App - ${title}`,
});

InertiaProgress.init({
    color: "red",
    showSpinner: false,
    delay: 250,
});
