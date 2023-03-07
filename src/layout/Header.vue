<template>
    <v-app-bar app clipped-left dense flat color="green darken-3">
        <v-app-bar-nav-icon dark @click.stop="drawerAction" />
        <v-toolbar-title class="font-weight-bold white--text">PDF 관리</v-toolbar-title>
        <v-spacer></v-spacer>
        <v-btn icon>
            <v-icon class="white--text">mdi-logout</v-icon>
        </v-btn>
    </v-app-bar>
</template>

<script>
import { mapState } from 'vuex';

export default {
    computed: {
        ...mapState(['project']),
    },
    data() {
        return {};
    },
    methods: {
        drawerAction() {
            this.project.mini = !this.project.mini;
        },
    },
}
</script>

<style>
.v-sheet.v-app-bar.v-toolbar:not(.v-sheet--outlined) {
    border-bottom: 1px soild rgb(238, 238, 238) !important;
}
</style>
