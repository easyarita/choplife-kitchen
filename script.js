const orderButtons = document.querySelectorAll(".food-card button");

orderButtons.forEach(function(button) {
    button.addEventListener("click", function() {
        alert("Thank you for choosing ChopLife Kitchen! Ordering coming soon.");
    });
});const menuToggle = document.querySelector(".menu-toggle");
const navigation = document.querySelector("#navigation");

menuToggle.addEventListener("click", function() {

    navigation.classList.toggle("active");

    const isExpanded = navigation.classList.contains("active");

    menuToggle.setAttribute("aria-expanded", isExpanded);
});