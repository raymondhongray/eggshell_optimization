// This example adds a search box to a map, using the Google Place Autocomplete
// feature. People can enter geographical searches. The search box will return a
// pick list containing a mix of places and predicted search terms.
// 這裡一開始要全部load進來
var fb_name = '';
var fb_id = '';
var recommend_sites = [];
var nextShowIndex = 0;
var showAll_RankInfoWindow = false;
// var default_center = [25.0677678, 121.5716523];

// function getQueryStrByName(name, url) {
//     if (!url) url = window.location.href;
//     name = name.replace(/[\[\]]/g, "\\$&");
//     var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
//         results = regex.exec(url);
//     if (!results) return null;
//     if (!results[2]) return '';
//     return decodeURIComponent(results[2].replace(/\+/g, " "));
// }

// function initAutocomplete() {
//     var site = getQueryStrByName('site');

//     if (site == 'northern') {
//         default_center = [25.0677678, 121.5716523];
//     } else {
//         if (site == 'central') {
//             default_center = [24.0520737,120.6042791];
//         } else {
//             if (site == 'southern') {
//                 // default_center = [25.0677678, 121.5716523];
//             }
//         }
//     }

//     var map = new google.maps.Map(document.getElementById('map'), {
//         center: {
//             lat: default_center[0],
//             lng: default_center[1]
//         },
//         zoom: 16,
//         mapTypeId: google.maps.MapTypeId.ROADMAP
//     });


//     // Create the search box and link it to the UI element.
//     var input = document.getElementById('pac-input');
//     var searchBox = new google.maps.places.SearchBox(input);
//     map.controls[google.maps.ControlPosition.TOP_LEFT].push(input);

//     // Bias the SearchBox results towards current map's viewport.
//     map.addListener('bounds_changed', function() {
//         searchBox.setBounds(map.getBounds());
//     });

//     var markers = [];
//     // [START region_getplaces]
//     // Listen for the event fired when the user selects a prediction and retrieve
//     // more details for that place.
//     searchBox.addListener('places_changed', function() {

//         var places = searchBox.getPlaces();
//         if (places.length == 0) {
//             return;
//         }

//         // Clear out the old markers.
//         markers.forEach(function(marker) {
//             marker.setMap(null);
//         });
//         markers = [];

//         // For each place, get the icon, name and location.
//         var bounds = new google.maps.LatLngBounds();

//         places.forEach(function(place) {
//             var icon = {
//                 url: place.icon,
//                 size: new google.maps.Size(71, 71),
//                 origin: new google.maps.Point(0, 0),
//                 anchor: new google.maps.Point(17, 34),
//                 scaledSize: new google.maps.Size(25, 25)
//             };

//             // Create a marker for each place.
//             // markers.push(new google.maps.Marker({
//             //     map: map,
//             //     icon: icon,
//             //     title: place.name,
//             //     position: place.geometry.location
//             // }));

//             if (place.geometry.viewport) {
//                 // Only geocodes have viewport.
//                 bounds.union(place.geometry.viewport);
//             } else {
//                 bounds.extend(place.geometry.location);
//             }
//         });
//         map.fitBounds(bounds);
//     });

//     // 這裡一開始要全部load進來
//     // 以下是google map 使用的基本參數，可以擴充
//     // Ajax callback 回來再執行下面兩行
//     // var recommend_sites = [
//     //     ['內湖運動中心', 25.067724, 121.573927, 1, 4.1, 'https://unsplash.it/200/300'],
//     //     ['天母', 25.109224, 121.530924, 1, 3.1, 'https://unsplash.it/200'],
//     // ];

