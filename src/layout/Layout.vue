<template>
    <v-app>
        <Header />
        <SideBar />                        
        <Contents />                                        
        <Footer /> 
    </v-app>
</template>

<script>

import Header from './Header.vue';
import Footer from './Footer.vue';
import SideBar from './SideBar.vue';
import Contents from './Contents.vue';

export default {
    components: { Header, Contents, Footer, SideBar },
    name: 'Layout',
};

</script>

<style></style>