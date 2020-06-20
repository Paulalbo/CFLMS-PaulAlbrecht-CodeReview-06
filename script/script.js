var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
$(document).ready(function () {
    // get Data from JSON file
    var getlocation = document.querySelector("#location");
    var getrestaurant = document.querySelector("#restaurant");
    var getevents = document.querySelector("#event");
    //        for (data of jsondata) {
    //        
    //            getlocation.innerHTML +=
    //            `<div class="col-xl-3 p-0 col-md-4 col-sm-12">
    //                <div class="innderdiv">
    //                    <img class="location" src="${data.imglocation}">
    //                    <span class="text">${data.location}</span>
    //                </div>
    //            </div>`;
    //            
    //            getrestaurant.innerHTML +=
    //            `<div class="col-xl-3 p-0 col-md-4 col-sm-12">
    //                <div class="innderdiv">
    //                    <img class="location" src="${data.imgrestaurant}">
    //                    <span class="text">${data.restaurant}</span>
    //                </div>
    //            </div>`;
    //
    //            getevents.innerHTML +=
    //            `<div class="col-xl-3 p-0 col-md-4 col-sm-12">
    //                <div class="innderdiv">
    //                    <img class="location" src="${data.imgevents}">
    //                    <span class="text">${data.event}</span>
    //                </div>
    //            </div>`;
    //        
    //        }
    //class
    var Location = /** @class */ (function () {
        function Location(district, name, address, zip, imgname) {
            this.district = '';
            this.name = '';
            this.address = '';
            this.zip = 0;
            this.imgname = '';
            this.district = district;
            this.name = name;
            this.address = address;
            this.zip = zip;
            this.imgname = imgname;
        }
        Location.prototype.insertlocation = function () {
            return "<div class=\"col-xl-3 p-0 col-md-4 col-sm-12\">\n                                <div class=\"innderdiv\">\n                                    <img class=\"location\" src=\"./img/" + this.imgname + "\">\n                                    <span class=\"text\">" + this.name + "<br>" + this.district + "<br>" + this.zip + " " + this.address + "</span>\n                                </div>\n                            </div>";
        };
        ;
        Location.prototype.basicinfo = function () {
            return this.name + "<br>" + this.district + "<br>" + this.zip + " " + this.address + "<br>";
        };
        return Location;
    }());
    ;
    var place1 = new Location('Universal City', 'Universal Studios Hollywood', 'Universal City Plaza', 100, 'universal.jpg');
    var place2 = new Location('Los Angeles', 'Griffith-Observatorium', 'E Observatory Rd', 2800, 'griffith.jpg');
    var place3 = new Location('Los Angeles', 'Hollywood Sign', 'CA 90068', 125, 'hollywoodsign.jpg');
    var place4 = new Location('Santa Monica', 'Santa Monica Pier', 'Santa Monica Pier', 200, 'santamonica.jpg');
    $('#location').append("<h1>LOCATIONS</h1>\n        <div class=\"row\">" + place1.insertlocation() + place2.insertlocation() + place3.insertlocation() + place4.insertlocation() + "</div>");
    // --> RESTAURANT
    var restaurant = /** @class */ (function (_super) {
        __extends(restaurant, _super);
        function restaurant(district, name, address, zip, imgname, telephone, type, web) {
            var _this = _super.call(this, district, name, address, zip, imgname) || this;
            _this.telephone = '';
            _this.type = '';
            _this.web = '';
            _this.name = '';
            _this.telephone = telephone;
            _this.type = type;
            _this.web = web;
            return _this;
        }
        ;
        restaurant.prototype.insertrestaurant = function () {
            return "<div class=\"col-xl-3 p-0 col-md-4 col-sm-12\">\n                                <div class=\"innderdiv\">\n                                    <img class=\"location\" src=\"./img/" + this.imgname + "\">\n                                    <span class=\"text\">" + _super.prototype.basicinfo.call(this) + "<br>&#9990; " + this.telephone + "<br>" + this.type + "<br>" + this.web + "</span>\n                                </div>\n                            </div>";
        };
        return restaurant;
    }(Location));
    ;
    var restaurant1 = new restaurant('Los Angeles', 'Eleven City Deli', 'Wilshire Blvd', 5400, 'deli.jpg', '(323) 761-1211', 'american, deli', 'www.elevencityla.com/');
    var restaurant2 = new restaurant('Beverly Hills', 'STK Steakhouse', 'Hilgard Ave W', 930, 'stk.jpg', '(310) 659-3535', 'american, steakhouse', 'stksteakhouse.com/');
    var restaurant3 = new restaurant('Los Angeles', 'Providence', 'Melrose Ave', 5955, 'prov.jpg', '+1 323-460-4170', 'seafood', 'providencela.com/');
    var restaurant4 = new restaurant('Beverly Hills', 'The Bazaar', 'S La Cienega Blvd', 465, 'bazaar.jpg', '+1 310-246-5555', 'spanish', 'www.thebazaar.com');
    $('#restaurant').append("<h1>RESTAURANT</h1>\n        <div class=\"row\">" + restaurant1.insertrestaurant() + restaurant2.insertrestaurant() + restaurant3.insertrestaurant() + restaurant4.insertrestaurant() + "</div>");
    // --> EVENT
    var event = /** @class */ (function (_super) {
        __extends(event, _super);
        function event(district, name, address, zip, imgname, date, time, price) {
            var _this = _super.call(this, district, name, address, zip, imgname) || this;
            _this.date = '';
            _this.time = '';
            _this.price = '';
            _this.date = date;
            _this.time = time;
            _this.price = price;
            return _this;
        }
        ;
        event.prototype.insertevent = function () {
            return "<div class=\"col-xl-3 p-0 col-md-4 col-sm-12\">\n                                <div class=\"innderdiv\">\n                                    <img class=\"location\" src=\"./img/" + this.imgname + "\">\n                                    <span class=\"text\">" + _super.prototype.basicinfo.call(this) + "<br>" + this.date + "<br>" + this.time + "<br>" + this.price + "</span>\n                                </div>\n                            </div>";
        };
        return event;
    }(Location));
    ;
    var event1 = new event('La Fahion district', 'Los Angeles Fashion Week ', 'RSVP for address', 123, 'lfw.jpg', '10 Oct 2020', '5:00 pm', '1,000 $');
    var event2 = new event('UCLA Campus', 'DataScienceGO', 'UCLA Campus', 121, 'dsgo.jpg', '23 Oct 2020', '9:00 am', '499 $');
    var event3 = new event('hollywood hills', '4<sup>th</sup> july, pool party. open bar event', 'hollywood hills', 123, '4thjuly.jpg', '4 July 2020', '2:00 pm', 'free');
    var event4 = new event('Dave & Buster\'s', 'dave & busters comedy night', 'Hollywood Boulevard', 343, 'dbcomedy.jpg', '24 June 2020', '9:00 pm', 'free');
    $('#event').append("<h1>EVENT</h1>\n        <div class=\"row\">" + event1.insertevent() + event2.insertevent() + event3.insertevent() + event4.insertevent() + "</div>");
    // insert rating stars
    $(".innderdiv").append("<div class=\"star\">\n            <span class=\"rating1\">&#9733;</span>\n            <span class=\"rating2\">&#9733;</span>\n            <span class=\"rating3\">&#9733;</span>\n            <span class=\"rating4\">&#9733;</span>\n            <span class=\"rating5\">&#9733;</span>\n            <span></span>\n            </div>");
    // click animation rating
    $(".rating1").on('click', function () {
        $(this).addClass("active");
        $(this).nextAll().removeClass("active");
    });
    $(".rating2").on('click', function () {
        $(this).addClass("active");
        $(this).prevAll().addClass("active");
        $(this).nextAll().removeClass("active");
    });
    $(".rating3").on('click', function () {
        $(this).addClass("active");
        $(this).prevAll().addClass("active");
        $(this).nextAll().removeClass("active");
    });
    $(".rating4").on('click', function () {
        $(this).addClass("active");
        $(this).prevAll().addClass("active");
        $(this).nextAll().removeClass("active");
    });
    $(".rating5").on('click', function () {
        $(this).addClass("active");
        $(this).prevAll().addClass("active");
        $(this).nextAll().removeClass("active");
        //$(this).last().append("awesome")
    });
}); // document ready end tag
