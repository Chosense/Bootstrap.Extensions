
module develore.bootstrap.extensions {
    function collapse(e: BaseJQueryEventObject) {
        var elem = $(e.target);
        if (elem.parents(".navbar-form").length == 0 && !elem.hasClass("dropdown-toggle")) {
            $(".navbar-collapse.collapse.in").collapse("hide");
        }
    }

    $(document).on("click", ".navbar-collapse a", function (e: BaseJQueryEventObject) {
        collapse(e);
    });
    $(document).on("click", function (e: BaseJQueryEventObject) {
        collapse(e);
    });
}