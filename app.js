// <!-- resume section btn  -->
const navLinks = document.querySelectorAll('header nav a');
const menuIcon = document.querySelector('#menu_icon');
const navBar = document.querySelector('header nav');


menuIcon.addEventListener('click', () => {
    menuIcon.classList.toggle('bx-x');
    navBar.classList.toggle('active');
})



const resumeBts = document.querySelectorAll('.resume_btn');

resumeBts.forEach((btn, idx) => {
    btn.addEventListener('click', () => {
        const resumeDetail = document.querySelectorAll('.resume_detail');
        resumeBts.forEach(btn => {
            btn.classList.remove('active');
        });
        btn.classList.add('active');

        resumeDetail.forEach(detail => {
            detail.classList.remove('active');
        });
       resumeDetail[idx].classList.add('active');
        })
    })

// <!-- projets section arrow -->
const arrowRight = document.querySelector('.projets_box .navigation .arrow_right');
const arrowLeft = document.querySelector('.projets_box .navigation .arrow_left');

let index = 0;
const activeProjets = () => {
    const imgSlide = document.querySelector('.projets_carousel  .img_slide');
    const projetsDetails = document.querySelectorAll('.projets_detail');
    imgSlide.style.transform = `translateX(calc(${index * -100}% - ${index * 2}rem))`;
    projetsDetails.forEach(detail => {
        detail.classList.remove('active');
        projetsDetails[index].classList.add('active');
    });
} 

arrowRight?.addEventListener('click', () => {
    if (index < 4) {
        index++;
        arrowLeft.classList.remove('disabled');
        
    }else {
        index = 5;
        arrowRight.classList.add('disabled');
    }
    activeProjets();
});



arrowLeft?.addEventListener('click', () => {
    if (index > 1) {
        index--;
        arrowRight.classList.remove('disabled');
    }else {
        index = 0;
        arrowLeft.classList.add('disabled');
    }
    activeProjets();
});




function addSimpleMarker(map, lat, lng, title) {
    const marker = L.marker([lat, lng], {
        bounceOnAdd: true,
        bounceOnAddOptions: { duration: 500, height: 50 },
    }) .bindTooltip("<span class='tooltip-text'> " +title+" </span>", {
            permanent: true, 
            direction: 'margin-top',
        }).addTo(map);
    return marker;
}

function addMarkerWithLink(map, lat, lng, lien,title) {
    const marker = addSimpleMarker(map, lat, lng, title);
    marker.on('click', function() {
        window.location = lien;
    });
    return marker;
}

function addMarkerWithPopup(map, location, origin, popupContent) {
    const marker = addSimpleMarker(map, location.lat, location.lng);
    marker.bindPopup(popupContent, {
        maxWidth: 350,
        className: 'custom-popup'
    });
    marker.getPopup().on('remove', function() {
        map.setView([origin.lat, origin.lng], 6);
});



}





originCameroun = { lat: 7.3697, lng: 12.3547 };
const mapCameroun = L.map('map-cameroun', {zoomControl: false, minZoom: 6, maxZoom: 6}).setView([originCameroun.lat, originCameroun.lng], 6);
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '© OpenStreetMap contributors'
}).addTo(mapCameroun);
// addMarkerWithLink(mapCameroun,  3.8667, 11.5167,);
addMarkerWithLink(mapCameroun,  3.8575, 11.5017, "services.html","Services");
addMarkerWithLink(mapCameroun, 10.1111, 14.3333, "index.html","Accueil");
addMarkerWithLink(mapCameroun, 5.9631, 10.1591, "resume.html","Resumé");  






// Carte de la France
originFrance = { lat: 46.603354, lng: 1.888334 };
const mapFrance = L.map('map-france', {zoomControl: false, minZoom: 6, maxZoom: 6}).setView([originFrance.lat, originFrance.lng], 6);
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '© OpenStreetMap contributors'
}).addTo(mapFrance);
addMarkerWithLink(mapFrance,  48.8566, 2.3522, 'projets.html', 'Projets');
addMarkerWithLink(mapFrance, 47.2184, -1.5536, 'contact.html', 'Contact');



// Couche WMS pour le réseau hydrographique français
L.tileLayer.wms('https://wxs.ign.fr/hydro/geoportail/r/wms', {
    layers: 'COURS_D_EAU',
    format: 'image/png',
    transparent: true
}).addTo(mapFrance);





