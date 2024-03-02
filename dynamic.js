//  Content for abt page within notice
const dynamicAbt = document.getElementById("abt");
if (dynamicAbt) {
    dynamicAbt.innerHTML = "At makaut.org, our overarching mission is to revolutionize the academic journey of MAKAUT (Maulana Abul Kalam Azad University of Technology) students and empower them to achieve unparalleled success. Our vision is to become the ultimate, all-encompassing resource hub, setting new standards in facilitating education and fostering a thriving learning community."
} 


// Content for latest news card
const container = document.getElementById("dynamicCardContainer");
if(container){
function createCard(title, date, description, imageUrl, linkUrl) {
  const cardContainer = document.createElement("div");
  cardContainer.innerHTML = `
<div class="card flex-md-row mb-4 box-shadow h-md-250">
  <div class="card-body d-flex flex-column align-items-start">
    <h4 class="mb-0">
      <a class="text-primary-emphasis" href="${linkUrl}">${title}</a>
    </h4>
    <div class="mb-1 text-muted">${date}</div>
    <p class="card-text mb-auto">${description}</p>
    <a href="${linkUrl}">Continue reading</a>
  </div>
  <img class="card-img-right flex-auto d-none d-md-block" src="${imageUrl}" width="200" alt="Card image cap">
</div>
`;

  // Append the dynamically generated card to the container on the page
  container.appendChild(cardContainer);
}
createCard(
  "MAKAUT 2024 Holiday List",
  "03-03-2024",
  "Looking beyond the basic MAKAUT holiday list 2024, this article unlocks the full potential of the academic calendar, empowering you to plan your semester, save money, and thrive at university.",
  "/Img/Academic.png",
  "/Notice/Notice/MAKAUT-Holiday-2024.html"
);
createCard(
  "MAKAUT 2024 Academic Calender",
  "02-03-2024",
  "The long-awaited moment has arrived as MAKAUT has recently published its comprehensive Academic Calendar for the academic year 2024.",
  "/Img/Academic.png",
  "/Notice/Notice/MAKAUT-Academic-Calender-2024.html"
);
createCard(
  "All About Backlogs at MAKAUT University",
  "31-01-2024",
  "Let's start with the basics. A backlog occurs when you score below 40 out of 100 in a subject. It's like a red flag on your academic record, symbolized by the infamous 'F' grade, along with a default 2-point allocation. Understanding the gravity of this situation is the first step towards overcoming it.",
  "/Img/backlog.png",
  "/Notice/Notice/Makaut-backlog.html"
);
createCard(
  "How to Pass & Score Well in MAKAUT exam?",
  "04-01-2024",
  "My secret weapon for consistently scoring above an 8 CGPA with less than 60 hours of study in an entire semester.",
  "/Img/IMG32.png",
  "/Notice/Notice/studyapproach.html"
);
createCard(
  "MAKAUT University's Approach to CA Marks Evaluation",
  "September 18",
  "Innovative Assessment Methods MAKAUT University, situated in the picturesque state of West Bengal, India, has earned a reputation for its innovative and student-centric approach to education.",
  "/Img/ca.png",
  "/Notice/Notice/ca_marks.html"
);
createCard(
  "MAKAUT 2023 HOLIDAY LIST",
  "August 15",
  "This is the year 2023 unfolds, MAKAUT University gears up to welcome a plethora of holidays that promises both celebration and learning.s a wider card with supporting text below as a natural lead-in to additional content.",
  "/Img/holiday.jpg",
  "/Notice/Notice/holiday.html"
);
createCard(
  "Academic Calender",
  "August 15",
  "The long-awaited moment has arrived as MAKAUT has recently published its comprehensive Academic Calendar for the academic year 2023-24. ",
  "/Img/calender.jpg",
  "/Notice/Notice/calender.html"
);
}


(function() {
  // Function to dynamically change content
  function changeNewsContent() {
      // Sample content to be sent dynamically
      const dynamicContent = {
          title: "MAKAUT AFFILIATED COLLEGES",
          leadText: "Ranking of best colleges under makaut lets see",
          linkUrl: "https://makautwb.ac.in/big_files/College%20list-2022-23-as%20on%2031-01-2023.pdf",
          linkText: "Read More",
      };

      // Get the <div> element by its ID
      const newsContainer = document.getElementById("news-container");

      // Update the content of the elements inside the <div>
      if (newsContainer) {
          newsContainer.querySelector("h1").innerText = dynamicContent.title;
          newsContainer.querySelector(".lead").innerText = dynamicContent.leadText;
          const linkElement = newsContainer.querySelector(".lead a");
          linkElement.href = dynamicContent.linkUrl;
          linkElement.innerText = dynamicContent.linkText;
      }
  }

  // Call the function to change the content
  changeNewsContent();
})();

// Dynamic footer
// Check if the footer element with the specified ID exists
const existingFooter = document.getElementById('footer');

if (existingFooter) {
  // Create the HTML content for the footer
  const footerHTML = `
    <footer class="bg-dark text-center text-white mt-auto" id="ip">
      <div class="container p-4 pb-0">
        <section class="mb-4">
          <a class="btn btn-outline-light btn-floating m-1" href="mailto:makautorg@gmail.com" role="button"><i class="fab fa-google"></i></a>
          <a class="btn btn-outline-light btn-floating m-1" target="_blank" href="https://github.com/shubhamm-06" role="button"><i class="fab fa-github"></i></a>
        </section>
      </div>
      <div class="text-center p-3" style="background-color: rgba(0, 0, 0, 0.2);">
        &copy; 2023 Makaut.org
      </div>
    </footer>
  `;

  // Replace the existing footer's content with the dynamically created HTML
  existingFooter.innerHTML = footerHTML;
}

const linkList = document.getElementById("links");
if(linkList){
  const linkListHtml = `<div class="p-3">
  <h4 class="font-italic">Elsewhere</h4>
  <ol class="list-unstyled">
    <li><a href="https://makautwb.ac.in/" target="_blank" >Official Website</a></li>
    <li><a href="https://makaut1.ucanapply.com/smartexam/public/" target="_blank">Student Portal</a></li>
    <li><a href="https://makautwb.ac.in/page.php?id=411" target="_blank">NIRF Ranking</a></li>
  </ol>
</div>`;
linkList.innerHTML = linkListHtml;

}