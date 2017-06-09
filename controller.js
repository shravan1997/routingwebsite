
app.controller("partnerController", function ($scope) {
    var information = [
        { admin: "superadmin_nitc", type: "SUPERADMIN", name: "NITC", shortname: "Kattangal,Kerala", actions: "down arrow,recycle" },
        { admin: "sstoreadmin_nitc", type: "STOREADMIN", name: "NITC", shortname: "Bangalore, karnataka", actions: "down arrow,recycle" }
    ];
    $scope.inf = information;
    var store = {
            name: "NIT Calicut",
            type: "Education",
            formatted_address1: "National Institute Of Technology, Calicut, Kattangal",
            formatted_address2: "Kerala, India",
            description: "National Institute of Technology, Calicut is a leading institute of engineering and architecture in India. The motto of the institute is 'From Darkness, Lead us unto Light'",
            location: "75.9342274000001, 11.3216676",
            image: "http://res.cloudinary.com/poletalks/image/upload/v1472055369/Nitc_my3vig.jpg"
        };
    $scope.store = store;
});
