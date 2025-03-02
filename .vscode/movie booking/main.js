document.addEventListener("DOMContentLoaded", () => {
    const movieList = document.getElementById("movie-list");
    const movieInput = document.getElementById("movie");
    const bookingForm = document.getElementById("booking-form");
    const confirmationSection = document.getElementById("confirmation");
    const confirmationMessage = document.getElementById("confirmation-message");

    // Handle movie selection
    movieList.addEventListener("click", (event) => {
        if (event.target.tagName === "LI") {
            movieInput.value = event.target.dataset.movie;
        }
    });

    // Handle form submission
    bookingForm.addEventListener("submit", (event) => {
        event.preventDefault();

        const name = document.getElementById("name").value;
        const seats = document.getElementById("seats").value;
        const movie = movieInput.value;

        if (movie === "") {
            alert("Please select a movie before booking.");
            return;
        }

        confirmationMessage.textContent = `Thank you, ${name}! You have successfully booked ${seats} seat(s) for "${movie}".`;
        confirmationSection.classList.remove("hidden");
    });
});
