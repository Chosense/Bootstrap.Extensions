var develore;
(function (develore) {
    var bootstrap;
    (function (bootstrap) {
        var extensions;
        (function (extensions) {
            function collapse() {
                $(".navbar-collapse.collapse.in").collapse("hide");
            }
            $(document).on("click", ".navbar-collapse a", function (e) {
                collapse();
            });
            $(document).on("click", function (e) {
                collapse();
            });
        })(extensions = bootstrap.extensions || (bootstrap.extensions = {}));
    })(bootstrap = develore.bootstrap || (develore.bootstrap = {}));
})(develore || (develore = {}));
//# sourceMappingURL=navbar-collapse.js.map