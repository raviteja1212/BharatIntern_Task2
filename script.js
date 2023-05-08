function convert() {
    let celsius = document.getElementById("celsius").value;
    let fahrenheit = (celsius * 1.8) + 32;
    let kelvin = parseFloat(celsius) + 273.15;
    let rankine = parseFloat(celsius) * 1.8 + 491.67;
    document.getElementById("fahrenheit").value = fahrenheit.toFixed(2);
    document.getElementById("kelvin").value = kelvin.toFixed(2);
    document.getElementById("rankine").value = rankine.toFixed(2);
    document.getElementById("results").classList.remove("result");
  }