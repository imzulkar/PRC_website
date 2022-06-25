const navLink = document.getElementById('service-nevigation');
const serviceDetails = document.querySelectorAll('.service-details');
navLink.addEventListener('click', function (e) {
    let dataId = e.target;
    serviceDetails.forEach(function (item) {
        item.classList.remove('show');
    });
    const allNavItem = document.querySelectorAll('.nav-link');
    allNavItem.forEach(function (listItem) {
        listItem.classList.remove('active');
    })
    dataId.classList.add('active');

    serviceDetails[parseInt(dataId.id.split('-')[1]) - 1].classList.add('show');
});


