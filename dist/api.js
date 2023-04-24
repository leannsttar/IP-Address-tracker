//guardando los <p> en variables
let p_ip_address = document.getElementById('ip-address');
let p_location = document.getElementById('location');
let p_timezone = document.getElementById('timezone');
let p_isp = document.getElementById('isp');


//MAP
//Haciendo el mapa con lat y lon 0,0 ya que primero tenemos que obtener los datos del fetch
var map = L.map('map').setView([0, 0], 13);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);


//Fetch para la ip del usuario que entra
// Agregando valores para imprimirlos
fetch(`https://geo.ipify.org/api/v1?apiKey=at_xq5IkBKpzV6I3xQzeot72F9CcffGi`)
.then(response => response.json())
.then(data => {
  const userIP = data.ip;
  const userLocation = `${data.location.city}, ${data.location.region}, ${data.location.country}`;
  const userDomain = data.isp;
  const userTimezone = `UTC${data.location.timezone}`;
  const lat = data.location.lat;
  const lon = data.location.lng;

   //Añadiendo los valores a los <p>
  p_ip_address.textContent = userIP;
  p_location.textContent = userLocation;
  p_timezone.textContent = userTimezone;
  p_isp.textContent = userDomain;

  //Cambiando la view osea el lugar del mapa y el marker con la latitud y longitud
  //Esto al final lo puse aqui porque necesito que termine de hacerse la promesa para tener los valores de lat y lon, ya que antes lo hacia afuera y no tenia los valores porque
  //la promesa no habia terminado
  map.setView([lat, lon], 13);
  L.marker([lat, lon]).addTo(map)

})
.catch(error => console.error(error));



//Obtener el boton
const miBoton = document.getElementById("mi-boton");

//Funcioncita para cuando aprete el boton traiga el valor del input, osea la ip ingresada
miBoton.addEventListener("click", function(evento) {
  evento.preventDefault(); 
  
  const miInput = document.getElementById("ip");
  const valorInput = miInput.value;
  
  // Fetch y agregando valores para imprimirlos
  fetch(`https://geo.ipify.org/api/v1?apiKey=at_xq5IkBKpzV6I3xQzeot72F9CcffGi&ipAddress=${valorInput}`)
  .then(response => response.json())
  .then(data => {
    const userIP = data.ip;
    const userLocation = `${data.location.city}, ${data.location.region}, ${data.location.country}`;
    const userDomain = data.isp;
    const userTimezone = `UTC${data.location.timezone}`;
    const lat = data.location.lat;
    const lon = data.location.lng;

    //Añadiendo los valores a los <p>
    p_ip_address.textContent = userIP;
    p_location.textContent = userLocation;
    p_timezone.textContent = userTimezone;
    p_isp.textContent = userDomain;

    //Cambiando la view osea el lugar del mapa y el marker con la latitud y longitud
    //Esto al final lo puse aqui porque necesito que termine de hacerse la promesa para tener los valores de lat y lon, ya que antes lo hacia afuera y no tenia los valores porque
    //la promesa no habia terminado
    map.setView([lat, lon], 13);
    L.marker([lat, lon]).addTo(map)

  })

  .catch(error => console.error(error));

});










