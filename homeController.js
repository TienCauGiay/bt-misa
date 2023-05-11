function openOverlay() {
    document.getElementById('overlay').style.display = 'block';
    document.getElementById('menu').style.pointerEvents = 'none';
    document.getElementById('noidung').style.pointerEvents = 'none';
    document.getElementById('container-fluid').style.background = 'rgba(0, 0, 0, 0.5)';
}

function closeOverlay() {
    document.getElementById('overlay').style.display = 'none';
    document.getElementById('menu').style.pointerEvents = 'auto';
    document.getElementById('noidung').style.pointerEvents = 'auto';
    document.getElementById('container-fluid').style.background = 'white';
}