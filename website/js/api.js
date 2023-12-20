document.addEventListener('DOMContentLoaded', function() {
    function validateNumberInput(input) {
        input.value = input.value.replace(/[^0-9.]/g, '').replace(/(\..*)\./g, '$1');
    }

    function makeApiCall(baseUrl, latId, lonId, nId, preId) {
        const lat = document.getElementById(latId).value;
        const lon = document.getElementById(lonId).value;
        const n = document.getElementById(nId).value;
        const url = `${baseUrl}?lat=${lat}&long=${lon}&n=${n}`;

        fetch(url)
            .then(response => response.json())
            .then(data => {
                document.getElementById(preId).textContent = JSON.stringify(data, null, 2);
            })
            .catch(error => console.error('Error:', error));
    }

    document.getElementById('goButton1').addEventListener('click', function() {
        makeApiCall('http://localhost:3000/nearest-vaccines', 'lat1', 'lon1', 'n1', 'json-pre1');
    });

    document.getElementById('goButton2').addEventListener('click', function() {
        makeApiCall('http://localhost:3000/nearest-treatments', 'lat2', 'lon2', 'n2', 'json-pre2');
    });
});