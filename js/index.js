function sendMail() {
    var params = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        message: document.getElementById("message").value,
    };


    const serviceId = "service_fag3pyo";
    const templetId = "template_a941def";

    emailjs.init("rSw1XLLEn4p9NnQ3p");
    emailjs
        .send(serviceId, templetId, params)
        .then(res => {
            document.getElementById("name").value = "";
            document.getElementById("email").value = "";
            document.getElementById("message").value = "";
            console.log(res);
            alert("Your message sent successfully!");
        })
        .catch((err) => console.log(err));
}