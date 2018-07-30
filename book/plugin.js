require(["gitbook"], function(gitbook) {
    gitbook.events.bind("start", function(e, config) {
        config["baidu-tongji"] = config["baidu-tongji"] || {};
        var url=config["baidu-tongji"].url || "https://hm.baidu.com/hm.js";
        var hm = document.createElement('script');
        hm.src =url+'?' + config["baidu-tongji"].token;
        var s = document.getElementsByTagName('script')[0];
        s.parentNode.insertBefore(hm, s);
    });
});