//     recommend_sites = [
//         ['內湖運動中心', 25.067724, 121.573927, 1, 4.1, 'https://unsplash.it/200/300', '114台灣台北市內湖區舊宗路二段1號', '自在跑跳，釋放體力極限自在跑跳，釋放體力極限自在跑跳，釋放體力極限自在跑跳'],
//         ['天母', 25.109224, 121.530924, 1, 3.1, 'https://unsplash.it/200', '114台灣台北市內湖區舊宗路二段1號', '自在跑跳，釋放體力極限自在跑跳，釋放體力極限自在跑跳，釋放體力極限自在跑跳'],
//         ['內湖運動中心', 25.067724, 121.573927, 1, 4.1, 'https://unsplash.it/200/300', '114台灣台北市內湖區舊宗路二段1號', '自在跑跳，釋放體力極限自在跑跳，釋放體力極限自在跑跳，釋放體力極限自在跑跳'],
//         ['天母', 25.109224, 121.530924, 1, 3.1, 'https://unsplash.it/200', '114台灣台北市內湖區舊宗路二段1號', '自在跑跳，釋放體力極限自在跑跳，釋放體力極限自在跑跳，釋放體力極限自在跑跳'],
//         ['內湖運動中心', 25.067724, 121.573927, 1, 4.1, 'https://unsplash.it/200/300', '114台灣台北市內湖區舊宗路二段1號', '自在跑跳，釋放體力極限自在跑跳，釋放體力極限自在跑跳，釋放體力極限自在跑跳'],
//         ['天母', 25.109224, 121.530924, 1, 3.1, 'https://unsplash.it/200', '114台灣台北市內湖區舊宗路二段1號', '自在跑跳，釋放體力極限自在跑跳，釋放體力極限自在跑跳，釋放體力極限自在跑跳'],
//         ['內湖運動中心', 25.067724, 121.573927, 1, 4.1, 'https://unsplash.it/200/300', '114台灣台北市內湖區舊宗路二段1號', '自在跑跳，釋放體力極限自在跑跳，釋放體力極限自在跑跳，釋放體力極限自在跑跳'],
//         ['天母', 25.109224, 121.530924, 1, 3.1, 'https://unsplash.it/200', '114台灣台北市內湖區舊宗路二段1號', '自在跑跳，釋放體力極限自在跑跳，釋放體力極限自在跑跳，釋放體力極限自在跑跳'],
//         ['內湖運動中心', 25.067724, 121.573927, 1, 4.1, 'https://unsplash.it/200/300', '114台灣台北市內湖區舊宗路二段1號', '自在跑跳，釋放體力極限自在跑跳，釋放體力極限自在跑跳，釋放體力極限自在跑跳'],
//         ['天母', 25.109224, 121.530924, 1, 3.1, 'https://unsplash.it/200', '114台灣台北市內湖區舊宗路二段1號', '自在跑跳，釋放體力極限自在跑跳，釋放體力極限自在跑跳，釋放體力極限自在跑跳'],
//         ['內湖運動中心', 25.067724, 121.573927, 1, 4.1, 'https://unsplash.it/200/300', '114台灣台北市內湖區舊宗路二段1號', '自在跑跳，釋放體力極限自在跑跳，釋放體力極限自在跑跳，釋放體力極限自在跑跳'],
//         ['天母', 25.109224, 121.530924, 1, 3.1, 'https://unsplash.it/200', '114台灣台北市內湖區舊宗路二段1號', '自在跑跳，釋放體力極限自在跑跳，釋放體力極限自在跑跳，釋放體力極限自在跑跳'],
//         ['內湖運動中心', 25.067724, 121.573927, 1, 4.1, 'https://unsplash.it/200/300', '114台灣台北市內湖區舊宗路二段1號', '自在跑跳，釋放體力極限自在跑跳，釋放體力極限自在跑跳，釋放體力極限自在跑跳'],
//         ['天母', 25.109224, 121.530924, 1, 3.1, 'https://unsplash.it/200', '114台灣台北市內湖區舊宗路二段1號', '自在跑跳，釋放體力極限自在跑跳，釋放體力極限自在跑跳，釋放體力極限自在跑跳'],

//     ];

//     setRecommendMarkers(map, recommend_sites);

//     addRankInfoWindow(recommend_sites, 0, showAll_RankInfoWindow);
//     // [END region_getplaces]
// }

