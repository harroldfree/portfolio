// // Initialise la carte centrée sur Yaoundé avec un niveau de zoom de 13
// const map = L.map('map').setView([3.8667, 11.5167], zoom = 13);

// // Ajoute la couche de tuiles OpenStreetMap avec attribution
// L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
//     attribution: '© OpenStreetMap contributors'
// }).addTo(map);



// Création de la carte avec Leaflet.js
// const map = L.map('map').setView([3.8480, 11.5021], 7); // Position initiale sur Yaoundé

// Fond de carte (carte du monde)
// L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);

// // Marqueurs
// const yaoundeMarker = L.marker([3.8480, 11.5021]).addTo(map);
// const yaounde1Marker = L.marker([3.8485, 11.5060]).addTo(map);
// const stage1Marker = L.marker([3.8581, 11.5166]).addTo(map); // Remplacer par les vrais stages
// const stage2Marker = L.marker([3.8600, 11.5100]).addTo(map);
// const stage3Marker = L.marker([3.8700, 11.5150]).addTo(map);

// // Fonction pour afficher les informations au clic sur un marqueur
// yaoundeMarker.on('click', function() {
//     document.getElementById('info-box').innerHTML = `
//         <h3>Yaoundé, Cameroun</h3>
//         <p>Date de naissance : 01 Janvier 1995</p>
//     `;
//     document.getElementById('info-box').style.display = 'block';
//     document.body.classList.add('custom-cursor');
// });

// yaounde1Marker.on('click', function() {
//     document.getElementById('info-box').innerHTML = `
//         <h3>Université de Yaoundé I</h3>
//         <p>Parcours : Licence obtenue de Octobre 2019 à Août 2023</p>
//     `;
//     document.getElementById('info-box').style.display = 'block';
//     document.body.classList.add('custom-cursor');
// });

// // Gérer les stages (ajoute tes vrais emplacements)
// stage1Marker.on('click', function() {
//     document.getElementById('info-box').innerHTML = `
//         <h3>Stage 1</h3>
//         <p>Description du stage ici.</p>
//     `;
//     document.getElementById('info-box').style.display = 'block';
//     document.body.classList.add('custom-cursor');
// });

// stage2Marker.on('click', function() {
//     document.getElementById('info-box').innerHTML = `
//         <h3>Stage 2</h3>
//         <p>Description du stage ici.</p>
//     `;
//     document.getElementById('info-box').style.display = 'block';
//     document.body.classList.add('custom-cursor');
// });

// stage3Marker.on('click', function() {
//     document.getElementById('info-box').innerHTML = `
//         <h3>Stage 3</h3>
//         <p>Description du stage ici.</p>
//     `;
//     document.getElementById('info-box').style.display = 'block';
//     document.body.classList.add('custom-cursor');
// });

// // Déplacer la carte avec un curseur personnalisé
// function setCarCursor() {
//     document.body.classList.add('custom-cursor');
//     setTimeout(() => {
//         map.setView([3.8485, 11.5060], 10); // Déplacement vers l'Université
//     }, 1000);
// }

// // Transition vers Paris (Octobre 2024)
// function setFlightCursor() {
//     document.body.classList.remove('custom-cursor');
//     document.body.classList.add('custom-cursor-aviation');
//     setTimeout(() => {
//         map.setView([48.8566, 2.3522], 10); // Déplacement vers Paris
//     }, 1000);
// }

// // Transition vers Montreuil (27 Bis rue de Progrès)
// function setTrainCursor() {
//     document.body.classList.remove('custom-cursor-aviation');
//     document.body.classList.add('custom-cursor-train');
//     setTimeout(() => {
//         map.setView([48.8680, 2.4430], 12); // Déplacement vers Montreuil
//     }, 1000);
// }

// // Fonction pour gérer les déplacements
// yaoundeMarker.on('click', setCarCursor);
// yaounde1Marker.on('click', setFlightCursor);

// Lorsque l'on arrive à Montreuil
map.on('moveend', function() {
    if (map.getCenter().lat === 48.8680 && map.getCenter().lng === 2.4430) {
        alert("Arrivée à Montreuil !");
    }
});
