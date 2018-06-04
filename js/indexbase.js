require.config({
    paths: {
        'jquery': '../lib/jquery',
        //帮助你引入css和html
        //一个组件 一个模块
        'commonjs': 'common',
        'bannerjs': 'banner',
        'indexjs': 'index',
        'bsheader': '../extends/bsheader/bsheader',
        'bsbanner': '../extends/bsbanner/bsbanner',
        'bsbottom': '../extends/bsbottom/bsbottom'
    },
    shim:{
        'commonjs': {
            deps:['jquery','bsheader','bsbottom']
        },
        'bannerjs': {
            deps:['jquery','bsbanner']
        },
        'indexjs': {
            deps:['jquery']
        }
    }
})

require(['jquery', 'commonjs', 'indexjs', 'bannerjs', 'bsheader', 'bsbanner','bsbottom'], function($, common, index, banner, bsheader, bsbanner,bsbottom) {
    $("bsheader").bsheader();
    $('bsbanner').bsbanner();
    $('bsbottom').bsbottom();
    banner();
})