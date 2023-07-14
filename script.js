//Get the button
let mybutton = document.getElementById("btn-back-to-top");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (
    document.body.scrollTop > 20 ||
    document.documentElement.scrollTop > 20
  ) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}
// When the user clicks on the button, scroll to the top of the document
mybutton.addEventListener("click", backToTop);

function backToTop() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}






const searchInput = document.getElementById("searchInput");
        searchInput.addEventListener("input", () => {
            const query = searchInput.value.toLowerCase();
            const questions = document.getElementsByClassName("question");

            Array.from(questions).forEach(question => {
                const questionHeader = question.getElementsByTagName("p")[0];
                const questionText = questionHeader.textContent.toLowerCase();

                if (questionText.includes(query)) {
                    question.style.display = "block";
                } else {
                    question.style.display = "none";
                }
            });
        });