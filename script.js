function LoadGmaps() {
    var myLatlng = new google.maps.LatLng(11.3216676, 75.9342274000001);
    var myOptions = {
        zoom: 12,
        center: myLatlng,
        disableDefaultUI: true,
        panControl: true,
        zoomControl: true,
        zoomControlOptions: {
            style: google.maps.ZoomControlStyle.DEFAULT
        },
        mapTypeControl: true,
        mapTypeControlOptions: {
            style: google.maps.MapTypeControlStyle.HORIZONTAL_BAR
        },
        streetViewControl: true,
        mapTypeId: google.maps.MapTypeId.ROADMAP
    }
    var map = new google.maps.Map(document.getElementById("MyGmaps"), myOptions);
    var marker = new google.maps.Marker({
        position: myLatlng,
        map: map,
    });
}
