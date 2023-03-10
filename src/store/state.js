const state = {
    project: {
        drawer: true,
        mini: false,
    },

    menus_L0_1: [
        { id: 0, name: 'ABOUT', icon: 'mdi-email', url: '/about' },
        { id: 1, name: '권한관리', icon: 'mdi-account', url: '/auth' },
    ],
    menus_L0_2: [
        { id: 0, name: 'PDF관리', icon: 'mdi-account-cog'},
    ],
    menus_L0_L1_1: [
         { id: 0, name: '발행제한', icon: 'mdi-account-cog'},
    ],
    menus_L0_L1_2: [
        { id: 0, name: 'PCS쿠폰발행', icon: 'mdi-account-cog'},
    ],
    menus_L0_L1_3: [
        { id: 0, name: 'PDF현황조회', icon: 'mdi-account-cog'},
    ],
    menus_L0_L1_4: [
        { id: 0, name: 'PDF환경설정', icon: 'mdi-account-cog'},
    ],

    menus_L0_L1_1_L2: [
        { id: 0, name: 'EP발행제한(GMKT)', icon: 'mdi-cog', url: '/EpIssueGMKT' },
        { id: 1, name: 'EP발행제한(IACC)', icon: 'mdi-cog', url: '/EpIssueIACC' },
        { id: 2, name: 'PCS발행제한(GMKT)', icon: 'mdi-cog', url: '/PcsIssueGMKT' },
        { id: 3, name: 'PCS발행제한(IACC)', icon: 'mdi-cog', url: '/PcsIssueIACC' },
    ],

    menus_L0_L1_2_L2: [
        { id: 0, name: 'PCS_P3(카탈로그)(승인포함)(GMKT)', icon: 'mdi-cog', url: '/CouponIssueP3GMKT' },
        { id: 1, name: 'PCS_P3(카탈로그)(승인포함)(IACC)', icon: 'mdi-cog', url: '/CouponIssueP3IACC' },
        { id: 2, name: 'PCS_P4(카테고리)(승인포함)(GMKT)', icon: 'mdi-cog', url: '/CouponIssueP4GMKT' },
        { id: 3, name: 'PCS_P4(카테고리)(승인포함)(IACC)', icon: 'mdi-cog', url: '/CouponIssueP4IACC' },                        
    ],

    menus_L0_L1_3_L2: [
        { id: 0, name: '요약보고서(GMKT)', icon: 'mdi-cog', url: '/ReportGMKT' },
        { id: 1, name: '요약보고서(IACC)', icon: 'mdi-cog', url: '/ReportIACC' },
        { id: 2, name: '인터넷최저가조회(GMKT)', icon: 'mdi-cog', url: '/PriceGMKT' },
        { id: 3, name: '인터넷최저가조회(IACC)', icon: 'mdi-cog', url: '/PriceIACC' },
        { id: 4, name: 'PDF상품정보조회V5(GMKT)', icon: 'mdi-cog', url: '/PDFInformGMKT' },
        { id: 5, name: 'PDF상품정보조회V5(IACC)', icon: 'mdi-cog', url: '/PDFInformIACC' },
        { id: 6, name: '카탈로그정보조회(GMKT)', icon: 'mdi-cog', url: '/CatalogInformGMKT' },
        { id: 7, name: '카탈로그정보조회(IACC)', icon: 'mdi-cog', url: '/CatalogInformIACC' },
    ],    

    menus_L0_L1_4_L2: [
        { id: 0, name: 'EP환경설정(GMKT)', icon: 'mdi-cog', url: '/EpSettingGMKT' },
        { id: 1, name: 'EP환경설정(IACC)', icon: 'mdi-cog', url: '/EpSettingIACC' },
    ],

}

export default state;
