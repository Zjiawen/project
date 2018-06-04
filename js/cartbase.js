require.config({
    paths: {
        'jquery': '../lib/jquery',
        //帮助你引入css和html
        //一个组件 一个模块
        'commonjs': 'common',
        'bannerjs': 'banner',
        'cartjs': 'cart',
        'bsheader': '../extends/bsheader/bsheader',
        'bsbanner': '../extends/bsbanner/bsbanner',
        'bsbottom': '../extends/bsbottom/bsbottom'
    },
    shim:{
        'commonjs': {
            deps:['jquery','bsheader','bsbottom','cartjs']
        },
        'bannerjs': {
            deps:['jquery','bsbanner']
        },
        'cartjs': {
            deps:['jquery']
        }
    }
})

require(['jquery', 'commonjs' , 'cartjs', 'bsheader','bsbottom'], function($, common, cart, bsheader,bsbottom) {
    $("bsheader").bsheader();
    $('bsbottom').bsbottom();
})