const navLink = document.getElementById('service-nevigation');
const serviceDetails = document.querySelectorAll('.service-details');
navLink.addEventListener('click', function (e) {
    let dataId = e.target;
    serviceDetails.forEach(function (item) {
        item.classList.remove('show');
    });
    dataId.classList.add('active');

    switch (parseInt(dataId.id.split('-')[1])) {

        case 1:
            // code block
            serviceDetails[0].classList.add('show');
            break;
        case 2:
            // code block
            serviceDetails[1].classList.add('show');
            break;
        case 3:
            // code block
            serviceDetails[2].classList.add('show');
            break;
        case 4:
            // code block
            serviceDetails[3].classList.add('show');
            break;
        case 5:
            // code block
            serviceDetails[4].classList.add('show');
            break;
        case 6:
            // code block
            serviceDetails[5].classList.add('show');
            break;
        case 7:
            // code block
            serviceDetails[6].classList.add('show');
            break;
        default:
        // code block
    }

})