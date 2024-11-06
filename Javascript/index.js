function updateTime() {
  // Riyadh
  let riyadhElement = document.querySelector("#riyadh");
  if (riyadhElement) {
    let riyadhDateElement = riyadhElement.querySelector(".date");
    let riyadhTimeElement = riyadhElement.querySelector(".time");
    let riyadhTime = moment().tz("Asia/Riyadh");

    riyadhDateElement.innerHTML = riyadhTime.format("MMMM	Do YYYY");
    riyadhTimeElement.innerHTML = riyadhTime.format(
      "h:mm:ss [<small>]A[</small>]"
    );
  }

  // Lagos
  let lagosElement = document.querySelector("#lagos");
  if (lagosElement) {
    let lagosDateElement = lagosElement.querySelector(".date");
    let lagosTimeElement = lagosElement.querySelector(".time");
    let lagosTime = moment().tz("Africa/Lagos");

    lagosDateElement.innerHTML = lagosTime.format("MMMM	Do YYYY");
    lagosTimeElement.innerHTML = lagosTime.format(
      "h:mm:ss [<small>]A[</small>]"
    );
  }

   // Tel Aviv
  let telAvivElement = document.querySelector("#telaviv");
  if (telAvivElement) {
    let telAvivDateElement = telAvivElement.querySelector(".date");
    let telAvivTimeElement = telAvivElement.querySelector(".time");
    let telAvivTime = moment().tz("Asia/Tel_Aviv");

    telAvivDateElement.innerHTML = telAvivTime.format("MMMM	Do YYYY");
    telAvivTimeElement.innerHTML = telAvivTime.format(
      "h:mm:ss [<small>]A[</small>]"
    );
  }
}

function updateCity(event) {
  let cityTimeZone = event.target.value;
  if (cityTimeZone === "current") {
    cityTimeZone = moment.tz.guess();
  }
  let cityName = cityTimeZone.replace("_", " ").split("/")[1];
  let cityTime = moment().tz(cityTimeZone);
  let citiesElement = document.querySelector("#cities");
  citiesElement.innerHTML = `
  <div class="city">
    <div>
      <h2>${cityName}</h2>
      <div class="date">${cityTime.format("MMMM	Do YYYY")}</div>
    </div>
    <div class="time">${cityTime.format("h:mm:ss")} <small>${cityTime.format(
    "A"
  )}</small></div>
  </div>
  <a href="/">All cities</a>
  `;
}

updateTime();
setInterval(updateTime, 1000);

let citiesSelectElement = document.querySelector("#city");
citiesSelectElement.addEventListener("change", updateCity);