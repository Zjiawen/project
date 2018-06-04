require.config({
    paths: {
        'jquery': '../lib/jquery',
        //帮助你引入css和html
        //一个组件 一个模块
        'commonjs': 'common',
        'bannerjs': 'banner',
        'detailjs': 'detail',
        'bsheader': '../extends/bsheader/bsheader',
        'bsbanner': '../extends/bsbanner/bsbanner',
        'bsbottom': '../extends/bsbottom/bsbottom',
        'fdj': '../lib/jquery.ez-plus'
    },
    shim:{
        'commonjs': {
            deps:['jquery','bsheader','bsbottom','detailjs']
        },
        'bannerjs': {
            deps:['jquery','bsbanner']
        },
        'detailjs': {
            deps:['jquery','fdj']
        },
        'fdj': {
            deps:['jquery']
        }
    }
})

require(['jquery', 'commonjs', 'detailjs', 'bsheader','bsbottom','fdj'], function($, common,detail, bsheader,bsbottom,fdj) {
    $("bsheader").bsheader();
    $('bsbottom').bsbottom();
})