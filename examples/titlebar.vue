<style lang="scss">
    body {
        font-family: -apple-system, BlinkMacSystemFont, segoe ui, roboto, oxygen, ubuntu, cantarell, fira sans, droid sans, helvetica neue, sans-serif;
        font-size: 1rem;
        line-height: 1.6;
        color: #2f2f2f;
        user-select: none;
        overflow: hidden;
        padding: 0;
        margin: 0;
    }

    .container {
        margin: 0 auto;
        padding: 0 16px;

        width: 600px;
        max-width: 100%;
    }
</style>

<template>
    <div>
        <v-titlebar :theme="theme" :platform="platform" :on-close="close" :on-maximize="toggleMaximize"
                    :on-minimize="minimize" :is-maximizable="isMaximizable" :is-closable="isClosable"
                    :is-minimizable="isMinimizable" :menu="menu" :show-icon="showIcon" :show-title="showTitle">

            <template slot="icon">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                    <path fill="currentColor"
                          d="M437.2 403.5L320 215V64h8c13.3 0 24-10.7 24-24V24c0-13.3-10.7-24-24-24H120c-13.3 0-24 10.7-24 24v16c0 13.3 10.7 24 24 24h8v151L10.8 403.5C-18.5 450.6 15.3 512 70.9 512h306.2c55.7 0 89.4-61.5 60.1-108.5zM137.9 320l48.2-77.6c3.7-5.2 5.8-11.6 5.8-18.4V64h64v160c0 6.9 2.2 13.2 5.8 18.4l48.2 77.6h-172z"
                          class=""></path>
                </svg>
            </template>

            <template slot="title">
                App Name
            </template>
        </v-titlebar>

        <div class="container">
            <div>
                <select v-model="platform">
                    <option>win32</option>
                    <option>darwin</option>
                    <option>linux</option>
                </select>
            </div>

            <div>
                <select v-model="theme">
                    <option>dark</option>
                    <option>light</option>
                </select>
            </div>

            <div>
                <label>
                    <input type="checkbox" v-model="showIcon">
                    show icon
                </label>
            </div>
            <div>
                <label>
                    <input type="checkbox" v-model="showTitle">
                    show title
                </label>
            </div>
        </div>

    </div>
</template>

<script>
    import {remote} from "electron";

    export default {
        data() {
            return {
                platform: process.platform,
                theme: "dark",
                isMaximizable: remote.getCurrentWindow().isMaximizable(),
                isMinimizable: remote.getCurrentWindow().isMinimizable(),
                isClosable: remote.getCurrentWindow().isClosable(),
                showTitle: true,
                showIcon: true,
                menu: [
                    {
                        label: "Item 1",
                        click:  function(){
                            console.log("Pressed item 1")
                        }
                    },
                    {
                        label: "Item 2",
                        click:  function(){
                            console.log("Pressed item 2")
                        }
                    }
                ]
            }
        },
        methods: {
            close() {
                remote.getCurrentWindow().close();
            },
            toggleMaximize() {
                let win = remote.getCurrentWindow();
                if (win.isMaximized())
                    win.unmaximize();
                else
                    win.maximize();
            },
            minimize() {
                remote.getCurrentWindow().minimize();
            }
        }
    }
</script>