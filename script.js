function onHover() {
    const elementsList = document.querySelectorAll("#header, #header2, #header3");
    const elementsArray = [...elementsList];

    elementsArray.forEach(element => {
        element.textContent = "Just Sign Up!";
    });
}

function onMouseOut() {
    document.getElementById('header').textContent = "Sign Up Now!";
    document.getElementById('header2').textContent = "Yearly Subscription.";
    document.getElementById('header3').textContent = "Why Join?"


}