function addRankInfoWindow(recommend_sites, start, show_all) {

    var offset = 5;
    var end = recommend_sites.length;

    if (!show_all) {
        if ((recommend_sites.length - start) < 5) {
            offset = recommend_sites.length - start;
        }
        end = start + offset;
    }

    for (var i = start; i < end; i++) {

        var recommend_site = recommend_sites[i];

        var title = recommend_site[0];
        var scores = recommend_site[4];
        var img = recommend_site[5];
        var addr = recommend_site[6];
        var description_content = recommend_site[7];


        $('#rank-info-window .info-window-row[data-id=clone_me]').clone().appendTo('#rank-info-window .info-window-wrap').attr('data-id', i);
        $('#rank-info-window .info-window-row[data-id=' + i + ']').css('display', 'block');
        $('#rank-info-window .info-window-row[data-id=' + i + ']').find('.info-window-row-content > .map-content-title').text(title);
        $('#rank-info-window .info-window-row[data-id=' + i + ']').find('.avg-score').text(scores);
        $('#rank-info-window .info-window-row[data-id=' + i + ']').find('.recommend-img > img').attr('src', img);
        $('#rank-info-window .info-window-row[data-id=' + i + ']').find('.info-window-row-content > .addr-value').text(addr);
        $('#rank-info-window .info-window-row[data-id=' + i + ']').find('.info-window-row-content > .map-content-description').text(description_content);
        $('#rank-info-window .info-window-row[data-id=' + i + ']').find('.index-marker > p').text(i + 1);

        setStarMarkers($('#rank-info-window .info-window-row[data-id=' + i + ']'), '.sm-star', scores);

        if ($('#rank-info-window .status-marker').length > 0) {

            var status_marker = ['待審', '通過', '未通過'];
            var status_code = recommend_site[14];

            $('#rank-info-window .info-window-row[data-id=' + i + '] .status-marker').text('● ' + status_marker[status_code] + '●')
        }

    };
    nextShowIndex = i;

    if (recommend_sites.length <= offset || nextShowIndex >= recommend_sites.length) {
        $("#rank-show-btn").css('display', 'none');
    }
}

function setTabInfoData(tab_index, background_color, title, slogan, img, addr, description_content) {


    $('#tab-info-window').css('background-color', background_color);

    $('#tab-info-window .info-window-row').find('.info-window-row-content > .map-content-title').text(title);
    $('#tab-info-window .info-window-row').find('.info-window-row-content > .map-content-slogan').text(slogan);
    $('#tab-info-window .info-window-row').find('.recommend-img > img').attr('src', img);
    $('#tab-info-window .info-window-row').find('.info-window-row-content > .addr-value').text(addr);
    $('#tab-info-window .info-window-row').find('.info-window-row-content > .map-content-description').html(description_content);
}

function setTabInfoWindow() {

    tab_contents = [
        ['#5fc2c7', '內湖運動公園', '自在跑跳，釋放體力極限', '台灣台北市內湖區舊宗路二段1號', '活力夏日，<span style="color:#FFFF01;">07/02 (六) 14:00-17:00 </span>小鹿特別邀請大家動一動！在極具特色二樓的廣闊公園，擁有夏季不來超可惜的清涼親水區，以及美麗的大草坪讓寶貝自在玩耍，更有沙池與兒童遊樂器絕對讓寶貝玩得開心又過癮！還有攀岩場與滑板場可以挑戰喔。', 'img/fbshare/FB_0.jpg'],
        ['#669900', '今夜星辰休閒農場', '可愛動物歡樂新天地', '彰化市石牌里石牌路一段428號', '<span style="color:#FFFF01;">07/16 (六) 14:00-17:00 </span>小鹿為你介紹他的好朋友。2015全新開幕景點，你還不知道超可惜！充滿美麗造景的農場景觀，深受大朋友小朋友喜愛；草泥馬、兔子與小浣熊等多種動物更是農場中的主角，近距離與動物們接觸互動，保證帶給寶貝歡樂與驚奇。', 'img/fbshare/FB_1.jpg'],
        ['#f8b600', '朱銘美術館', '自然與藝術的交織盛宴', '新北市金山區西勢湖2號', '山林避暑，<span style="color:#FFFF01;">07/23 (六) 17:00-20:00 </span>小鹿帶你陶冶心靈！來到朱銘先生根據自然地貌設計規劃，展示自己與多位藝術家有趣的雕塑作品，還有室內展館與各式主題廣場，並不定期舉辦體驗活動、特展與表演等等。還沒來過超可惜，帶著小寶貝們暢遊自然與藝術之間，來趟新鮮的知性之旅吧。', 'img/fbshare/FB_2.jpg'],
        ['#acbb22', '橋頭糖廠', '寓教於樂集結首選', '高雄市橋頭區興糖路24號', '<span style="color:#FFFF01;">07/17 (日) 14:00-17:00 </span>小鹿陪你一起來場知性小冒險！交通超便利的三級古蹟製糖廠，進入日式與歐式的傳統建築與製糖廠房，穿越時空一探台灣製糖歷史文化之旅。綠意盎然的廠區內也富含自然生態，還可以搭乘五分車，享受多種美食與其他遊憩區域。絕對是不來超可惜的南部親子旅遊景點首選！', 'img/fbshare/FB_3.jpg'],
    ];

    var tab_index = 0;
    var tab_content = tab_contents[tab_index];
    var background_color = tab_content[0];
    var title = tab_content[1];
    var slogan = tab_content[2];
    var addr = tab_content[3];
    var description_content = tab_content[4];
    var img = tab_content[5];

    setTabInfoData(tab_index, background_color, title, slogan, img, addr, description_content);

    $(".tab-theme").click(function() {

        tab_index = $(this).attr('data-id');
        $("#tab-info-window").attr('data-id', tab_index);
        tab_content = tab_contents[tab_index];
        background_color = tab_content[0];
        title = tab_content[1];
        slogan = tab_content[2];
        addr = tab_content[3];
        description_content = tab_content[4];
        img = tab_content[5];

        setTabInfoData(tab_index, background_color, title, slogan, img, addr, description_content);
    });
}

