function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function get_spots() {
    // unused
    $.ajax({
        type: 'POST',
        url: '../api/data_list.php',
        data: {
            page: 1,
            num: 10000,
            hidden: 0
        },
        dataType: "json",
        success: function(res) {

            data_lists = res.list;

            $('.event_index_btn2_text > .p1').text(data_lists.length);

            setTimeout(function() {
                $(".event_index_btn1_text").fadeIn();
                $(".event_index_btn2_text").fadeIn();
            }, 2000);
        },
        error: function(XMLHttpRequest, textStatus, errorThrown) {
            console.log("Status: " + textStatus);
            console.log("Error: " + errorThrown);
        },
    });
}

function set_share_numbers() {

    $('.share-p').css('display', 'none');

    $.ajax({
        type: 'POST',
        // url: '../api/all.php',
        url: 'json/all.json',
        dataType: "json",
        success: function(res) {

            console.log(res.s);
            console.log(res.d);

            var now = new Date().getTime() / 1000;
            var date = new Date().getDate();
            var m = 0;
            // from July 5th, 2016 12:00 AM
            var m_d_arr = [
                "4.3", "5", "5.4", "5.8",
                "6.3", "6.7", "8.2", "9.7",
                "11.3", "12.3", "13.6", "14",
                "14", "14.3", "14.7", "15.3",
                "15.7", "15.9"
            ];

            if (typeof m_d_arr[parseInt(date) - 5] != 'undefined') {
                m = m_d_arr[parseInt(date) - 5];
            }

            var res_offset = Math.round(m * Math.round((Math.round(now) - 1467648000) / 7200));

            res_offset = 0;

            $('.event_index_btn1_text > .p1').text(parseInt(res.d) + res_offset);

            m = 0;
            var m_s_arr = [
                "1.3", "1.6", "1.8", "1.8",
                "1.9", "2", "2.4", "2.8",
                "3.2", "3.5", "3.8", "3.9",
                "3.9", "4", "4.1", "4.3",
                "4.5", "4.8"
            ];

            if (typeof m_s_arr[parseInt(date) - 5] != 'undefined') {
                m = m_s_arr[parseInt(date) - 5];
            }

            res_offset = Math.round(m * Math.round((Math.round(now) - 1467648000) / 7200));

            res_offset = 0;

            $('.event_index_btn2_text > .p1').text(parseInt(res.s) + res_offset);

            $('.share-p-0').text(res.v1);
            $('.share-p-1').text(res.v2);
            $('.share-p-2').text(res.v3);
            $('.share-p-3').text(res.v4);

            setTimeout(function() {
                $(".event_index_btn1_text").fadeIn();
                $(".event_index_btn2_text").fadeIn();
            }, 2000);
        },
        error: function(XMLHttpRequest, textStatus, errorThrown) {
            console.log("Status: " + textStatus);
            console.log("Error: " + errorThrown);
        },
    });

    // $('.event_index_btn1_text > .p1').text(getRandomInt(40, 120));

    // $('.share-p-0').text(getRandomInt(10, 30));
    // $('.share-p-1').text(getRandomInt(10, 30));
    // $('.share-p-2').text(getRandomInt(10, 30));
    // $('.share-p-3').text(getRandomInt(10, 30));
}
// 0615 james
function setProductTabInfoWindow() {

    $('.product-intro-group').append('<a href="https://www.maobao2.com.tw/eggshell/product/index.php?bid=193" target="_blank" onclick="ga(\'send\', \'event\', \'活動頁\', \'Click\', \'產品_more\');"><img class="product-intro-more product-intro-more-pos5" src="img/event/more1.png" />');
    $('.product-intro-group').append('<a href="https://www.maobao2.com.tw/eggshell/product/index.php?bid=193" target="_blank" onclick="ga(\'send\', \'event\', \'活動頁\', \'Click\', \'產品_more\');"><img class="product-intro-more product-intro-more-pos4" src="img/event/more1.png" />');
    $('.product-intro-group').append('<a href="https://www.maobao2.com.tw/eggshell/product/index.php?bid=196" target="_blank" onclick="ga(\'send\', \'event\', \'活動頁\', \'Click\', \'產品_more\');"><img class="product-intro-more product-intro-more-pos3" src="img/event/more1.png" />');
    $('.product-intro-group').append('<a href="https://www.maobao2.com.tw/eggshell/product/index.php?bid=65" target="_blank" onclick="ga(\'send\', \'event\', \'活動頁\', \'Click\', \'產品_more\');"><img class="product-intro-more product-intro-more-pos2" src="img/event/more1.png" />');
    $('.product-intro-group').append('<a href="https://www.maobao2.com.tw/eggshell/product/index.php?bid=65" target="_blank" onclick="ga(\'send\', \'event\', \'活動頁\', \'Click\', \'產品_more\');"><img class="product-intro-more product-intro-more-pos1" src="img/event/more1.png" />');

    tab2_contents = [
        ['img/event/p1.png'],
        ['img/event/p2.png'],
    ];

    $(".product-intro-group .tab-theme").click(function() {
        $('.product-intro-more').remove();

        var tab_index = $(this).attr('data-id');

        var tab_content = tab2_contents[tab_index];
        var img = tab_content[0];

        $('#product-info-window .info-window-row').find('img').attr('src', img);

        if (tab_index == 0) {
            $('.product-intro-group').append('<a href="https://www.maobao2.com.tw/eggshell/product/index.php?bid=193" target="_blank" onclick="ga(\'send\', \'event\', \'活動頁\', \'Click\', \'產品_more\');"><img class="product-intro-more product-intro-more-pos5" src="img/event/more1.png" />');
            $('.product-intro-group').append('<a href="https://www.maobao2.com.tw/eggshell/product/index.php?bid=193" target="_blank" onclick="ga(\'send\', \'event\', \'活動頁\', \'Click\', \'產品_more\');"><img class="product-intro-more product-intro-more-pos4" src="img/event/more1.png" />');
            $('.product-intro-group').append('<a href="https://www.maobao2.com.tw/eggshell/product/index.php?bid=196" target="_blank" onclick="ga(\'send\', \'event\', \'活動頁\', \'Click\', \'產品_more\');"><img class="product-intro-more product-intro-more-pos3" src="img/event/more1.png" />');
            $('.product-intro-group').append('<a href="https://www.maobao2.com.tw/eggshell/product/index.php?bid=65" target="_blank" onclick="ga(\'send\', \'event\', \'活動頁\', \'Click\', \'產品_more\');"><img class="product-intro-more product-intro-more-pos2" src="img/event/more1.png" />');
            $('.product-intro-group').append('<a href="https://www.maobao2.com.tw/eggshell/product/index.php?bid=65" target="_blank" onclick="ga(\'send\', \'event\', \'活動頁\', \'Click\', \'產品_more\');"><img class="product-intro-more product-intro-more-pos1" src="img/event/more1.png" />');

        } else {
            $('.product-intro-group').append('<a href="https://www.maobao2.com.tw/eggshell/product/index.php?bid=232" target="_blank" onclick="ga(\'send\', \'event\', \'活動頁\', \'Click\', \'產品_more\');"><img class="product-intro-more product-intro-more-pos2" src="img/event/more3.png" />');
            $('.product-intro-group').append('<a href="https://www.maobao2.com.tw/eggshell/product/index.php?bid=232" target="_blank" onclick="ga(\'send\', \'event\', \'活動頁\', \'Click\', \'產品_more\');"><img class="product-intro-more product-intro-more-pos1" src="img/event/more3.png" />');
        }

    });
}
// 0615 james end
function call_data_upload_api(fb_id, fb_name) {

    // if (getCookie('call_data_upload')) {

    //     var data_upload_obj = JSON.parse(getCookie('call_data_upload'));
    //     console.log(data_upload_obj);

    //     var formData = new FormData();
    //     formData.append("fbid", fb_id);
    //     formData.append("fbname", fb_name);
    //     formData.append("title", data_upload_obj.title);
    //     formData.append("site", data_upload_obj.select_text);
    //     formData.append("content", data_upload_obj.content);
    //     formData.append('fileToUpload_01', JSON.parse(data_upload_obj.fileToUpload_01));
    //     formData.append('fileToUpload_02', JSON.parse(data_upload_obj.fileToUpload_02));
    //     formData.append('fileToUpload_03', JSON.parse(data_upload_obj.fileToUpload_03));

    //     deleteCookie('call_data_upload');

    // } else {
    //     console.log(data_upload_obj);

    //     var title = $("#popup1 .recommend-title > input").val();
    //     var select_text = $("#popup1 .recommend-select > select").val();
    //     var content = $("#popup1 .recommend-textarea > textarea").val();

    //     var formData = new FormData();
    //     formData.append("fbid", fb_id);
    //     formData.append("fbname", fb_name);
    //     formData.append("title", title);
    //     formData.append("site", select_text);
    //     formData.append("content", content);
    //     formData.append('fileToUpload_01', $('#fileToUpload_01')[0].files[0]);
    //     formData.append('fileToUpload_02', $('#fileToUpload_02')[0].files[0]);
    //     formData.append('fileToUpload_03', $('#fileToUpload_03')[0].files[0]);
    // }

    var title = $("#popup1 .recommend-title > input").val();
    var select_text = $("#popup1 .recommend-select > select").val();
    var content = $("#popup1 .recommend-textarea > textarea").val();

    var formData = new FormData();
    formData.append("fbid", fb_id);
    formData.append("fbname", fb_name);
    formData.append("title", title);
    formData.append("site", select_text);
    formData.append("content", content);
    formData.append('fileToUpload_01', $('#fileToUpload_01')[0].files[0]);
    formData.append('fileToUpload_02', $('#fileToUpload_02')[0].files[0]);
    formData.append('fileToUpload_03', $('#fileToUpload_03')[0].files[0]);

    $('.loading-effect').css('display', 'block');

    // 沒有後端 api
    // $.ajax({
    //     type: 'POST',
    //     url: "../api/data_upload.php",
    //     type: "POST",
    //     data: formData,
    //     cache: false,
    //     dataType: "json",
    //     processData: false,
    //     contentType: false,
    //     success: function(res) {
    //         $('.loading-effect').css('display', 'none');
    //         console.log(res);
    //         if (res.code == 0) {
    //             window.location.href = "event.html?popup=done";
    //         }
    //         if (res.code == 1) {
    //             alert('登入臉書才可以推薦景點唷 !')
    //         }
    //         if (res.code == 3) {
    //             alert('您推薦的景點是...');
    //         }
    //         if (res.code == 5) {
    //             alert('您推薦的原因是...');
    //         }
    //     },
    //     error: function(XMLHttpRequest, textStatus, errorThrown) {
    //         $('.loading-effect').css('display', 'none');
    //         alert("Status: " + textStatus);
    //         alert("Error: " + errorThrown);
    //     },
    // });

    alert('目前僅供操作...');

    window.location.href = "event.html?popup=done";
}

