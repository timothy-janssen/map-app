function initMap () {
  window.map = new google.maps.Map(document.getElementById('map'), {
    // OPTIONS
    center: {lat: -34.397, lng: 150.644},
    zoom: 8,
    zoomControl: false,
    streetViewControl: false,
    mapTypeControl: false,
    rotateControl: false,
    scaleControl: false,
    fullscreenControl: false
  });
}
     
const zoom = (direction) => {
  window.map.setZoom(window.map.getZoom() + direction);
}

const setCenter = (lat, lng) => {
  window.map.setCenter({lat: lat, lng: lng});
}

window.webchatMethods = {
  applicationParse: (messages) => {
    messages.map(message => {
      try {
        var obj = JSON.parse(message.attachment.content);
        console.log(obj);
        if(obj !== undefined && 
           obj.action == 'zoom' && 
           typeof obj.direction === "number"){
          message.attachment.content = obj.message.toString();
          zoom(obj.direction);
        } else if (obj !== undefined && 
                   obj.action == 'move' && 
                   typeof obj.location.lat === "number" && 
                   typeof obj.location.lng === "number") {
          message.attachment.content = obj.message.toString();
          setCenter(obj.location.lat, obj.location.lng);
        }
      } catch (err) {
        // Do nothing, invalid json - this is fine
      }
      message
    }) 
    return messages;     
  }
}