// function setRecommendMarkers(map, recommend_sites) {

//     var image = {
//         url: 'img/map/marker_icon.png',
//         // This marker is 20 pixels wide by 32 pixels high.
//         size: new google.maps.Size(75, 95),
//         // The origin for this image is (0, 0).
//         origin: new google.maps.Point(0, 0),
//         // The anchor for this image is the base of the flagpole at (0, 32).
//         anchor: new google.maps.Point(0, 32)
//     };
//     for (var i = 0; i < recommend_sites.length; i++) {
//         var recommend_site = recommend_sites[i];
//         var marker01 = new google.maps.Marker({
//             position: {
//                 lat: recommend_site[1],
//                 lng: recommend_site[2]
//             },
//             map: map,
//             icon: image,
//             // shape: shape,
//             title: recommend_site[0],
//             zIndex: recommend_site[3],
//             // 自己定義 key 
//             lat: recommend_site[1],
//             lng: recommend_site[2],
//             avg_scores: recommend_site[4],
//             img: recommend_site[5],
//             description_content: recommend_site[7]
//         });


//         marker01.addListener('click', function() {
//             // console.log(this.lat);
//             // var infowindow = new google.maps.InfoWindow({
//             //     content: map_template
//             // });
//             // infowindow.open(map, this);
//             // $("#map-template, #map-close-icon").fadeIn(800, 'swing');

//             $('#map-info-window').find('.info-window-row-content > .map-content-title').text(this.title);
//             $('#map-info-window').find('.avg-score').text(this.avg_scores);
//             $('#map-info-window').find('.recommend-img > img').attr('src', this.img);
//             $('#map-info-window').find('.info-window-row-content > .map-content-description').text(this.description_content);

//             setStarMarkers($("#map-info-window"), '.sm-star', this.avg_scores);

//             var geocoder = new google.maps.Geocoder();
//             // google.maps.LatLng 物件
//             // var coord = new google.maps.LatLng(25.0439892, 121.5212213);
//             var coord = new google.maps.LatLng(this.lat, this.lng);
//             // 傳入 latLng 資訊至 geocoder.geocode

//             geocoder.geocode({
//                 'latLng': coord
//             }, function(results, status) {
//                 if (status === google.maps.GeocoderStatus.OK) {
//                     // 如果有資料就會回傳
//                     if (results) {
//                         console.log(results[0]);
//                         // 假如後端api 有回傳addr，那這段就可以拉出來
//                         $('#map-info-window').find('.info-window-row-content > .addr-value').text(results[0]['formatted_address']);
//                     }

//                     $("#map-info-window, #map-close-icon").fadeIn(800, 'swing');
//                 }
//                 // 經緯度資訊錯誤
//                 else {
//                     alert("Reverse Geocoding failed because: " + status);
//                 }
//             });

//         });
//     }
// }

function setStarMarkers(object, target_class, scores) {
    var star_group_count = object.find(target_class).parent().children().length;

    // 初始化成空的星號
    for (var i = 1; i <= star_group_count; i++) {
        if (object.find(target_class + ':nth-child(' + i + ')').hasClass('fa-star')) {
            object.find(target_class + ':nth-child(' + i + ')').removeClass('fa-star');
            object.find(target_class + ':nth-child(' + i + ')').addClass('fa-star-o');
        }
    };

    if (scores > 0) {
        for (var i = 1; i <= scores; i++) {
            object.find(target_class + ':nth-child(' + i + ')').removeClass('fa-star-o');
            object.find(target_class + ':nth-child(' + i + ')').addClass('fa-star');
        }
    }
}

