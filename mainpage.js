let nav = document.getElementById("nav");
let navsection = document.getElementById("navsection");
let s1 = document.getElementById("Section1");
let s2 = document.getElementById("Section2");
let s3 = document.getElementById("Section3");
let s4 = document.getElementById("Section4");
let s5 = document.getElementById("Section5");
let com = document.getElementById("Comments");
let form = document.getElementById("form");
let s1d = document.getElementById("Section1d");
let s2d = document.getElementById("Section2d");
let s3d = document.getElementById("Section3d");
let s4d = document.getElementById("Section4d");
let s5d = document.getElementById("Section5d");
let namefrnm = document.getElementById("name");
let emailfrm = document.getElementById("email");
let txta = document.getElementById("txta");
let btn = document.getElementById("submit");
let comts = document.getElementById("commentsec");

// Scroll & highlight functions
s1.addEventListener('click', () => {
    s1d.scrollIntoView({ behavior: "smooth" });
    highlight(s1);
});
s2.addEventListener('click', () => {
    s2d.scrollIntoView({ behavior: "smooth" });
    highlight(s2);
});
s3.addEventListener('click', () => {
    s3d.scrollIntoView({ behavior: "smooth" });
    highlight(s3);
});
s4.addEventListener('click', () => {
    s4d.scrollIntoView({ behavior: "smooth" });
    highlight(s4);
});
s5.addEventListener('click', () => {
    s5d.scrollIntoView({ behavior: "smooth" });
    highlight(s5);
});
com.addEventListener('click', () => {
    form.scrollIntoView({ behavior: "smooth" });
    highlight(com);
});

// Highlight only one at a time
function highlight(selected) {
    [s1, s2, s3, s4, s5, com].forEach(el => el.style.backgroundColor = "");
    selected.style.backgroundColor = "lightblue";
}

// Submit form and create comment
btn.addEventListener('click', (e) => {
    e.preventDefault(); // This goes on the event, not the form

    let name = namefrnm.value.trim();
    let email = emailfrm.value.trim();
    let msg = txta.value.trim();

    if (name === "" || email === "" || msg === "") {
        alert("Please fill out all fields.");
        return;
    }

    let newcomment = document.createElement("textarea");
    newcomment.setAttribute("readonly", true);
    newcomment.style.backgroundColor="lightgrey";
    newcomment.style.border="10px solid blue";
    newcomment.setAttribute("cols","100")
    newcomment.setAttribute("rows","10")
    newcomment.style.width = "100%";
    newcomment.style.fontFamily="Copperplate";
    newcomment.style.fontSize="20px";
    newcomment.style.margin = "10px 0";
    newcomment.style.padding = "10px";
    newcomment.style.borderRadius = "5px";
    newcomment.style.border = "1px solid #ccc";
    newcomment.style.resize = "none";
    newcomment.value = `Name: ${name}\nEmail: ${email}\nComment: ${msg}`;

    comts.appendChild(newcomment);

    namefrnm.value = "";
    emailfrm.value = "";
    txta.value = "";
});


