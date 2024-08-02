// Skrypt działa dla strony internetowej sklepu MediaExpert
(() => {
    // Funkcja do znalezienia nazwy produktu
    const findName = () => {
        let nameElement = document.querySelector("h1.name.is-title");
        return nameElement ? nameElement.textContent.trim() : null;
    }
    
    // Funkcja zbierająca wszystkie dostępne zdjęcia produktu, niestety nie od razu wszystkie, bo
    // nie wszystkie zdjęcia są od razu załadowane, a liczne próby wymuszenia ich załadowania
    // skończyły się niepowodzeniem
    const findImages = () => {
        let imageElements = Array.from(document.querySelectorAll("div.spark-image.magnifier-img"));
        imageElements.map(el => el.getAttribute("src"));
        let uniqueImages = [...new Set(imageElements.map(el => el.querySelector("img.is-loaded").src))];

        return uniqueImages.length > 0 ? JSON.stringify(uniqueImages) : null;    
    }
    
    // Funkcja zbierająca cenę produktu
    const findPrice = () => {
        let dollarsElement = document.querySelector("span.whole");
        let centsElement = document.querySelector("span.cents");
        return dollarsElement && centsElement ? dollarsElement.textContent.trim().concat('.', centsElement.textContent.trim()) : null;
    }

    // Funkcja zbierająca walutę w której jest cena produktu
    const findCurrency = () => {
        let currencyElement = document.querySelector("span.currency");
        return currencyElement ? currencyElement.textContent.trim() : null;
    }

    // Funkcja zbierająca SKU produktu
    const findSKU = () => {
        let skuElement = document.querySelector("span.id.is-regular");
        return skuElement ? skuElement.textContent.replace("Kod: ", "").trim() : null;
    }

    // Tutaj tworzę obiekt produktu i zapisuję go w localStorage
    var product = {
        url: window.location.href,
        name: findName(),
        images: findImages(),
        price: findPrice(),
        currency: findCurrency(),
        sku: findSKU()
    };

    var products = JSON.parse(localStorage.getItem('products')) || [];

    products.push(product);

    localStorage.setItem('products', JSON.stringify(products));

    console.log('Product saved:\n', product);

})();