function showPopup(object) {

    var title = object.find('.map-content-title').text();
    $(".display-recommend-title > p.recommend-title-text").text(title);

    var select_text = object.find('.addr-value').text();
    $(".display-recommend-select > p.recommend-select-text").text(select_text);

    var content = object.find('.map-content-description').text();
    $(".display-recommend-textarea > p.recommend-textarea-text").text(content);

    $('.popup').css('display', 'block');
}

function showPopup2(object) {

    var title = object.find('.map-content-title').text();
    $("#popup2 .display-recommend-title > p.recommend-title-text").text(title);

    var select_text = object.find('.addr-value').text();
    $("#popup2 .display-recommend-select > p.recommend-select-text").text(select_text);

    var content = object.find('.map-content-description').text();
    $("#popup2 .display-recommend-textarea > p.recommend-textarea-text").text(content);

    $('.popup').css('display', 'none');
    $('#popup2.popup').css('display', 'block');
}

function insert_fb_log(fb_id, fb_name) {
    $.ajax({
        type: 'POST',
        url: "../api/fb_login.php",
        type: "POST",
        data: {
            fbid: fb_id,
            fbname: fb_name
        },
        dataType: "json",
        success: function(res) {

            if (res.code == 0) {
                console.log('success insert_fb_log');
            }
        },
        error: function(XMLHttpRequest, textStatus, errorThrown) {
            console.log("Status: " + textStatus);
            console.log("Error: " + errorThrown);
        },
    });
}

function call_data_share_api(fb_id, fb_name, did, star, vid) {

    console.log('in call_data_share_api');

    if (star > 0) {

        $('.loading-effect').css('display', 'block');

        var post_data = { fbid: fb_id, fbname: fb_name, did: did, star: star };

        $.ajax({
            type: 'POST',
            url: "../api/data_share.php",
            type: "POST",
            data: post_data,
            dataType: "json",
            success: function(res) {
                console.log(res);
                if (res.code == 0) {
                    $(".popup-done").css('display', 'block');
                }

                $('.loading-effect').css('display', 'none');
            },
            error: function(XMLHttpRequest, textStatus, errorThrown) {

                $('.loading-effect').css('display', 'none');

                alert("Status: " + textStatus);
                alert("Error: " + errorThrown);
            },
        });

    } else {
        // 只分享不評分
        $('.loading-effect').css('display', 'block');

        $.ajax({
            type: 'POST',
            url: "../api/fb_share.php",
            type: "POST",
            data: {
                fbid: fb_id,
                fbname: fb_name,
                vid: vid
            },
            dataType: "json",
            success: function(res) {
                console.log(res);
                if (res.code == 0) {
                    $('.popup-done .recommend-done-title').attr('src', 'img/pop/share_bg_title.png');
                    $('.popup-done .recommend-done-content-long').attr('src', 'img/pop/share_done.png');
                    $('.popup-done .done-link2').css('display', 'none');
                    $(".popup-done").css('display', 'block');
                }

                $('.loading-effect').css('display', 'none');
            },
            error: function(XMLHttpRequest, textStatus, errorThrown) {

                $('.loading-effect').css('display', 'none');

                alert("Status: " + textStatus);
                alert("Error: " + errorThrown);
            },
        });
        // if (getQueryStrByName('post_id') != null) {
        //     $('.popup-done .recommend-done-title').attr('src', 'img/pop/share_bg_title.png');
        //     $('.popup-done .recommend-done-content-long').attr('src', 'img/pop/share_done.png');
        //     $('.popup-done .done-link2').css('display', 'none');
        //     $(".popup-done").css('display', 'block');
        // }
    }
}

