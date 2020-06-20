  $(document).ready(function() {

        //class

        class Location{
            public created: string ='';
            public district: string ='';
            public name: string = '';
            public address: string = '';
            public zip: number = 0;
            public imgname: string = '';

    
            constructor(created: string, district: string, name: string, address: string, zip: number, imgname: string) {
                this.district = district;
                this.name = name;
                this.address = address;
                this.zip = zip;
                this.imgname = imgname;
                this.created = created;
            }
    
            insertlocation() {
                return      `<div class="col-xl-3 p-0 col-md-6 col-sm-12">
                                <div class="innderdiv">
                                    <img class="d-none d-md-block location" src="./img/${this.imgname}">
                                    <span class="text">${this.created}<br><b>${this.name}</b><br>${this.district}<br>${this.zip} ${this.address}</span>
                                </div>
                            </div>`;
            };

            basicinfo() {
                return `${this.created}<br><b>${this.name}</b><br>${this.district}<br>${this.zip} ${this.address}<br>`
            }
        };
    
        let place1 = new Location('Created: 24.10.2020 12:45', 'Universal City', 'Universal Studios Hollywood', 'Universal City Plaza', 100, 'universal.jpg');
        let place2 = new Location('Created: 25.10.2020 12:45', 'Los Angeles', 'Griffith-Observatorium', 'E Observatory Rd', 2800, 'griffith.jpg');
        let place3 = new Location('Created: 26.10.2020 12:45', 'Los Angeles', 'Hollywood Sign', 'CA 90068', 125, 'hollywoodsign.jpg');
        let place4 = new Location('Created: 27.10.2020 12:45', 'Santa Monica', 'Santa Monica Pier', 'Santa Monica Pier', 200, 'santamonica.jpg');
        


        $('#location').append(`<h1>LOCATIONS</h1>
        <div class="row">${place1.insertlocation()}${place2.insertlocation()}${place3.insertlocation()}${place4.insertlocation()}</div>`);
    

        // --> RESTAURANT

        class restaurant extends Location {
            public telephone: string = '';
            public type: string = '';
            public web: string = '';
            public name: string = '';
    
            constructor(created: string, district: string, name: string, address: string, zip: number, imgname: string, telephone: string, type: string, web: string) {
                super(created, district, name, address, zip, imgname);
                this.telephone = telephone;
                this.type = type;
                this.web = web;
            };
    
            insertrestaurant() {
                return      `<div class="col-xl-3 p-0 col-md-6 col-sm-12">
                                <div class="innderdiv">
                                    <img class="d-none d-md-block location" src="./img/${this.imgname}">
                                    <span class="text">${super.basicinfo()}<br>&#9990; ${this.telephone}<br>${this.type}<br>${this.web}</span>
                                </div>
                            </div>`;
            }
        };
    
        let restaurant1 = new restaurant('Created: 28.10.2020 12:45', 'Los Angeles', 'Eleven City Deli', 'Wilshire Blvd', 5400, 'deli.jpg', '(323) 761-1211', 'american, deli', 'www.elevencityla.com/');
        let restaurant2 = new restaurant('Created: 29.10.2020 12:45', 'Beverly Hills', 'STK Steakhouse', 'Hilgard Ave W', 930, 'stk.jpg', '(310) 659-3535', 'american, steakhouse', 'stksteakhouse.com/');
        let restaurant3 = new restaurant('Created: 30.10.2020 12:45', 'Los Angeles', 'Providence', 'Melrose Ave', 5955, 'prov.jpg', '+1 323-460-4170', 'seafood', 'providencela.com/');
        let restaurant4 = new restaurant('Created: 31.10.2020 12:45', 'Beverly Hills', 'The Bazaar', 'S La Cienega Blvd', 465, 'bazaar.jpg', '+1 310-246-5555', 'spanish', 'www.thebazaar.com');
        
        $('#restaurant').append(`<h1>RESTAURANT</h1>
        <div class="row">${restaurant1.insertrestaurant()}${restaurant2.insertrestaurant()}${restaurant3.insertrestaurant()}${restaurant4.insertrestaurant()}</div>`);
    
    
    
        // --> EVENT
    
        class event extends Location {
            public date: string = '';
            public time: string = '';
            public price: string = '';
    
            constructor(created: string, district: string, name: string, address: string, zip: number, imgname: string, date: string, time: string, price: string) {
                super(created, district, name, address, zip, imgname);
                this.date = date;
                this.time = time;
                this.price = price;
            };
    
            insertevent() {
                return      `<div class="col-xl-3 p-0 col-md-6 col-sm-12">
                                <div class="innderdiv">
                                    <img class="d-none d-md-block location" src="./img/${this.imgname}">
                                    <span class="text">${super.basicinfo()}<br>${this.date}<br>${this.time}<br>${this.price}</span>
                                </div>
                            </div>`;
            }
        };
    
        let event1 = new event('Created: 01.11.2020 12:45', 'La Fahion district', 'Los Angeles Fashion Week ', 'RSVP for address', 123, 'lfw.jpg', '10 Oct 2020', '5:00 pm', '1,000 $');
        let event2 = new event('Created: 02.11.2020 12:45', 'UCLA Campus', 'DataScienceGO', 'UCLA Campus', 121, 'dsgo.jpg', '23 Oct 2020', '9:00 am', '499 $');
        let event3 = new event('Created: 03.11.2020 12:45', 'hollywood hills', '4<sup>th</sup> july, pool party. open bar event', 'hollywood hills', 123, '4thjuly.jpg', '4 July 2020', '2:00 pm', 'free');
        let event4 = new event('Created: 04.11.2020 12:45', 'Dave & Buster\'s', 'dave & busters comedy night', 'Hollywood Boulevard', 343, 'dbcomedy.jpg', '24 June 2020', '9:00 pm', 'free');
        
        $('#event').append(`<h1>EVENT</h1>
        <div class="row">${event1.insertevent()}${event2.insertevent()}${event3.insertevent()}${event4.insertevent()}</div>`);
    






        // insert rating stars
        $(".innderdiv").append(
            `<div class="star">
            <span class="rating1">&#9733;</span>
            <span class="rating2">&#9733;</span>
            <span class="rating3">&#9733;</span>
            <span class="rating4">&#9733;</span>
            <span class="rating5">&#9733;</span>
            <span></span>
            </div>`);
    
    
    
           // click animation rating
    
            $(".rating1").on('click', function(){
                $(this).addClass("active")
                $(this).nextAll().removeClass("active")
            });
            $(".rating2").on('click', function(){
                $(this).addClass("active")
                $(this).prevAll().addClass("active")
                $(this).nextAll().removeClass("active")
    
            });
            $(".rating3").on('click', function(){
                $(this).addClass("active")
                $(this).prevAll().addClass("active")
                $(this).nextAll().removeClass("active")
            });
            $(".rating4").on('click', function(){
                $(this).addClass("active")
                $(this).prevAll().addClass("active")
                $(this).nextAll().removeClass("active")
            });
            $(".rating5").on('click', function(){
                $(this).addClass("active")
                $(this).prevAll().addClass("active")
                $(this).nextAll().removeClass("active")
                //$(this).last().append("awesome")
            });
            
    


  }); // document ready end tag
