
module develore.bootstrap.extensions {
    function collapse() {
        $(".navbar-collapse.collapse.in").collapse("hide");
    }

    $(document).on("click", ".navbar-collapse a", function (e: BaseJQueryEventObject) {
        collapse();
    });
    $(document).on("click", function (e: BaseJQueryEventObject) {
        collapse();
    });
}