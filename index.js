left = document.getElementById("main-left");
about = document.getElementById("about-panel");
vision = document.getElementById("vision-panel");
skills = document.getElementById("skills-panel");
cert = document.getElementById("cert-panel");
project = document.getElementById("proj-panel");
contact = document.getElementById("contact-panel");

function show_about() { 
    left.style.display = "none";
    vision.style.display = "none";
    skills.style.display = "none";
    cert.style.display = "none";
    project.style.display = "none";
    contact.style.display = "none";
    about.style.display = "flex";
}

function show_vision() { 
    left.style.display = "none";
    about.style.display = "none"; 
    skills.style.display = "none";
    cert.style.display = "none";
    project.style.display = "none";
    contact.style.display = "none";
    vision.style.display = "flex";
}

function show_skills() { 
    left.style.display = "none";
    about.style.display = "none"; 
    vision.style.display = "none";
    cert.style.display = "none";
    project.style.display = "none";
    contact.style.display = "none";
    skills.style.display = "flex";
}

function show_proj() { 
    left.style.display = "none";
    about.style.display = "none"; 
    vision.style.display = "none";
    cert.style.display = "none";
    project.style.display = "none";
    skills.style.display = "none";
    contact.style.display = "none";
    project.style.display = "flex";
}

function show_cert() { 
    left.style.display = "none";
    about.style.display = "none"; 
    vision.style.display = "none";
    skills.style.display = "none";
    project.style.display = "none";
    contact.style.display = "none";
    cert.style.display = "flex";
}

function show_contact() { 
    left.style.display = "none";
    about.style.display = "none"; 
    vision.style.display = "none";
    skills.style.display = "none";
    project.style.display = "none";
    cert.style.display = "none";
    contact.style.display = "flex";
}

function show_main() { 
    about.style.display = "none"; 
    vision.style.display = "none";
    skills.style.display = "none";
    project.style.display = "none";
    cert.style.display = "none";
    contact.style.display = "none";
    left.style.display = "flex";
}