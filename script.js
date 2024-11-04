// script.js

document.addEventListener("DOMContentLoaded", () => {
  const usersContainer = document.querySelector(".users-container");
  const userTemplate = document.querySelector("#user-template");

  const usersData = [
    {
      name: "John Doe",
      email: "",
      age: "28 years Old",
      info: "A passionate wildlife enthusiast and photographer, often found exploring nature",
      image: "/public/panda.png",
      placeholder: "User Image",
    },
    {
      name: "Jane Smith",
      email: "janesmith@example.com",
      age: "",
      info: "An avid reader and aspiring novelist, Jane loves spending her weekends at local cafes.",
      image: "/public/avatar_1.jpg",
      placeholder: "User Image",
    },
    {
      name: "",
      email: "mikebrown@example.com",
      age: "45 years old",
      info: "Tech-savvy and innovative Sarah is known for her cutting-edge software solutions",
      image: "",
      placeholder: "User Image",
    },
    {
      name: "Sarah Johnson",
      email: "sarahjohn@example.com",
      age: "30 years old",
      info: "A fitness enthusiast, Alex enjoys hiking and participating in marathons around the country",
      image: "/public/avatar_2.jpg",
      placeholder: "User Image",
    },
    {
      name: "Alex Martinez",
      email: "",
      age: "27 years old",
      info: "",
      image: "",
      placeholder: "User Image",
    },
  ];

  usersData.forEach((user) => {
    const userClone = userTemplate.content.cloneNode(true);
    const userImage = userClone.querySelector(".user-image");

    // Check if the user has an image URL
    if (user.image) {
        userImage.src = user.image;
        userImage.classList.add("rounded"); // Add the rounded effect if there is an image
    } else {
        userImage.style.display = ""; // Hide the image element if no image is provided
    }
    userClone.querySelector(".user-image").src = user.image || "";
    userClone.querySelector(".user-name").textContent = user.name || "";
    userClone.querySelector(".user-email").textContent = user.email || "";
    userClone.querySelector(".user-info").textContent = user.info || "";

    const ageElement = userClone.querySelector(".user-age");
    if (user.age) {
      ageElement.textContent = `${user.age}`;
    } else {
      ageElement.style.display = "none";
    }

    const closeButton = userClone.querySelector(".btn-close");
    closeButton.innerHTML = "&times;";
    closeButton.addEventListener("click", function () {
      this.closest(".user-container").remove();
    });

    usersContainer.appendChild(userClone);
  });
});
