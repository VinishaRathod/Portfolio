/*---------toggle icon navbar---------- */
let newIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

newIcon.onclick = () => {
    newIcon.classList.toggle('fa-xmark');
    navbar.classList.toggle('active');
}

/* On Scrolling nav Links wil be active automatically  */
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

    
    let header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 100);

    
    newIcon.classList.remove('fa-xmark');
    navbar.classList.remove('active');
};

/* */
ScrollReveal({
     distance: '80px',
     duration: 2000,
     delay: 200,
    });

    ScrollReveal().reveal('.home-content, heading', {origin: 'top'});
    ScrollReveal().reveal('.home-img, .services-container, .portfolio-box, .contact form', {origin: 'bottom'});
    ScrollReveal().reveal('.home-contact h1, .about-img', {origin: 'left'});
    ScrollReveal().reveal('.home-contact p, .about-content', {origin: 'right'});

    /* */
    const typed = new Typed('.multiple-text', {
        strings: ['MERN Stack Developer','React Developer', 'Frontend Developer','Web Developer','Full Stack developer' , 'Java Developer'],
        typeSpeed: 70,
        backSpeed: 70,
        backDelay: 1000,
        loop: true,
    });
    /* */
    // const form = document.querySelector('form');
    // const fullName = document.getElementById('name');
    // const email = document.getElementById('email');
    // const phone = document.getElementById('nom');
    // const subject = document.getElementById('sub');
    // const msg = document.getElementById('msg');

    // function sendEmail() {
    //     const bodyMessage = 'Full Name: ${fullName.value}<br> Email: ${email.value}<br> Phone Number: ${phone.value}<br> Message: ${mess.value}';

    //     Email.send({
    //         Host : "smtp.elasticemail.com",
    //         Username : "vinisha.rathod.000@gmail.com",
    //         Password : "8FBBEE7D95025CBFF16389EEA7BFD5964757",
    //         To : 'vinisha.rathod.000@gmail.com',
    //         From : "you@isp.com",
    //         Subject : subject.value,
    //         Body : bodyMessage
    //     }).then(
    //       message => alert(message)
    //     );
    // }

    // form.addEventListener("submit", (e) => {
    //     e.preventDefault();
    //     sendEmail();
    // });

    //     document.getElementById("contact-form").addEventListener("submit", function(event) {
    //     event.preventDefault(); // Prevent default form submission
    
    //     // Get form input values
    //     const fullName = document.getElementById('name').value;
    //     const emailAddress = document.getElementById('email').value;
    //     const phoneNumber = document.getElementById('nom').value;
    //     const emailSubject = document.getElementById('sub').value;
    //     const message = document.getElementById('msg').value;
    
    //     // Construct email body message
    //     const bodyMessage = `Full Name: ${fullName}<br>Email: ${emailAddress}<br>Phone Number: ${phoneNumber}<br>Message: ${message}`;
    
    //     // Send email using Email.js
    //     Email.send({
    //         Host: "smtp.elasticemail.com",
    //         Username: "vinisha.rathod.000@gmail.com", // Your Elastic Email username
    //         Password: "8FBBEE7D95025CBFF16389EEA7BFD5964757", // Your Elastic Email password
    //         To: "vinisha.rathod.000@gmail.com", // Recipient email address
    //         From: emailAddress,
    //         Subject: emailSubject,
    //         Body: bodyMessage,
    //     }).then(function(message) {
    //         alert("Email sent successfully!");
    //     }).catch(function(error) {
    //         console.error(error.message);
    //         alert("An error occurred while sending the email. Please try again later.");
    //     });
    // });
    

    function handleFormSubmit(event) {
        // event.preventDefault(); // Prevent default form submission

        // Create a FormData object from the form
        const form = document.getElementById('contact-form');
        const formData = new FormData(form);

        // Log each field's data
        formData.forEach((value, key) => {
            console.log(key + ': ' + value);
        });

        // Reset the form
        form.reset();
        
        alert('Form data has been logged and form has been reset.');
    }


    
      
    