function call_fb_share(fb_id, fb_name, did, star, title, description, share_link, pic_url, set_star_scores, vid) {

    $('.loading-effect-fb').css('display', 'block');

    //串接自己的 api
    // insert_fb_log(fb_id, fb_name);

    var publish = {
        name: title,
        method: 'feed',
        link: encodeURIComponent(share_link),
        description: description,
        // picture: window.location.hostname + "/img/fb-share.jpg"
        picture: pic_url
    };

    var cookie_call_data_share = {
        did: did,
        scores: star,
        vid: vid
    }

    setCookie('call_data_share_api', JSON.stringify(cookie_call_data_share), 180);

    var appId = '206781816385318';
    var redirect_uri = encodeURI(window.location.protocol + '//' + window.location.hostname + window.location.pathname);

    var permissionUrl = "https://m.facebook.com/dialog/feed?app_id=" + appId + "&display=touch&redirect_uri=" + redirect_uri + "&name=" + publish.name + "&description=" + publish.description + "&link=" + publish.link + "&picture=" + publish.picture;
    window.location = permissionUrl;

    // FB.ui(publish, function(response) {
    //     if (response && !response.error_message) {
    //         console.log(response, 'fb_share');

    //         if (set_star_scores == 1) {
    //             call_data_share_api(fb_id, fb_name, did, star);
    //         }
    //     } else {
    //         alert('Oops，沒有分享成功要顯示的訊息！');
    //     }
    // });
}

