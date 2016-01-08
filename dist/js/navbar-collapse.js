var develore;
(function (develore) {
    var bootstrap;
    (function (bootstrap) {
        var extensions;
        (function (extensions) {
            function collapse(e) {
                var elem = $(e.target);
                if (elem.parents(".navbar-form").length == 0 || !elem.hasClass("dropdown-toggle")) {
                    $(".navbar-collapse.collapse.in").collapse("hide");
                }
            }
            $(document).on("click", ".navbar-collapse a", function (e) {
                collapse(e);
            });
            $(document).on("click", function (e) {
                collapse(e);
            });
        })(extensions = bootstrap.extensions || (bootstrap.extensions = {}));
    })(bootstrap = develore.bootstrap || (develore.bootstrap = {}));
})(develore || (develore = {}));
//# sourceMappingURL=navbar-collapse.js.map