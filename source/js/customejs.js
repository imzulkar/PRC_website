const navLink = document.getElementById('service-nevigation');
const serviceDetails = document.querySelectorAll('.service-details');
navLink.addEventListener('click', function (e) {
    let dataId = e.target;
    serviceDetails.forEach(function (item) {
        item.classList.remove('show');
    });
    dataId.classList.add('active');

    serviceDetails[parseInt(dataId.id.split('-')[1])].classList.add('show');
});


