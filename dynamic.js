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
  "MAKAUT 2024-2025 Academic Calender",
  "06-07-2024",
  "With a new academic year on the horizon, Maulana Abul Kalam Azad University of Technology (MAKAUT) in West Bengal has released its academic calendar for 2024-25. ",
  "/Img/academic_cal.png",
  "/Notice/Notice/MAKAUT-Academic-Calender-2024-25.html"
);
createCard(
  "MAKAUT 2024 Holiday List",
  "03-03-2024",
  "Looking beyond the basic MAKAUT holiday list 2024, this article unlocks the full potential of the academic calendar, empowering you to plan your semester, save money, and thrive at university.",
  "/Img/Academic.png",
  "/Notice/Notice/MAKAUT-Holiday-2024.html"
);
createCard(
  "Should you Study BCA?",
  "12-04-2024",
  "As a BCA student myself, I can offer you my perspective based on my experience regarding whether you should pursue a BCA in 2024",
  "/Img/bloga.webp",
  "/Notice/Notice/should-You-study-BCA.html"
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
  "/Img/image32.jpeg",
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
    <footer class="bg-dark text-center text-white mt-5" id="ip">
      <div class="container p-4 pb-0">
        <section class="mb-4 text-center">
          <a class="btn btn-outline-light btn-floating m-1" href="mailto:makautorg@gmail.com" role="button"><i class="fab fa-google"></i></a>
          <a class="btn btn-outline-light btn-floating m-1" target="_blank" href="https://github.com/shubhamm-06" role="button"><i class="fab fa-github"></i></a>
        </section>
      </div>
      <div class="text-center p-3" style="background-color: rgba(0, 0, 0, 0.2);">
        &copy; 2024 Makaut.org
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


// Pop Up




// Function to create and insert pop-up HTML dynamically
// Add the pop-up HTML dynamically to the body
// (function() {
//   // HTML structure of the pop-up
//   const popupHTML = `
//     <div class="custom-popup-container" id="customPopup">
//       <div class="custom-popup-box">
//         <button class="custom-popup-close" onclick="closePopup()">×</button>
//         <img class="custom-popup-image" src="http://makaut.org/img/popup.jpg" alt="Image">
//         <h2 class="custom-popup-title">Graduation to Career: Placement Tips & More</h2>
//         <p class="custom-popup-text">
//           Join Aravind Arul’s <b>free session </b> to kickstart your career in the modern age. Aravind is a Finance Educator (16k+ <a href="https://www.linkedin.com/in/aravind-arul/"> LinkedIn</a> followers), Head of Growth at Wisdom Hatch, <b>ex-Software Engineer at Qualcomm</b>, and <b>NIT Rourkela grad.</b>
//         </p>
//         <a href="https://docs.google.com/forms/d/e/1FAIpQLSeeEgnNzQLrmSMTySa1Uvc6cPsVRPmJkl8IZJ0GG8BOHHBOHg/viewform" class="custom-popup-cta">Register Now</a>
//       </div>
//     </div>
//   `;
  
//   // Insert the HTML into the body of the page
//   document.body.insertAdjacentHTML('beforeend', popupHTML);

//   // Add the CSS dynamically
//   const style = document.createElement('style');
//   style.innerHTML = `
//     .custom-popup-container {
//       display: none;
//       position: fixed;
//       top: 0;
//       left: 0;
//       width: 100%;
//       height: 100%;
//       background: rgba(0, 0, 0, 0.6);
//       z-index: 99999999999999999999999;
//       justify-content: center;
//       align-items: center;
//       padding: 20px;
//       box-sizing: border-box;
//     }

//     .custom-popup-box {
//       background: #fff;
//       border-radius: 10px;
//       width: 90%;
//       max-width: 750px;
//       padding: 16px;
//       text-align: center;
//       position: relative;
//       box-shadow: 0 8px 25px rgba(0, 0, 0, 0.2);
//       box-sizing: border-box;
//       animation: fadeIn 0.5s ease-in-out;
//     }

//     @keyframes fadeIn {
//       from {
//         opacity: 0;
//         transform: translateY(-20px);
//       }
//       to {
//         opacity: 1;
//         transform: translateY(0);
//       }
//     }

//     .custom-popup-close {
//       position: absolute;
//       top: 0px;
//       right: 0px;
//       background: none;
//       border: none;
//       font-size: 2rem;
//       color: #555;
//       cursor: pointer;
//       font-weight: bold;
//       z-index: 1050;
//     }

//     .custom-popup-close:hover {
//       color: #000;
//     }

//     .custom-popup-image {
//       width: 100%;
//       aspect-ratio: 16 / 9;
//       object-fit: cover;
//       border-radius: 8px;
//       margin-bottom: 20px;
//     }

//     .custom-popup-title {
//       font-size: 2rem;
//       color: #000; /* Change to black */
//       margin-bottom: 15px;
//       font-weight: 700;
//       line-height: 1.2;
//     }

//     .custom-popup-text {
//       font-size: 1.1rem;
//       color: #333;
//       margin-bottom: 20px;
//       line-height: 1.6;
//     }

//     .custom-popup-cta {
//       display: inline-block;
//       background: #186aff;
//       color: #fff;
//       text-decoration: none;
//       padding: 12px 25px;
//       font-size: 1.1rem;
//       border-radius: 5px;
//       box-shadow: 0 5px 15px rgba(24, 106, 255, 0.4);
//       transition: background 0.3s ease;
//     }

//     .custom-popup-cta:hover {
//       background: #0a53b7;
//     }

//     @media (max-width: 600px) {
//       .custom-popup-box {
//         width: 100%;
//         max-width: 100%;
//       }

//       .custom-popup-title {
//         font-size: 1.7rem;
//       }

//       .custom-popup-cta {
//         font-size: 1rem;
//       }

//       .custom-popup-image {
//         height: auto;
//       }
//     }
//   `;
  
//   // Append the style to the document
//   document.head.appendChild(style);

//   // Show the pop-up after 3 seconds
//   setTimeout(function() {
//     document.getElementById("customPopup").style.display = "flex";
//   }, 3500);

//   // Close the pop-up
//   window.closePopup = function() {
//     document.getElementById("customPopup").style.display = "none";
//   };
// })();
