let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        };
    });
/*=============== sticky navbar ===============*/

    let header = document.querySelector('header');

    header.classList.toggle('sticky', window.scrollY > 100);
};

document.getElementById('download-link').addEventListener('click', function(event) {
    event.preventDefault(); 

    var userConfirmed = confirm("Do you want to download the AWS Big Data Project.pptx file?");
    
    if (userConfirmed) {
        window.location.href = "AWS Big Data Project.pptx"; 
    } else {
        console.log("User canceled the download.");
    }
});


