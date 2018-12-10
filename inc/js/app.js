var datasetApp = angular.module('datasetApp', []);

datasetApp.controller('datasetController', function datasetController($scope) {
    $scope.datasets = [];
    
    $scope.template = function(){
        $scope.datasets = [
            {
                name: 'Locations',
                type: 'Location',
                numRecords: 25,
                peopleData: {
                    locations: true,
                    locationType: 'World Tree',
                    employeeCode: true
                },
                numberData: {
                    order: 'rand',
                    startNumber: 1000,
                    endNumber: 2000,
                    dimensionA: 2,
                    dimensionB: 3,
                    dimensionC: 4
                },
                locationData: {
                    locationType: 'World Tree'
                },
                productData: {
                    productType: 'Widgets Flat'
                },
                dateData: {
                    year: '2016',
                    numMonths: '12'
                },
                csv: '',
                data: []
            },
            {
                name: 'Employees',
                type: 'People',
                numRecords: 25,
                peopleData: {
                    locations: true,
                    locationType: 'World Flat',
                    employeeCode: true
                },
                numberData: {
                    order: 'rand',
                    startNumber: 1000,
                    endNumber: 2000,
                    dimensionA: 2,
                    dimensionB: 3,
                    dimensionC: 4
                },
                locationData: {
                    locationType: 'UK Flat'
                },
                productData: {
                    productType: 'Widgets Flat'
                },
                dateData: {
                    year: '2016',
                    numMonths: '12'
                },
                csv: '',
                data: []
            },
            {
                name: 'Products',
                type: 'Product',
                numRecords: 25,
                peopleData: {
                    locations: true,
                    locationType: 'UK Flat',
                    employeeCode: true
                },
                numberData: {
                    order: 'rand',
                    startNumber: 1000,
                    endNumber: 2000,
                    dimensionA: 2,
                    dimensionB: 3,
                    dimensionC: 4
                },
                locationData: {
                    locationType: 'UK Flat'
                },
                productData: {
                    productType: 'Food Tree'
                },
                dateData: {
                    year: '2016',
                    numMonths: '12'
                },
                csv: '',
                data: []
            },
            {
                name: 'Sales Dates',
                type: 'Date',
                numRecords: 25,
                peopleData: {
                    locations: true,
                    locationType: 'UK Flat',
                    employeeCode: true
                },
                numberData: {
                    order: 'rand',
                    startNumber: 1000,
                    endNumber: 2000,
                    dimensionA: 2,
                    dimensionB: 3,
                    dimensionC: 4
                },
                locationData: {
                    locationType: 'UK Flat'
                },
                productData: {
                    productType: 'Widgets Flat'
                },
                dateData: {
                    year: '2017',
                    numMonths: '9'
                },
                csv: '',
                data: []
            },
            {
                name: 'Forecast Dates',
                type: 'Date',
                numRecords: 25,
                peopleData: {
                    locations: true,
                    locationType: 'UK Flat',
                    employeeCode: true
                },
                numberData: {
                    order: 'rand',
                    startNumber: 1000,
                    endNumber: 2000,
                    dimensionA: 2,
                    dimensionB: 3,
                    dimensionC: 4
                },
                locationData: {
                    locationType: 'UK Flat'
                },
                productData: {
                    productType: 'Widgets Flat'
                },
                dateData: {
                    year: '2017',
                    numMonths: '12'
                },
                csv: '',
                data: []
            },
            {
                name: 'Forecast',
                type: 'Number',
                numRecords: 25,
                peopleData: {
                    locations: true,
                    locationType: 'UK Flat',
                    employeeCode: true
                },
                numberData: {
                    order: 'rand',
                    startNumber: 800,
                    endNumber: 1800,
                    dimensionA: '1',
                    dimensionB: '4',
                    dimensionC: '2'
                },
                locationData: {
                    locationType: 'UK Flat'
                },
                productData: {
                    productType: 'Widgets Flat'
                },
                dateData: {
                    year: '2016',
                    numMonths: '12'
                },
                csv: '',
                data: []
            },
            {
                name: 'Sales',
                type: 'Number',
                numRecords: 25,
                peopleData: {
                    locations: true,
                    locationType: 'UK Flat',
                    employeeCode: true
                },
                numberData: {
                    order: 'rand',
                    startNumber: 1000,
                    endNumber: 2000,
                    dimensionA: '1',
                    dimensionB: '3',
                    dimensionC: '2'
                },
                locationData: {
                    locationType: 'UK Flat'
                },
                productData: {
                    productType: 'Widgets Flat'
                },
                dateData: {
                    year: '2017',
                    numMonths: '9'
                },
                csv: '',
                data: []
            }
        ];
    }
    
    $scope.create = function(){
        $scope.datasets[$scope.datasets.length] = {
            name: '',  /* String */
            type: 'People',     /* People, Number, Location, Product, Date */
            numRecords: 25,     /* Int */
            peopleData: {
                locations: true,
                locationType: 'UK Flat', /* UK Flat, UK Tree, World Flat, World Tree, US Flat, US Tree */
                employeeCode: true
            },
            numberData: {
                order: 'rand',   /* asc, desc, rand */
                startNumber: 1000,
                endNumber: 2000,
                dimensionA: 0,
                dimensionB: 0,
                dimensionC: 0
            },
            locationData: {
                locationType: 'UK Flat' /* UK Flat, UK Tree, World Flat, World Tree, US Flat, US Tree */
            },
            productData: {
                productType: 'Widgets Flat' /* Widgets Flat, Widgets Tree, Clothing Flat, Clothing Tree, Food Flat, Food Tree */
            },
            dateData: {
                year: '2016',
                numMonths: '12'
            },
            csv: '',
            data: []
        }
    }
    
    
    $scope.generate = function(){
        var a, temp;
        for(a=0;a<$scope.datasets.length;a++){
            $scope.datasets[a];
            if($scope.datasets[a].type != 'Number'){
                $scope.datasets[a].csv = '';
                $scope.datasets[a].data = [];
                
                if($scope.datasets[a].type == 'Date'){
                    $scope.datasets[a].csv = 'Month mm-dd-yyyy\n';
                    for(b=1;b<13;b++){
                        if(b<=Number($scope.datasets[a].dateData.numMonths)){
                            if(b<10){
                                $scope.datasets[a].csv = $scope.datasets[a].csv+'0'+b+'-01-'+$scope.datasets[a].dateData.year;
                                $scope.datasets[a].data[$scope.datasets[a].data.length] = '0'+b+'-01-'+$scope.datasets[a].dateData.year;
                            }
                            if(b>9){
                                $scope.datasets[a].csv = $scope.datasets[a].csv+b+'-01-'+$scope.datasets[a].dateData.year;
                                $scope.datasets[a].data[$scope.datasets[a].data.length] = b+'-01-'+$scope.datasets[a].dateData.year;
                            }
                            if(b<12){
                                $scope.datasets[a].csv = $scope.datasets[a].csv+'\n';
                            }
                        }
                    }
                }
                
                if($scope.datasets[a].type == 'Location'){
                    $scope.datasets[a].csv = '';
                    if($scope.datasets[a].locationData.locationType=='UK Flat'){
                        $scope.datasets[a].csv = 'Location\nAberdeen\nDundee\nCardiff\nNewport\nBristol\nPlymouth\nEast London\nSouth London\nNorth London\nWest ondon\nBirmingham\nNottingham\nYork\nLeeds\nNewcastle';
                        $scope.datasets[a].data = ['Aberdeen','Dundee','Cardiff','Newport','Bristol','Plymouth','East London','South London','North London','West London','Birmingham','Nottingham','York','Leeds','Newcastle'];
                    }
                    if($scope.datasets[a].locationData.locationType=='UK Tree'){
                        $scope.datasets[a].csv = 'Location, Parent\nScotland,\nAberdeen, Scotland\nDundee, Scotland\nWales,\nCardiff, Wales\nNewport, Wales\nSouth,\nBristol, South\nPlymouth, South\nLondon, South\nEast London, London\nSouth London, London\nNorth London, London\nWest London, London\nMidlands,\nBirmingham, Midlands\nNottingham, Midlands\nNorth,\nYork, North\nLeeds, North\nNewcastle, North';
                        $scope.datasets[a].data = ['Aberdeen','Dundee','Cardiff','Newport','Bristol','Plymouth','East London','South London','North London','West London','Birmingham','Nottingham','York','Leeds','Newcastle'];
                    }  
                    if($scope.datasets[a].locationData.locationType=='World Flat'){
                        $scope.datasets[a].csv = 'Location\nYork\nLondon\nBelgium\nGermany\nParis\nLille\nNew York\nWashington\nMinnesota\nSan Francisco\nLos Angeles\nOsaka\nTokyo\nSingapore\nChina';
                        $scope.datasets[a].data = ['York','London','Belgium','Germany','Paris','Lille','New York','Washington','Minnesota','San Francisco','Los Angeles','Osaka','Tokyo','Singapore','China'];
                    }
                    if($scope.datasets[a].locationData.locationType=='World Tree'){
                        $scope.datasets[a].csv = 'Location, Parent\nEMEA,\nUK, EMEA\nYork, UK\nLondon, UK\nBelgium, EMEA\nGermany, EMEA\nFrance, EMEA\nParis, France\nLille, France\nUS,\nEast, US\nNew York, East\nWashington, East\nCentral, US\nMinnesota, Central\nWest, US\nSan Francisco, West\nLos Angeles, West\nAPAC,\nJapan, APAC\nOsaka, Japan\nTokyo, Japan\nSingapore, APAC\nChina, APAC';
                        $scope.datasets[a].data = ['York','London','Belgium','Germany','Paris','Lille','New York','Washington','Minnesota','San Francisco','Los Angeles','Osaka','Tokyo','Singapore','China'];
                    }
                    if($scope.datasets[a].locationData.locationType=='US Flat'){
                        $scope.datasets[a].csv = 'Location\nSalem\nSacramento\nSan Diego\nLos Angeles\nLas Vegas\nDenver\nSalt Lake City\nDallas\nHouston\nAustin\nAlbany\nNew York\nWashnington DC';           
                        $scope.datasets[a].data = ['Salem','Sacramento','San Diego','Los Angeles','Las Vegas','Denver','Salt Lake City','Dallas','Houston','Austin','Albany','New York','Washnington DC'];
                    }
                    if($scope.datasets[a].locationData.locationType=='US Tree'){
                        $scope.datasets[a].csv = 'Location, Parent\nWest,\nSalem, West\nCalifornia, West\nSacramento, California\nSan Diego, California\nLos Angeles, California\nLas Vegas, West\nCentral,\nDenver, Central\nSalt Lake City, Central\nTexas, Central\nDallas, Texas\nHouston, Texas\nAustin, Texas\nEast,\nAlbany, East\nNew York, East\nWashnington DC, East';
                        $scope.datasets[a].data = ['Salem','Sacramento','San Diego','Los Angeles','Las Vegas','Denver','Salt Lake City','Dallas','Houston','Austin','Albany','New York','Washnington DC'];
                    }
                }
                
                if($scope.datasets[a].type == 'People'){
                    $scope.datasets[a].csv = 'Name, Location, Employee Code'
                    letters = ['A','B','C','D','E','F','G','H','J','K','L','M','N','P','R','T','U','W','X','Y'];
                    forenames = ['Amanda','Bob','Charlie','Donna','Emma','Francis','George','Harry','Irma','Julie','Kris','Louise','Maria','Nicola','Oswald','Peter','Quentin','Robert','Suzy','Tim','Ursula','Victoria','Walter','William','Yusef','James','Andrew','Brenda','Christine','Dave','Eddy','Frank','Gregory','Heston','Ian','Joe','Ken','Larry','Mick','Nick','Paul','Paula','Pauline','Reggie','Simon','Terry','Tina','Vicky','Wendy','Will','Jimmy','Hank'];
                    surnames = ['Anderson','Barnard','Christianson','Donaldson','Easington','Fredericks','Gerry','Howard','Islington','Jonson','Kristofferson','Lonsdale','Michaels','North','Orping','Peterson','Querral','Robertson','Smithson','Thomas','Walker','Vernon','Williams','East','Young','Smith',
                    'Anholm','Bevvers','Cringle','Damon','Elvington','Farmer','Gerhold','Hampton','Irving','Jones','Kring','Lomas','Martin'];
                    towns = [];
                    if($scope.datasets[a].peopleData.locationType == 'World Flat'){
                        towns = ['York','London','Belgium','Germany','Paris','Lille','New York','Washington','Minnesota','San Francisco','Los Angeles','Osaka','Tokyo','Singapore','China'];
                    }
                    if($scope.datasets[a].peopleData.locationType == 'US Flat'){
                        towns = ['Salem','Sacramento','San Diego','Los Angeles','Las Vegas','Denver','Salt Lake City','Dallas','Houston','Austin','Albany','New York','Washnington DC'];
                    }
                    if($scope.datasets[a].peopleData.locationType == 'UK Flat'){
                        towns = ['Aberdeen','Dundee','Cardiff','Newport','Bristol','Plymouth','East London','South London','North London','West London','Birmingham','Nottingham','York','Leeds','Newcastle'];
                    }
                    for(b=0;b<$scope.datasets[a].numRecords;b++){
                        code = ''+Math.floor(Math.random()*10000)+letters[Math.floor(Math.random()*19)]+letters[Math.floor(Math.random()*19)]+letters[Math.floor(Math.random()*19)]+Math.floor(Math.random()*10000)+letters[Math.floor(Math.random()*19)]+Math.floor(Math.random()*10000)+letters[Math.floor(Math.random()*19)]+Math.floor(Math.random()*10000)+letters[Math.floor(Math.random()*19)];
                        f = forenames[Math.floor(Math.random()*52)];
                        s = surnames[Math.floor(Math.random()*39)];
                        t = towns[Math.floor(Math.random()*towns.length)];
                        $scope.datasets[a].csv = $scope.datasets[a].csv + '\n' + f + ' ' + s + ', ' + t + ', ' + code;
                        $scope.datasets[a].data[$scope.datasets[a].data.length] = code;
                    }
                }
                
                if($scope.datasets[a].type == 'Product'){
                    $scope.datasets[a].csv = ''; /* Widgets Flat, Widgets Tree, Clothing Flat, Clothing Tree, Food Flat, Food Tree */
                    if($scope.datasets[a].productData.productType == 'Widgets Flat'){
                        $scope.datasets[a].csv = 'SKU, Product, Cost, Sales Price\nSRW-001, Small Red Widget, 4.50, 8.99\nSBW-002, Small Blue Widget, 4.50, 8.99\nSGW-003, Small Green Widget, 4.50, 8.99\nSSW-001, Small Steel Widget, 9.50, 14.50\nSCW-002, Small Copper Widget, 11.70, 18.99\nBRW-001, Big Red Widget, 8.50, 11.50\nBBW-002, Big Blue Widget, 8.50, 11.50\nBGW-003, Big Green Widget, 8.50, 11.50\nBSW-001, Big Steel Widget, 12.50, 18.50\nBCW-002, Big Copper Widget, 14.50, 20.99\nXRW-001, XL Red Widget, 10.00, 14.50\nXBW-002, XL Blue Widget, 10.00, 14.50\nXGW-003, XL Green Widget, 10.00, 14.50\nXSW-001, XL Steel Widget, 14.50, 20.99\nXCW-002, XL Copper Widget, 18.00, 24.50';
                    }
                    if($scope.datasets[a].productData.productType == 'Widgets Tree'){
                        $scope.datasets[a].csv = 'SKU, Product, Cost, Sales Price, Parent\nWID, All Widgets,,,\nSWID, Small Widgets,,, All Widgets\nSPW, Small Plastic Widgets,,, Small Widgets\nSRW-001, Small Red Widget, 4.50, 8.99, Small Plastic Widgets\nSBW-002, Small Blue Widget, 4.50, 8.99, Small Plastic Widgets\nSGW-003, Small Green Widget, 4.50, 8.99, Small Plastic Widgets\nSMW, Small Metal Widgets,,, Small Widgets\nSSW-001, Small Steel Widget, 9.50, 14.50, Small Metal Widgets\nSCW-002, Small Copper Widget, 11.70, 18.99, Small Metal Widgets\nBWID, Big Widgets,,, All Widgets\nBPW, Big Plastic Widgets,,, Big Widgets\nBRW-001, Big Red Widget, 8.50, 11.50, Big Plastic Widgets\nBBW-002, Big Blue Widget, 8.50, 11.50, Big Plastic Widgets\nBGW-003, Big Green Widget, 8.50, 11.50, Big Plastic Widgets\nBMW, Big Metal Widgets,,, Big Widgets\nBSW-001, Big Steel Widget, 12.50, 18.50, Big Metal Widgets\nBCW-002, Big Copper Widget, 14.50, 20.99, Big Metal Widgets\nXWID, XL Widgets,,, All Widgets\nXPW, XL Plastic Widgets,,, XL Widgets\nXRW-001, XL Red Widget, 10.00, 14.50, XL Plastic Widgets\nXBW-002, XL Blue Widget, 10.00, 14.50, XL Plastic Widgets\nXGW-003, XL Green Widget, 10.00, 14.50, XL Plastic Widgets\nXMW, XL Metal Widgets,,, XL Widgets\nXSW-001, XL Steel Widget, 14.50, 20.99, XL Metal Widgets\nXCW-002, XL Copper Widget, 18.00, 24.50, XL Metal Widgets';
                    }
                    if($scope.datasets[a].productData.productType == 'Food Flat'){
                        $scope.datasets[a].csv = 'SKU, Product, Cost, Sales Price, Parent\nBe-COL,Cola,0.6,2.99,Beverages\nBe-LEM,Lemonade,0.4,2.99,Beverages\nBe-ORA,Orange Soda,0.5,2.99,Beverages\nSH-BS,Banana Shake,2.2,4.99,Shakes\nSH-CH,Chocolate Shake,2.2,4.99,Shakes\nSH-ST,Strawberry Shake,2.2,4.99,Shakes\nB-BBQ,BBQ Bacon Stack Burger,4.5,9.99,Beef\nB-DCB,Double Cheese Burger,4.5,8.99,Beef\nB-EB,Elvis Burger,8,14.99,Beef\nB-SCTB,Swiss Cheese Triple Burger,7,12.99,Beef\nC-CCB,Chicken Combo Burger,8,11.99,Chicken\nC-FCB,Fried Chicken Stack Burger,7.2,10.99,Chicken\nC-GCB,Grilled Chicken Stack Burger,6.8,10.99,Chicken\nV-HB,Halloumi Burger,8,10.99,Veg\nV-BB,Spicy Bean Burger,6.5,8.99,Veg\nV-TB,Tofu Burger,5.5,8.99,Veg\nS-F,Fries,1.6,4.99,Sides\nS-JP,Jalepeno Poppers,3.5,6.99,Sides\nS-JS,Jalepeno Salsa,0.6,2.99,Sides\nS-PW,Potato Wedges,1.2,3.99,Sides\nS-S,Salad,2,4.5,Sides\n';
                    }
                    if($scope.datasets[a].productData.productType == 'Food Tree'){
                        $scope.datasets[a].csv = 'SKU, Product, Cost, Sales Price, Parent\n,All Products,,,\n,Beverages,,,All Products\nBe-COL,Cola,0.6,2.99,Beverages\nBe-LEM,Lemonade,0.4,2.99,Beverages\nBe-ORA,Orange Soda,0.5,2.99,Beverages\n,Shakes,,,Beverages\nSH-BS,Banana Shake,2.2,4.99,Shakes\nSH-CH,Chocolate Shake,2.2,4.99,Shakes\nSH-ST,Strawberry Shake,2.2,4.99,Shakes\n,Burgers,,,All Products\n,Beef,,,Burgers\nB-BBQ,BBQ Bacon Stack Burger,4.5,9.99,Beef\nB-DCB,Double Cheese Burger,4.5,8.99,Beef\nB-EB,Elvis Burger,8,14.99,Beef\nB-SCTB,Swiss Cheese Triple Burger,7,12.99,Beef\n,Chicken,,,Burgers\nC-CCB,Chicken Combo Burger,8,11.99,Chicken\nC-FCB,Fried Chicken Stack Burger,7.2,10.99,Chicken\nC-GCB,Grilled Chicken Stack Burger,6.8,10.99,Chicken\n,Veg,,,Burgers\nV-HB,Halloumi Burger,8,10.99,Veg\nV-BB,Spicy Bean Burger,6.5,8.99,Veg\nV-TB,Tofu Burger,5.5,8.99,Veg\n,Sides,,,All Products\nS-F,Fries,1.6,4.99,Sides\nS-JP,Jalepeno Poppers,3.5,6.99,Sides\nS-JS,Jalepeno Salsa,0.6,2.99,Sides\nS-PW,Potato Wedges,1.2,3.99,Sides\nS-S,Salad,2,4.5,Sides\n';
                    }
                    
                    if($scope.datasets[a].productData.productType == 'Widgets Flat' || $scope.datasets[a].productData.productType == 'Widgets Tree'){
                        $scope.datasets[a].data = ['SRW-001','SBW-002','SGW-003','SSW-001','SCW-002','BRW-001','BBW-002','BGW-003','BSW-001','BCW-002','XRW-001','XBW-002','XGW-003','XSW-001','XCW-002'];
                    }
                    if($scope.datasets[a].productData.productType == 'Food Flat' || $scope.datasets[a].productData.productType == 'Food Tree'){
                        $scope.datasets[a].data = ['Be-COL','Be-LEM','Be-ORA','SH-BS','SH-CH','SH-ST','B-BBQ','B-DCB','B-EB','B-SCTB','C-CCB','C-FCB','C-GCB','V-HB','V-BB','V-TB','S-F','S-JP','S-JS','S-PW','S-S'];
                    }
                }
                
            }else{
                $scope.datasets[a].csv = '';
                if($scope.datasets[a].numberData.dimensionA){ $scope.datasets[a].csv = $scope.datasets[a].csv+$scope.datasets[$scope.datasets[a].numberData.dimensionA].name+', '; }
                if($scope.datasets[a].numberData.dimensionC){ $scope.datasets[a].csv = $scope.datasets[a].csv+$scope.datasets[$scope.datasets[a].numberData.dimensionC].name+', '; }
                if($scope.datasets[a].numberData.dimensionB){
                    for(b=0;b<$scope.datasets[$scope.datasets[a].numberData.dimensionB].data.length;b++){
                        $scope.datasets[a].csv = $scope.datasets[a].csv+$scope.datasets[$scope.datasets[a].numberData.dimensionB].data[b];
                        if(b<$scope.datasets[$scope.datasets[a].numberData.dimensionB].data.length-1){
                            $scope.datasets[a].csv = $scope.datasets[a].csv+', ';
                        }else{
                            $scope.datasets[a].csv = $scope.datasets[a].csv+'\n';
                        }
                    }
                    
                    for(b=0;b<$scope.datasets[$scope.datasets[a].numberData.dimensionA].data.length;b++){
                        
                        if($scope.datasets[a].numberData.dimensionC){
                            for(c=0;c<$scope.datasets[$scope.datasets[a].numberData.dimensionC].data.length;c++){
                                $scope.datasets[a].csv = $scope.datasets[a].csv+$scope.datasets[$scope.datasets[a].numberData.dimensionA].data[b];
                                $scope.datasets[a].csv = $scope.datasets[a].csv+','+$scope.datasets[$scope.datasets[a].numberData.dimensionC].data[c];
                                if($scope.datasets[a].numberData.dimensionB){
                                    for(d=0;d<$scope.datasets[$scope.datasets[a].numberData.dimensionB].data.length;d++){
                                        low = $scope.datasets[a].numberData.startNumber;
                                        high = $scope.datasets[a].numberData.endNumber;
                                        range = high-low;
                                        temp = Math.floor(Math.random()*range)+Number(low);
                                        $scope.datasets[a].csv = $scope.datasets[a].csv+','+temp;
                                    }
                                }
                                $scope.datasets[a].csv = $scope.datasets[a].csv+'\n';
                            }
                        }else{
                            $scope.datasets[a].csv = $scope.datasets[a].csv+$scope.datasets[$scope.datasets[a].numberData.dimensionA].data[b];
                        }
                        
                    }
                }
                
                console.log($scope.datasets[a]);
                $('.nav-tabs li').removeClass('active');
                $('#tab-0').addClass('active');
                $('.tab-pane').removeClass('active');
                $('#tab-pane-0').addClass('active');
                
            }
        }
        
    }
    
    $scope.changeTab = function(tabID){
        $('.nav-tabs li').removeClass('active');
        $('#tab-'+tabID).addClass('active');
        $('.tab-pane').removeClass('active');
        $('#tab-pane-'+tabID).addClass('active');
    }
    
    $scope.download = function(id){
        var encodedUri = encodeURI('data:text/csv;charset=utf-8,'+$scope.datasets[id].csv);
        var link = document.createElement("a");
        link.setAttribute("href", encodedUri);
        link.setAttribute("download", $scope.datasets[id].name+".csv");
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    }
    
    $scope.remove = function(i){
        $scope.datasets.splice(i,1);
    }
    
});