function scrollDetect() {
    var scrollVal = $(this).scrollTop();
    if (scrollVal >= 0) {
        $('.btn-zone .btn').removeClass('active');
        $('.btn-zone .btn:nth-of-type(1)').addClass('active');
    }
    if (scrollVal >= $('.activity-group').offset().top - 700) {
        $('.event-event-btn,.event-map-btn').addClass('active');
    }
    if (scrollVal >= $('.activitie').offset().top - 1000) {
        $('.activitie').addClass('active');
    }
}

function is_ios_device() {
    var standalone = window.navigator.standalone,
        userAgent = window.navigator.userAgent.toLowerCase(),
        safari = /safari/.test(userAgent),
        ios = /iphone|ipod|ipad/.test(userAgent);

    if (ios) {
        return true;
    } else {
        return false;
    };
}

$(".event-event-btn").click(function() {

    // 先登入臉書
    FB.getLoginStatus(function(response) {
        if (response.status !== 'connected') {

            setCookie('popup_input', 1, 180);

            var appId = '206781816385318';
            var app_permissions = 'public_profile';
            var permissionUrl = "https://m.facebook.com/dialog/oauth?client_id=" + appId + "&response_type=code&redirect_uri=" + window.location + "&scope=" + app_permissions;
            window.location = permissionUrl;
        } else {
            console.log(response);
            $("#popup1").css('display', 'block');
        }
    });
});


