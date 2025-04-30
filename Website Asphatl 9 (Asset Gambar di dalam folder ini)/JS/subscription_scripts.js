document.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');

    hamburger.addEventListener('click', () => {
        if (navLinks.classList.contains('active')) {
            navLinks.classList.remove('active');
            navLinks.classList.add('inactive');
            setTimeout(() => {
                navLinks.classList.remove('inactive');
                navLinks.style.display = 'none';
            }, 500);
        } else {
            navLinks.style.display = 'flex';
            setTimeout(() => {
                navLinks.classList.add('active');
            }, 10); 
        }
    });
    window.addEventListener('resize', () => {
        if (window.innerWidth > 768) {
            navLinks.classList.remove('active', 'inactive');
            navLinks.style.display = '';
        } else {
            navLinks.style.display = 'none';
        }
    });
});

function validatedata() {
    let username = document.getElementById('username');
    let email = document.getElementById('email');
    let acc = document.getElementById('agreement');
    let errorMessage = document.getElementById('errorMessage');
    let male = document.getElementById('male');
    let female = document.getElementById('female');
    let umur = document.getElementById('birthday').value;
    let viewer = document.getElementById('viewer');
    let content_creator = document.getElementById('content-creator');

    errorMessage.style.color = "Red";

    if (username.value === "" || email.value === "" || umur === "") {
        errorMessage.textContent = "All fields must be filled!";
    }
    else if (!viewer.checked && !content_creator.checked) {
        errorMessage.textContent = "Type of subscription has to be checked!";
    }
    else if (!alphaonly(username.value)) {
        errorMessage.textContent = "Name must be alphabet only!";
    }
    else if (!email.value.endsWith('@gmail.com')) {
        errorMessage.textContent = "Your email must be @gmail.com!";
    }
    else if (!acc.checked) {
        errorMessage.textContent = "Must agree to terms and conditions!";
    }
    else if (!male.checked && !female.checked) {
        errorMessage.textContent = "Gender must be checked";
    }
    else {
        let dob = new Date(umur);
        let today = new Date();
        let age = today.getFullYear() - dob.getFullYear();
        let monthDiff = today.getMonth() - dob.getMonth();
        if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < dob.getDate())) {
            age--;
        }
        if (age < 18) {
            errorMessage.textContent = "You have to be more than 18 years old!";
        } else {
            errorMessage.style.color = "Green";
            errorMessage.textContent = "Form submitted!";
        }
    }
}

function alphaonly(element) {
    for(let i = 0; i < element.length; i++) {
        if((element[i] >= 'A' && element[i] <= 'Z') || (element[i] >= 'a' && element[i] <= 'z') || (element[i] == ' ')) {
            continue;
        } else {
            return false;
        }
    }
    return true;
}