$(document).ready(function() {

    setTabInfoWindow();

    if (getCookie('call_data_share_api')) {
        setTimeout(function() {
            var obj = JSON.parse(getCookie('call_data_share_api'));

            console.log(obj);

            FB.getLoginStatus(function(response) {

                console.log('ready to call_data_share_api');

                console.log(response);

                FB.api('/me', function(response) {

                    if (response['error']) {
                        console.log(response);
                    }

                    var fb_name = response['name'];
                    var fb_id = response['id'];

                    //串接自己的 api
                    // call_data_share_api(fb_id, fb_name, obj.did, obj.scores, obj.vid);

                    $(".popup-done").css('display', 'block');

                    deleteCookie('call_data_share_api');
                });
            });


        }, 1500);
    }

    if (getCookie('call_fb_share')) {

        // var share_obj = JSON.parse(getCookie('call_fb_share'));

        var share_obj = [];

        share_obj['did'] = getCookie('call_fb_share_did');
        share_obj['scores'] = getCookie('call_fb_share_scores');
        share_obj['vid'] = getCookie('call_fb_share_vid');
        share_obj['share_link'] = getCookie('call_fb_share_share_link');
        share_obj['pic_url'] = getCookie('call_fb_share_pic_url');
        share_obj['set_star_scores'] = getCookie('call_fb_share_set_star_scores');

        share_obj['title'] = '這是我最愛的超可惜景點！快一起來玩';
        share_obj['description'] = '小鹿山丘親子旅遊網獨家推薦！人少又好玩的【超可惜景點地圖】';

        setTimeout(function() {
            FB.api('/me', function(response) {

                var fb_name = response['name'];
                var fb_id = response['id'];

                call_fb_share(fb_id, fb_name, share_obj.did, share_obj.scores, share_obj.title, share_obj.description, share_obj.share_link, share_obj.pic_url, 0, share_obj.vid);

                deleteCookie('call_fb_share');
                deleteCookie('call_fb_share_did');
                deleteCookie('call_fb_share_scores');
                deleteCookie('call_fb_share_vid');
                deleteCookie('call_fb_share_share_link');
                deleteCookie('call_fb_share_pic_url');
                deleteCookie('call_fb_share_set_star_scores');
            });
        }, 1500);
    }

    if (getQueryStrByName('error_code') != null && getQueryStrByName('error_code') == '4201') {
        // alert('cancel share fb!');
        $('.popup-done').css('display', 'none');
        deleteCookie('call_data_share_api');
        window.location.href = window.location.protocol + "//" + window.location.hostname + window.location.pathname;
    }

    $(".fb-share-action").click(function() {

        var tab_index = $("#tab-info-window").attr('data-id');
        var gps_list = [
            [25.0677678, 121.5716523],
            [24.0520781, 120.6042746],
            [25.2464462, 121.6090018],
            [22.7559119, 120.3117623]
        ];

        var title = $("#tab-info-window").find('.map-content-title').text();
        var description = $("#tab-info-window").find('.map-content-description').text();
        var gps_x = gps_list[tab_index][0];
        var gps_y = gps_list[tab_index][1];
        var share_link = window.location.hostname + '/map.html?set_gps=1&gps_x=' + gps_x + '&gps_y=' + gps_y;
        var pic_url = window.location.hostname + "/img/fbshare/FB_" + tab_index + ".jpg";
        // var pic_url = 'https://unsplash.it/300/300';


        FB.getLoginStatus(function(response) {

            if (response.status === 'connected') {

                FB.api('/me', function(res) {
                    console.log(res);

                    fb_id = res['id'];
                    fb_name = res['name'];

                    call_fb_share(fb_id, fb_name, 0, 0, title, description, share_link, pic_url, 0, (parseInt(tab_index) + 1));
                });
            } else {

                // var cookie_call_fb_share = {
                //     did: 0,
                //     scores: 0,
                //     title: title,
                //     description: description,
                //     share_link: share_link,
                //     pic_url: pic_url,
                //     set_star_scores: 0,
                // }

                setCookie('call_fb_share_did', 0, 180);
                setCookie('call_fb_share_scores', 0, 180);
                setCookie('call_fb_share_vid', (parseInt(tab_index) + 1), 180);
                setCookie('call_fb_share_share_link', share_link, 180);
                setCookie('call_fb_share_pic_url', pic_url, 180);
                setCookie('call_fb_share_set_star_scores', 0, 180);

                // setCookie('call_fb_share', JSON.stringify(cookie_call_fb_share), 180);
                setCookie('call_fb_share', 1, 180);

                var appId = '206781816385318';
                var app_permissions = 'public_profile';
                var permissionUrl = "https://m.facebook.com/dialog/oauth?client_id=" + appId + "&response_type=code&redirect_uri=" + window.location + "&scope=" + app_permissions;
                window.location = permissionUrl;
            }
        });

    });

    $("#map-info-window .lg-star").click(function() {

        console.log('you click star #' + $(this).attr('data-id'));

        var scores = $(this).attr('data-id');
        setStarMarkers($("#map-info-window"), '.lg-star', scores);

        var title = $("#map-info-window").find('.map-content-title').text();
        var description = $("#map-info-window").find('.map-content-description').text();
        var gps_x = $("#map-info-window").attr('gps-x');
        var gps_y = $("#map-info-window").attr('gps-y');
        var share_link = window.location.hostname + '/map.html?set_gps=1&gps_x=' + gps_x + '&gps_y=' + gps_y;
        var pic_url = window.location.hostname + "/img/fbshare/FB_map.jpg";
        // var pic_url = 'https://unsplash.it/300/300';

        console.log(share_link);

        FB.getLoginStatus(function(response) {

            if (response.status === 'connected') {

                FB.api('/me', function(res) {
                    console.log(res);

                    fb_id = res['id'];
                    fb_name = res['name'];

                    call_fb_share(fb_id, fb_name, $("#map-info-window").attr('data-id'), scores, title, description, share_link, pic_url, 1, 0);
                });
            } else {

                // var cookie_call_fb_share = {
                //     did: $("#map-info-window").attr('data-id'),
                //     scores: scores,
                //     title: title,
                //     description: description,
                //     share_link: share_link,
                //     pic_url: pic_url,
                //     set_star_scores: 1,
                // }

                setCookie('call_fb_share_did', $("#map-info-window").attr('data-id'), 180);
                setCookie('call_fb_share_scores', scores, 180);
                setCookie('call_fb_share_vid', 0, 180);
                setCookie('call_fb_share_share_link', share_link, 180);
                setCookie('call_fb_share_pic_url', pic_url, 180);
                setCookie('call_fb_share_set_star_scores', 1, 180);

                // setCookie('call_fb_share', JSON.stringify(cookie_call_fb_share), 180);
                setCookie('call_fb_share', 1, 180);

                var appId = '206781816385318';
                var app_permissions = 'public_profile';
                var permissionUrl = "https://m.facebook.com/dialog/oauth?client_id=" + appId + "&response_type=code&redirect_uri=" + window.location + "&scope=" + app_permissions;
                window.location = permissionUrl;
            }
        });

    });

    $("#rank-show-btn").click(function() {

        addRankInfoWindow(recommend_sites, nextShowIndex, showAll_RankInfoWindow);
    });

    $(document).on('click touchstart', '.show-more', function() {

        showPopup($(this).parents('.info-window-row-content'));
    });
});

function setCookie(cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
    var expires = "expires=" + d.toUTCString();
    document.cookie = cname + "=" + cvalue + "; " + expires;
}

function getCookie(cname) {
    var name = cname + "=";
    var ca = document.cookie.split(';');
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}

function deleteCookie(cname) {
    document.cookie = cname + "=; expires=Thu, 01 Jan 1970 00:00:00 UTC";
}
