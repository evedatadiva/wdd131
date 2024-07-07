document.addEventListener('DOMContentLoaded', () => {
    
    const currentYear = new Date().getFullYear();
    const lastModified = document.lastModified;

    document.getElementById('currentYear').textContent = currentYear;
    document.getElementById('lastModified').textContent = lastModified;

    
    const temperature = 10; 
    const windSpeed = 5; 

    function calculateWindChill(temp, wind) {
        return 13.12 + 0.6215 * temp - 11.37 * Math.pow(wind, 0.16) + 0.3965 * temp * Math.pow(wind, 0.16);
    }

    const windChillElement = document.getElementById('windChill');

    if (temperature <= 10 && windSpeed > 4.8) {
        const windChill = calculateWindChill(temperature, windSpeed);
        windChillElement.textContent = `${windChill.toFixed(2)}°C`;
    } else {
        windChillElement.textContent = "N/A";
    }
});
