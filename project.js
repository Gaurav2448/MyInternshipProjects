const initialPrices = {
    basic: 1000,
    standard: 2500,
    premium: 4800,
  };
  function setInitialPrices() {
    var plans = document.querySelectorAll(".plan");

    plans.forEach(function (plan) {
      var priceElement = plan.querySelector(".price");
      var planType = plan.querySelector(".title").textContent.toLowerCase();
      var originalPrice = initialPrices[planType];

      var currencySymbol = getCurrencySymbol("INR");
      priceElement.innerHTML = `<sup>${currencySymbol}</sup><span>${originalPrice.toFixed(
        2
      )}</span><sub>/month</sub>`;
    });
  }

  setInitialPrices();

  function updateCurrency() {
    var selectedCurrency =
      document.getElementById("currencySelector").value;

    var plans = document.querySelectorAll(".plan");
    setInitialPrices();

    plans.forEach(function (plan) {
      var priceElement = plan.querySelector(".price");

      var originalCurrency = plan.querySelector("span").textContent;
      console.log(originalCurrency);

      var new_p;
      if (selectedCurrency == "INR") {
        setInitialPrices();
        return;
      } else if (selectedCurrency == "USD") {
        new_p = originalCurrency * 0.012;
      } else {
        
        new_p = originalCurrency * 0.011;
      }
      new_p = Number(new_p).toFixed(2);

      var currencySymbol = getCurrencySymbol(selectedCurrency);
      priceElement.innerHTML = `<sup>${currencySymbol}</sup><span>${new_p}</span><sub>/month</sub>`;
    });
  }

  function getCurrencySymbol(currencyCode) {
    var currencySymbols = {
      INR: "₹",
      USD: "$",
      EUR: "€",
    };

    return currencySymbols[currencyCode];
  }