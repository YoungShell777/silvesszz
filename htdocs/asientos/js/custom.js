// 00325167 - Number and currency format
if (typeof jQuery !== "undefined") {
    $(document).ready(function () {
        try {
            let pageObserver;
            if ($("#page_selection_seatMap").length > 0) {
                pageObserver = "#page_selection_seatMap"
            } else if ($("#page_selection_eventSeat").length > 0) {
                pageObserver = "#page_selection_eventSeat"
            } else if ($("#page_checkout_orderSummary").length > 0) {
                pageObserver = "#page_checkout_orderSummary"
            } else {
                pageObserver = ".page_container"
            }
            $(".int_part").each(function(){
                $(this).html($(this).html().replaceAll(",", "."))
                $(this).html($(this).html().replaceAll(" ", "."))
            })
            var observer = new MutationObserver(function (mutations) {
                if (document.querySelector(".amount.amount_COP")) {
                    setTimeout(function(){
                        $(".int_part").each(function(){
                            $(this).html($(this).html().replaceAll(",", "."))
                            $(this).html($(this).html().replaceAll(" ", "."))
                        })
                    }, 200)
                }
            });
            observer.observe(document.querySelector(pageObserver), {
                childList: true,
                subtree: true,
            });
        } catch (err) {
            console.log("Custom JS failed");
            console.log(err);
        }
    });
}
// 00325167 END
