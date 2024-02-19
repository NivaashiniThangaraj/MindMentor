let map;

function initMap() {
    // Initial map center (you can set it to your location)
    const initialLocation = { "lat": 11.0086370, "lng": 76.956934 };

    // Create the map
    map = new google.maps.Map(document.getElementById("map"), {
        center: initialLocation,
        zoom: 12
    });

    // Call a function to fetch and display events on the map
    displayEvents();
}
function displayEvents() {
    // Fetch events from the static JSON file (you might replace this with an API call)
    fetch('events.json')
        .then(response => response.json())
        .then(events => {
            // Loop through each event and add a marker
            events.forEach(event => {
                const eventMarker = new google.maps.Marker({
                    position: event.location,
                    map: map,
                    title: event.name
                });

                // You can customize the marker or add additional details as needed
                // Repeat the process for each event
            });
        })
        .catch(error => console.error('Error fetching events:', error));
}