$(document).ready(function() {

    if (0 && !getCookie('20160707_report')) {
        setCookie('20160707_report', 1, 180);
        setTimeout(function() {
            alert('【超可惜特報】\n因受到尼伯特颱風侵襲造成的天氣影響，原定於7/9號，在朱銘美術館所舉辦的小鹿陪你一起玩互動體驗活動，基於寶貝們的安全考量，小鹿決定活動延期到7/23舉辦，請爸拔媽麻們多多見諒，謝謝大家，我們下次再見！');
        }, 2000);
    }

    set_share_numbers();

    setProductTabInfoWindow();

    // if (getCookie('call_data_upload')) {
    //     setTimeout(function() {
    //         FB.api('/me', function(response) {

    //             var fb_name = response['name'];
    //             var fb_id = response['id'];
    //             alert('/me' + fb_id);
    //             call_data_upload_api(fb_id, fb_name);
    //         });
    //     }, 3000);
    // }

    if (getCookie('popup_input')) {

        $("#popup1").css('display', 'block');

        deleteCookie('popup_input');
    }

    $(window).scroll(function() {
        scrollDetect();
    });

    $(document).on('click touchstart', '.show-more.by-event-page', function() {

        showPopup2($(this).parents('.info-window-row-content'));
    });

    $(".event-map-btn").click(function() {

        // window.location.href = 'event.html?popup=1';
        window.location.href = 'map.html';
    });

    $("#submit-btn").click(function() {

        if (!$("#img_fileToUpload_01").attr('src')) {
            alert('請您推薦一張照片~')
        } else {
            FB.getLoginStatus(function(response) {
                if (response.status === 'connected') {
                    // alert('q1');
                    FB.api('/me', function(res) {
                        console.log(res);

                        fb_id = res['id'];
                        fb_name = res['name'];

                        call_data_upload_api(fb_id, fb_name);
                    });
                }
                // else {

                //     var title = $(".recommend-title > input").val();
                //     var select_text = $(".recommend-select > select").val();
                //     var content = $(".recommend-textarea > textarea").val();
                //     var fileToUpload_01 = $('#fileToUpload_01')[0].files[0];
                //     var fileToUpload_02 = $('#fileToUpload_02')[0].files[0];
                //     var fileToUpload_03 = $('#fileToUpload_03')[0].files[0];

                //     // 臉書登入
                //     var cookie_call_data_upload = {
                //         title: title,
                //         select_text: select_text,
                //         content: content,
                //         fileToUpload_01: JSON.stringify(fileToUpload_01),
                //         fileToUpload_02: JSON.stringify(fileToUpload_02),
                //         fileToUpload_03: JSON.stringify(fileToUpload_03)
                //     };

                //     setCookie('call_data_upload', JSON.stringify(cookie_call_data_upload), 180);

                //     var appId = '206781816385318';
                //     var app_permissions = 'public_profile';
                //     var permissionUrl = "https://m.facebook.com/dialog/oauth?client_id=" + appId + "&response_type=code&redirect_uri=" + window.location + "&scope=" + app_permissions;
                //     window.location = permissionUrl;
                // }
            });
        }
    });

    $('.event-taiwan-0').click(function() {
        $('.tab-theme[data-id="0"]').click();
        $('.fb-share-action').click();
    });

    $('.event-taiwan-1').click(function() {
        $('.tab-theme[data-id="1"]').click();
        $('.fb-share-action').click();
    });

    $('.event-taiwan-2').click(function() {
        $('.tab-theme[data-id="2"]').click();
        $('.fb-share-action').click();
    });

    $('.event-taiwan-3').click(function() {
        $('.tab-theme[data-id="3"]').click();
        $('.fb-share-action').click();
    });


    // 0616 james 
    var recommendOffset = $('.activity-group').offset().top - 500;
    $('.activitie').click(function() {
        $('html,body').animate({
            scrollTop: recommendOffset
        }, 500);
    });

    $('.event_index_btn2').click(function() {
        $('.event-event-btn').click();
    });
    // 0616 james end

    var event_taiwanOffset = $('.event-taiwan').offset().top - 100;
    $('.event_index_btn1').click(function() {
        $('html,body').animate({
            scrollTop: event_taiwanOffset
        }, 500);
    });

    if (getQueryStrByName('move_to') != null && getQueryStrByName('move_to') == 'event_taiwan') {
        var event_taiwanOffset = $('.event-taiwan').offset().top - 100;
        $('html,body').animate({
            scrollTop: event_taiwanOffset
        }, 500);
    }

    if (getQueryStrByName('move_to') != null && getQueryStrByName('move_to') == 'event_equipment') {
        var equipmentOffset = $('#event-equipment').offset().top - 150;
        $('html,body').animate({
            scrollTop: equipmentOffset
        }, 500);
    }

    if (getQueryStrByName('move_to') != null && getQueryStrByName('move_to') == 'event_rule') {
        var event_ruleOffset = $('.event-rule').offset().top;
        $('html,body').animate({
            scrollTop: event_ruleOffset
        }, 500);
    }

    if (getQueryStrByName('move_to') != null && getQueryStrByName('move_to') == 'deer_play') {

        var event_taiwanOffset = $('.event-taiwan').offset().top - 100;
        $('html,body').animate({
            scrollTop: event_taiwanOffset
        }, 500);
    }

    if (getQueryStrByName('popup') != null && getQueryStrByName('popup') == '1') {
        $("#popup1").css('display', 'block');
    }

    if (getQueryStrByName('popup') != null && getQueryStrByName('popup') == 'done') {
        $('.popup-done').css('display', 'block');
    }
});
