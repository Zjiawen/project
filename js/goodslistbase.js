require.config({
    paths: {
        'jquery': '../lib/jquery',
        //帮助你引入css和html
        //一个组件 一个模块
        'commonjs': 'common',
        'bannerjs': 'banner',
        'goodslistjs': 'goodslist',
        'bsheader': '../extends/bsheader/bsheader',
        'bsbanner': '../extends/bsbanner/bsbanner',
        'bsbottom': '../extends/bsbottom/bsbottom'
    },
    shim:{
        'commonjs': {
            deps:['jquery','bsheader','bsbottom','goodslistjs']
        },
        'goodslistjs': {
            deps:['jquery']
        }
    }
})

require(['jquery', 'commonjs', 'goodslistjs', 'bsheader', 'bsbanner','bsbottom','bannerjs'], function($, common,goodslist, bsheader, bsbanner,bsbottom,banner) {
    $("bsheader").bsheader();
    $('bsbottom').bsbottom();
    $('bsbanner').bsbanner();
    banner();
})

    