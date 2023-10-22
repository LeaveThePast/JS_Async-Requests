const loader = document.getElementById("loader");
const itemsElement = document.getElementById("items");

const xhr = new XMLHttpRequest();
xhr.open(
    "GET",
    "https://students.netoservices.ru/nestjs-backend/slow-get-courses",
    true
);
xhr.onreadystatechange = function () {
    if (xhr.readyState === 4 && xhr.status === 200) {
        const response = JSON.parse(xhr.responseText);

        const valutes = response.response.Valute;

        itemsElement.innerHTML = "";

        for (const valute in valutes) {
            if (valutes.hasOwnProperty(valute)) {
                const valuteData = valutes[valute];

                const itemElement = document.createElement("div");
                itemElement.className = "item";

                const valuteCodeElement = document.createElement("div");
                valuteCodeElement.className = "item__code";
                valuteCodeElement.textContent = valuteData.CharCode;

                const valuteValueElement = document.createElement("div");
                valuteValueElement.className = "item__value";
                valuteValueElement.textContent = valuteData.Value;

                const valuteCurrencyElement = document.createElement("div");
                valuteCurrencyElement.className = "item__currency";
                valuteCurrencyElement.textContent = "руб.";

                itemsElement.appendChild(itemElement);
                itemElement.appendChild(valuteCodeElement);
                itemElement.appendChild(valuteValueElement);
                itemElement.appendChild(valuteCurrencyElement);
            }
        }

        loader.classList.remove("loader_active");
    }
};

xhr.send();
