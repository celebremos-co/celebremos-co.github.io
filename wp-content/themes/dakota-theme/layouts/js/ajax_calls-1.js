'use strict';

// ajax related functions and calls
jQuery(document).ready(function ($) {

    // The ajax call was triggered by a portfolio Load More button
    $(".milo_load_more_trigger").click(function () {

        var load_more_id = this.id;
        document.getElementById(load_more_id+'-gif').style.display = 'block';
        
        // Stores the relevant data from the fields in variables
        var count_increment = $(this).attr("data-count_increment");
        var count_total = $(this).attr("data-count_total");
        var custom_post_type = $(this).attr("data-custom_post_type");
        var target_container = $(this).attr("data-target_container");
        var style = $(this).attr("data-style");
        var visit = $(this).attr("data-visit");
        var img_size = $(this).attr("data-img_size");
        var selection = $(this).attr("data-selection");
        var nonce = $(this).attr("data-nonce");
        

        $.ajax({
            type: "post",
            dataType: "json",
            url: milo_ajax.ajaxurl,
            data: {action: "milo_portfolio_gallery",
                count_total: count_total,
                milo_ajax_call_nonce: milo_ajax.milo_ajax_call_nonce,
                count_increment: count_increment,
                count_page: "0",
                custom_post_type: custom_post_type,
                style: style,
                visit: visit,
                selection: selection,
                img_size: img_size,
                nonce: nonce},
            success: function (response) {
                // Clears the content of the portfolio
                document.getElementById(target_container).insertAdjacentHTML('beforeend', response.list_elements);

                $("#" + target_container).imagesLoaded(function () {
                    // Reload Isotope for the portfolio
                    jQuery("#" + target_container).isotope('reloadItems').isotope({sortBy: 'original-order'});
                });
                document.getElementById(load_more_id+'-gif').style.display = 'none';
                if (response.load_end == 1) {
                    document.getElementById(load_more_id).style.display = 'none';
                }
            },
            error: function (response) {
                console.log(response);
            }

        });

        count_total = parseInt(count_total, 10) + parseInt(count_increment, 10);
        $(this).attr("data-count_total", count_total);

        return false;
    });

    // The ajax call was triggered by a classic portfolio type
    $(".milo_portfolio_page_trigger").click(function () {

        var target_container = $(this).attr("data-target_container");
        document.getElementById(target_container+'loadmore-gif').style.display = 'block';
        
        // Stores the relevant data from the fields in variables
        var count_increment = $(this).attr("data-count_increment");
        var count_page = $(this).attr("data-count_page");
        var custom_post_type = $(this).attr("data-custom_post_type");
        
        var style = $(this).attr("data-style");
        var visit = $(this).attr("data-visit");
        var selection = $(this).attr("data-selection");
        var img_size = $(this).attr("data-img_size");
        var nonce = $(this).attr("data-nonce");

        // Changes page index class and id
        var current_li_element = document.getElementById(target_container + "_current")
        current_li_element.className = "";
        current_li_element.id = "";

        // Marks the new page index
        var parentElem = this.parentElement;
        parentElem.id = target_container + "_current";
        parentElem.className = "active";

        $.ajax({
            type: "post",
            dataType: "json",
            url: milo_ajax.ajaxurl,
            data: {action: "milo_portfolio_gallery",
                milo_ajax_call_nonce: milo_ajax.milo_ajax_call_nonce,
                count_total: "0",
                count_page: count_page,
                count_increment: count_increment,
                custom_post_type: custom_post_type,
                style: style,
                visit: visit,
                img_size: img_size,
                selection: selection,
                nonce: nonce},
            success: function (response) {
                // Posts the response content
                document.getElementById(target_container).innerHTML = response.list_elements;
                $("#" + target_container).imagesLoaded(function () {
                    // Reload Isotope for the portfolio
                    jQuery("#" + target_container).isotope('reloadItems').isotope({sortBy: 'original-order'});
                });
                document.getElementById(target_container+'loadmore-gif').style.display = 'none';
            },
            error: function (response) {
                console.log(response);
            }

        });

        return false;
    });

});