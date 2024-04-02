document.getElementById('night-sky').addEventListener('mousemove', function(e) {
    var fallingStar = document.createElement('div');
    fallingStar.style.position = 'absolute';
    fallingStar.style.width = '2px';
    fallingStar.style.height = '150px';
    fallingStar.style.backgroundColor = 'white';
    fallingStar.style.left = `${e.pageX}px`;
    fallingStar.style.top = `${e.pageY}px`;
    fallingStar.style.transform = 'rotate(45deg)';
    fallingStar.style.opacity = '0';
    fallingStar.style.transition = 'opacity 0.5s ease-in-out';
    this.appendChild(fallingStar);

    setTimeout(function() {
        fallingStar.style.opacity = '1';
        fallingStar.style.animation = 'fallingStar 1s forwards';
    }, 10);

    setTimeout(function() {
        fallingStar.remove();
    }, 1010);
});

// Nový kód pro odstranění mraků po kliknutí
var clouds = document.querySelectorAll('.cloud');
clouds.forEach(function(cloud) {
    cloud.addEventListener('click', function() {
        cloud.style.opacity = '0';
        setTimeout(function() {
            cloud.remove();
        }, 600); // Dává čas na dokončení jakékoli přechodové animace
    });
});
function createCloud() {
    var cloud = document.createElement('div');
    cloud.className = 'cloud';
    var x = Math.random() * window.innerWidth;
    var y = Math.random() * window.innerHeight;
    cloud.style.left = `${x}px`;
    cloud.style.top = `${y}px`;

    cloud.style.width = '200px';
    cloud.style.height = '100px';

    // Nastavení počáteční průhlednosti mraku na 0
    cloud.style.opacity = '0';

    // Přidání interakce pro mrak
    cloud.addEventListener('click', function() {
        this.style.opacity = '0';
        setTimeout(() => {
            this.remove();
            createCloud(); // Vytvoří nový mrak po odstranění současného
        }, 600);
    });

    document.getElementById('night-sky').appendChild(cloud);

    // Okamžitě po přidání do DOM změníme průhlednost na 1 pro spuštění efektu objevování
    setTimeout(() => {
        cloud.style.opacity = '1';
    }, 10);
}

// Inicializace prvních mraků
createCloud();
createCloud();
createCloud();