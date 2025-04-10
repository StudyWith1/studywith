const translations = {
  en: {
      pageTitle: 'Study With | Profile',
      // username: 'Username',
      btnTeacher: 'Become a teacher',
      myCourses: 'My courses',
      courseName: 'Course name',
      courseProgress: 'Progress',
      btnResume: 'Resume',
      myCertificates: 'My certificates',
      certificateName: 'Certificate name', 
      completedOn: 'Completed on',
      btnDownload: 'Download',
      myBookmarks: 'My bookmarks',
      bookmarkName: 'Bookmark name',
      btnOpen: 'Open',
      btnViewAll: 'View all',
      publicProf: 'Public profile',
      profile: 'Profile',
      security: 'Security',
      messages: 'Notifications',
      closeAccount: 'Closing an account',
      infPublicProf: 'This is your public profile. You can see how it looks to other users.',
      editProf: 'Editing your profile',
      name: 'Name:',
      entername:'Enter your real name',
      nickname: 'Nickname:',
      enterNickname: 'Enter your nickname',
      dob: 'Date of birth:',
      enterDOB: 'Enter your date of birth',
      phone: 'Phone:',
      enterPhone: 'Enter your phone number',
      description: 'Description:',
      writeDescription: 'Write some information about yourself',
      saveChanges: 'Save changes',
      securitySettings: 'Security settings',
      currentPassword: 'Current Password:',
      enterCurrentPassword: 'Enter current password',
      newPassword: 'New Password:',
      enterNewPassword: 'Enter new password',
      confirmNewPassword: 'Confirm New Password:',
      confirmEnterNewPassword:'Confirm new password',
      updatePassword: 'Update password',
      noMessages: 'You have no new notifications yet.',
      manageAccount: 'Manage Account Visibility',
      privatePublic: 'You can make your account private or public using the buttons below.',
      closeAccount: 'Close Account',
      openAccount: 'Open Account',
      noCourses: 'You haven\'t enrolled in any courses yet.',
      noCertificates: 'You do not have any certificates yet',
      btnShowLess: 'Show less',
      noLinkedCourses: "You have no saved courses yet",
      contentNotFound: "Content not found.",
      noReplies: "There are no notifications.",
      responseTo: "Response to: ",
      goToCourse: "Go to the course",
  },
  ua: {
      pageTitle: 'Study With | Профіль',
      // username: 'Ім`я користувача',
      btnTeacher: 'Стати вчителем',
      myCourses: 'Мої курси',
      courseName: 'Назва курсу',
      courseProgress: 'Прогрес',
      btnResume: 'Продовжити', 
      myCertificates: 'Мої сертифікати',
      certificateName: 'Назва сертифікату',
      completedOn: 'Завершено ',
      btnDownload: 'Завантажити',
      myBookmarks: 'Мої закладки',
      bookmarkName: 'Назва закладки',
      btnOpen: 'Відкрити',
      btnViewAll: 'Показати все',
      btnViewLess: "Показати менше",
      publicProf: 'Публічний профіль',
      profile: 'Профіль',
      security: 'Безпека',
      closeAccount: 'Закриття акаунту',
      infPublicProf: 'Це ваш публічний профіль. Ви можете побачити, як це виглядає для інших користувачів.',
      editProf: 'Редагування профілю',
      name: 'Ім`я:',
      entername:'Введіть своє справжнє ім`я',
      nickname: 'Нік:',
      enterNickname: 'Введіть ваш нік',
      dob: 'Дата народження:',
      enterDOB: 'Введіть вашу дату народження',
      phone: 'Телефон:',
      enterPhone: 'Введіть ваш номер телефону',
      description: 'Опис:',
      writeDescription: 'Напишіть трохи інформації про себе',
      saveChanges: 'Зберегти зміни',
      securitySettings: 'Налаштування безпеки',
      currentPassword: 'Поточний пароль:',
      enterCurrentPassword: 'Введіть поточний пароль',
      newPassword: 'Новий пароль:',
      enterNewPassword: 'Введіть новий пароль',
      confirmNewPassword: 'Підтвердження нового паролю:',
      confirmEnterNewPassword:'Підтвердіть новий пароль',
      updatePassword: 'Оновити пароль',
      messages: 'Сповіщення',
      noMessages: 'У вас ще немає нових сповіщень.',
      manageAccount: 'Управління видимістю акаунту',
      privatePublic: 'Ви можете зробити свій акаунт приватним або публічним за допомогою кнопок нижче.',
      closeAccount: 'Закрити акаунт',
      openAccount: 'Відкрити акаунт',
      noCourses: 'Ви ще не записались на жодний курс.',
      noCertificates: 'У вас ще немає сертифікатів',
      btnShowLess: 'Показати менше',
      noLinkedCourses: 'У вас ще немає збережених курсів',
      contentNotFound: "Вміст не знайдено.",
      noReplies: "Сповіщень немає.",
      responseTo: "Відповідь на: ",
      goToCourse: "Перейти до курсу",

  }
};
document.addEventListener("DOMContentLoaded", () => {
  const tabLinks = document.querySelectorAll(".tab-link");
  const modal = document.getElementById("modal");
  const modalContentContainer = document.getElementById(
    "modal-content-container"
  );
  const closeButton = document.querySelector(".close-button");

  // Закриття модального вікна
  closeButton.addEventListener("click", () => {
    modal.style.display = "none";
  });

  function applyLanguage(lang) {
    const langData = translations[lang];

    document.title = langData.pageTitle;

    document.querySelectorAll("[data-lang]").forEach((element) => {
      const langKey = element.getAttribute("data-lang");
      if (langData[langKey]) {
        if (element.tagName === "INPUT") {
          element.setAttribute("placeholder", langData[langKey]);
        } else if (element.tagName === "BUTTON") {
          element.textContent = langData[langKey];
        } else if (element.tagName === "A") {
          element.textContent = langData[langKey];
        } else if (element.tagName === "SPAN") {
          element.textContent = langData[langKey];
        } else {
          element.innerHTML = langData[langKey];
        }
      }
    });
  }

  document.addEventListener("DOMContentLoaded", () => {
    const userLang = localStorage.getItem("language") || "en";
    applyLanguage(userLang);
    document.getElementById("lang-switcher").addEventListener("change", (e) => {
      const selectedLang = e.target.value;
      localStorage.setItem("language", selectedLang);
      applyLanguage(selectedLang);
    });
  });


  async function updateProgress() {
    try {
      const courseId = window.location.pathname.split("/course/").pop();
      const userId = localStorage.getItem("userId");

      const response = await fetch(
        `/api/course/${courseId}/progress?userId=${userId}`
      );
      if (!response.ok) throw new Error("Failed to fetch progress");

      const progressData = await response.json();
      console.log("Progress data:", progressData); // Для дебагу

      // Оновлюємо прогрес-бар в хедері
      const progressBar = document.querySelector(".progress-bar span");
      const progressText = document.querySelector(".progress-text .percent");

      if (progressBar && progressText) {
        const progress = progressData.progress || 0;
        progressBar.style.width = `${progress}%`;
        progressText.textContent = `${Math.round(progress)}%`;
      }

      // Оновлюємо прогрес в модулях
      document
        .querySelectorAll(".module-progress")
        .forEach((moduleProgress) => {
          const total = progressData.totalLectures;
          const completed = progressData.completedLectures;
          moduleProgress.innerHTML = `
                <span>${completed}/${total} complete</span>
                <span class="separator">|</span>
                <span>${total - completed} left</span>
            `;
        });
    } catch (error) {
      console.error("Error updating progress:", error);
    }
  }

  function addCertificateToList(courseName, completionDate) {
    const certificatesList = document.querySelector(".certificates-list");
    if (!certificatesList) return;

    const certificateDiv = document.createElement("div");
    certificateDiv.className = "certificate";
    certificateDiv.innerHTML = `
        <p class="p-1" data-lang="certificateName">${courseName}</p>
        <p class="p-2" data-lang="completedOn">Completed on ${completionDate}</p>
        <button class="btn-download">
            <img src="/images/download-certificate.png" alt="Download Certificate">
        </button>
    `;

    certificatesList.appendChild(certificateDiv);
  }

  function updateCourseProgress(courseId, progress) {
    if (progress >= 100) {
      const currentDate = new Date();
      const formattedDate = `${currentDate
        .getDate()
        .toString()
        .padStart(2, "0")}/${(currentDate.getMonth() + 1)
        .toString()
        .padStart(2, "0")}/${currentDate.getFullYear()}`;

      fetch(`/api/courses/${courseId}`)
        .then((response) => response.json())
        .then((courseData) => {
          addCertificateToList(courseData.name, formattedDate);
        })
        .catch((error) =>
          console.error("Помилка отримання даних курсу:", error)
        );
    }
  }

  // Функція для завантаження закладок
  async function loadSavedBookmarks() {
    try {
      const userId = localStorage.getItem("userId");
      if (!userId) {
        console.log("Користувач не авторизований");
        return;
      }

      const response = await fetch(
        `http://localhost:8000/courses/bookmarks/${userId}`
      );
      if (!response.ok)
        throw new Error("Помилка завантаження збережених курсів");

      let courses = await response.json();
      courses = courses.filter((course) => course.is_saved);

      const bookmarksList = document.querySelector(".bookmarks-list");
      if (!bookmarksList) return;

      const lang = localStorage.getItem("language") || "en";
      const t = translations[lang];

      if (courses.length === 0) {
        bookmarksList.innerHTML = `<p class="no-courses">${t.noLinkedCourses}</p>`;
        toggleViewAllButton("bookmarks-list", "btn-view-all-4");
        return;
      }

      bookmarksList.innerHTML = "";

      const tooltipContainers = [];

      courses.forEach((course) => {
        const bookmark = document.createElement("div");
        bookmark.className = "bookmark";

        const maxNameLength = 25;
        const truncatedName =
          course.name.length > maxNameLength
            ? course.name.substring(0, maxNameLength) + "..."
            : course.name;

        bookmark.innerHTML = `
                <div class="course-name-container" style="position: relative;">
                    <p class="p-1 course-name">${truncatedName}</p>
                    ${
                      course.name.length > maxNameLength
                        ? `<div class="tooltip" style="display: none;">${course.name}</div>`
                        : ""
                    }
                </div>
                <img src="/uploads/${
                  course.image_url || "images/250x100.png"
                }" alt="${course.name}">
                <button class="btn-open" data-course-id="${course.id}">
                    ${t.btnOpen}
                </button>
                <button class="remove-bookmark" data-course-id="${course.id}">
                    Remove
                </button>
            `;

        const tooltipContainer = bookmark.querySelector(
          ".course-name-container"
        );
        if (tooltipContainer.querySelector(".tooltip")) {
          tooltipContainers.push(tooltipContainer);
        }

        bookmarksList.appendChild(bookmark);
      });

      tooltipContainers.forEach((container) => {
        const courseName = container.querySelector(".course-name");
        const tooltip = container.querySelector(".tooltip");

        courseName.addEventListener("mouseenter", () => {
          tooltip.style.display = "block";
        });

        courseName.addEventListener("mouseleave", () => {
          tooltip.style.display = "none";
        });
      });

      document.querySelectorAll(".btn-open").forEach((button) => {
        button.addEventListener("click", function () {
          const courseId = this.dataset.courseId;
          if (courseId) {
            window.location.href = `/course/${courseId}`;
          }
        });
      });

      document.querySelectorAll(".remove-bookmark").forEach((button) => {
        button.addEventListener("click", async function () {
          const courseId = this.dataset.courseId;
          await toggleBookmark(courseId);
        });
      });

      toggleViewAllButton("bookmarks-list", "btn-view-all-4");
    } catch (error) {
      console.error("Помилка завантаження збережених курсів:", error);
      const bookmarksList = document.querySelector(".bookmarks-list");
      if (bookmarksList) {
        bookmarksList.innerHTML =
          '<p class="error-message">Помилка завантаження збережених курсів</p>';
      }
      toggleViewAllButton("bookmarks-list", "btn-view-all-4");
    }
  }
  // Функція для перемикання стану закладки (Додати / Видалити)
  async function toggleBookmark(courseId) {
    const userId = localStorage.getItem("userId");

    if (!userId) {
      console.log("Користувач не авторизований");
      return;
    }

    try {
      const response = await fetch(
        "http://localhost:8000/api/courses/bookmarks",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ userId, courseId }),
        }
      );

      if (!response.ok) throw new Error("Помилка зміни стану закладки");

      console.log("Закладка оновлена успішно");
      await loadSavedBookmarks();
    } catch (error) {
      console.error("Помилка видалення закладки:", error);
      alert("Помилка видалення закладки");
    }
  }

  function applyLanguage(lang) {
    const langData = translations[lang];
    if (!langData) return;

    document.querySelectorAll("[data-lang]").forEach((element) => {
      const langKey = element.getAttribute("data-lang");
      if (langData[langKey]) {
        if (element.tagName === "INPUT") {
          element.setAttribute("placeholder", langData[langKey]);
        } else if (element.tagName === "BUTTON") {
          element.textContent = langData[langKey];
        } else if (element.tagName === "A") {
          element.textContent = langData[langKey];
        } else if (element.tagName === "SPAN") {
          element.textContent = langData[langKey];
        } else {
          element.innerHTML = langData[langKey];
        }
      }
    });
  }

  function toggleViewAllButton(containerClass, buttonClass, threshold = 3) {
    const container = document.querySelector(`.${containerClass}`);
    const viewAllButton = document.querySelector(`.${buttonClass}`);

    if (!container) {
      console.error(`Контейнер .${containerClass} не знайдено`);
      return;
    }

    if (!viewAllButton) {
      console.error(`Кнопка .${buttonClass} не знайдено`);
      return;
    }

    const items = container.querySelectorAll(
      ".course, .certificate, .bookmark"
    );

    if (items.length <= threshold) {
      viewAllButton.style.display = "none";
      return;
    }

    viewAllButton.style.display = "block";

    const lang = localStorage.getItem("language") || "en";
    viewAllButton.textContent = translations[lang].btnViewAll;

    items.forEach((item, index) => {
      if (index >= threshold) {
        item.style.display = "none";
      }
    });

    viewAllButton.onclick = function () {
      const isExpanded = this.classList.toggle("expanded");

      items.forEach((item, index) => {
        if (isExpanded) {
          item.style.display = "block";
          this.textContent = translations[lang].btnViewLess || "View Less";
        } else {
          if (index >= threshold) {
            item.style.display = "none";
          }
          this.textContent = translations[lang].btnViewAll || "View All";
        }
      });
    };
  }

  function toggleCourseListExpansion() {
    const coursesContainer = document.querySelector(".courses-list");
    const viewAllButton = document.querySelector(".btn-view-all-1");

    if (!coursesContainer || !viewAllButton) {
      console.error("Courses container or view all button not found");
      return;
    }

    // Toggle expanded state
    const isExpanded = coursesContainer.classList.toggle("expanded");

    // Select course items to toggle (starting from 4th item)
    const coursesToToggle = coursesContainer.querySelectorAll(
      ".course:nth-child(n+4)"
    );

    // Change their visibility
    coursesToToggle.forEach((course) => {
      course.style.display = isExpanded ? "block" : "none";
    });

    // Get language and change button text
    const lang = localStorage.getItem("language") || "en";
    viewAllButton.textContent = isExpanded
      ? translations[lang].btnShowLess
      : translations[lang].btnViewAll;
  }

  function toggleCertificatesExpansion() {
    const certificatesContainer = document.querySelector(".certificates-list");
    const viewAllButton = document.querySelector(".btn-view-all-3");

    if (!certificatesContainer || !viewAllButton) {
      console.error("Certificates container or view all button not found");
      return;
    }

    // Toggle expanded state
    const isExpanded = certificatesContainer.classList.toggle("expanded");

    // Select certificate items to toggle (starting from 4th item)
    const certificatesToToggle = certificatesContainer.querySelectorAll(
      ".certificate:nth-child(n+4)"
    );

    // Change their visibility
    certificatesToToggle.forEach((certificate) => {
      certificate.style.display = isExpanded ? "block" : "none";
    });

    // Get language and change button text
    const lang = localStorage.getItem("language") || "en";
    viewAllButton.textContent = isExpanded
      ? translations[lang].btnShowLess
      : translations[lang].btnViewAll;
  }

  document.addEventListener("DOMContentLoaded", function () {
    // Attach event listeners to specific buttons to ensure they work independently
    const btnViewAllCourses = document.querySelector(".btn-view-all-1");
    const btnViewAllCertificates = document
      .querySelector(".btn-view-all-3")
      .addEventListener("click", () => {});

    if (btnViewAllCourses) {
      btnViewAllCourses.addEventListener("click", toggleCourseListExpansion);
    }

    if (btnViewAllCertificates) {
      btnViewAllCertificates.addEventListener(
        "click",
        toggleCertificatesExpansion
      );
    }

    // This listener can be removed or kept as a fallback
    document.addEventListener("click", function (event) {
      const button = event.target;

      const viewAllButtons = [
        {
          buttonClass: "btn-view-all-1",
          containerSelector: ".courses-list",
          itemSelector: ".course",
          toggleFunction: toggleCourseListExpansion,
        },
        {
          buttonClass: "btn-view-all-3",
          containerSelector: ".certificates-list",
          itemSelector: ".certificate",
          toggleFunction: toggleCertificatesExpansion,
        },
        {
          buttonClass: "btn-view-all-4",
          containerSelector: ".bookmarks-list",
          itemSelector: ".bookmark",
        },
      ];

      const buttonConfig = viewAllButtons.find((config) =>
        button.classList.contains(config.buttonClass)
      );

      if (!buttonConfig) return;

      // Check if there's a specific toggle function for this button
      if (buttonConfig.toggleFunction) {
        buttonConfig.toggleFunction();
        return;
      }

      // Fallback generic expansion logic
      const parentContainer = button.closest(
        ".my-courses, .my-certificates, .my-bookmarks"
      );
      if (!parentContainer) {
        console.error("Parent container for button not found");
        return;
      }

      const container = parentContainer.querySelector(
        buttonConfig.containerSelector
      );
      if (!container) {
        console.error(
          `Container ${buttonConfig.containerSelector} not found in`,
          parentContainer
        );
        return;
      }

      // Toggle expanded state
      const isExpanded = container.classList.toggle("expanded");

      // Select items to toggle (starting from 4th item)
      const itemsToToggle = container.querySelectorAll(
        `${buttonConfig.itemSelector}:nth-child(n+4)`
      );

      // Change their visibility
      itemsToToggle.forEach((item) => {
        item.style.display = isExpanded ? "block" : "none";
      });

      // Get language and change button text
      const lang = localStorage.getItem("language") || "en";
      button.textContent = isExpanded
        ? translations[lang].btnShowLess
        : translations[lang].btnViewAll;
    });
  });

  async function generateAndDownloadCertificate(courseId) {
    try {
      const userId = localStorage.getItem("userId");
      if (!userId || !courseId) {
        alert("Помилка: неможливо отримати дані користувача або курсу");
        return;
      }

      const userResponse = await fetch(`/api/user/${userId}`);
      if (!userResponse.ok)
        throw new Error("Помилка отримання даних користувача");
      const userData = await userResponse.json();
      const userName = userData.name;

      const courseResponse = await fetch(`/api/courses/${courseId}`);
      if (!courseResponse.ok) throw new Error("Помилка отримання даних курсу");
      const courseData = await courseResponse.json();
      const courseName = courseData.name;

      const response = await fetch("/api/certificate/generate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ userId, courseId }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.details || "Помилка генерації сертифікату");
      }

      const pdfBlob = await response.blob();
      const blobUrl = URL.createObjectURL(pdfBlob);

      const downloadLink = document.createElement("a");
      downloadLink.href = blobUrl;
      downloadLink.download = `Certificate_${courseId}.pdf`;

      document.body.appendChild(downloadLink);
      downloadLink.click();
      document.body.removeChild(downloadLink);

      setTimeout(() => URL.revokeObjectURL(blobUrl), 100);
    } catch (error) {
      console.error("Помилка генерації сертифікату:", error);
      alert("Помилка при створенні сертифікату: " + error.message);
    }
  }

  function createCertificateTemplate(userName, courseName) {
    const currentDate = new Date();
    const formattedDate = `${currentDate
      .getDate()
      .toString()
      .padStart(2, "0")}.${(currentDate.getMonth() + 1)
      .toString()
      .padStart(2, "0")}.${currentDate.getFullYear()}`;

    const certNumber = `CERT-${currentDate.getFullYear()}-${Math.floor(
      Math.random() * 100000
    )
      .toString()
      .padStart(5, "0")}`;

    return `
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Certificate</title>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@100..900&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="../certificates/certificate1.css">
</head>

<style>
body {
    background-color: #cecece;
    font-family: 'Inter', sans-serif;
    margin: 0;
    padding: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
}

.certificate {
    padding: 20px;
    position: relative;
    width: 2000px;
    height: auto;
}

.certificate-image {
    width: 100%;
    display: block;
}

.content {
    position: absolute;
    top: 55%;
    left: 45%;
    transform: translate(-50%, -50%);
    width: 80%;
    text-align: left;
}

.logo {
    width: 36px;
    height: 36px;
    vertical-align: middle;
}

h2 {
    font-size: 36px;
    font-weight: 500;
    display: flex;
    align-items: left;
    justify-content: left;
    gap: 16px;
    margin-bottom: 20px;
}

h1 {
    font-size: 68px;
    font-weight: bold;
    margin-bottom: 40px;
}

p {
    font-size: 24px;
    margin-bottom: 10px;
}

h3 {
    font-size: 32px;
    font-weight: bold;
    margin-bottom: 30px;
}

.p1{
    margin-top: 30px;
}
.cert-number {
    font-size: 20px;
    margin-top: 90px;
}

.signature {
    position: absolute;
    bottom: 50px;
    left: 30%;
    transform: translateX(-50%);
    width: 200px;
}
</style>

<body>
    <div class="certificate">
        <img class="certificate-image" src="../images/certificate1.png" alt="certificate">
        <div class="content">
            <h2><img class="logo" src="../images/menu-logo.png" alt="logo"> StudyWith</h2>
            <h1>CERTIFICATE</h1>
            <p>This certifies that</p>
            <h3>${userName.toUpperCase()}</h3>
            <p>Has successfully completed the course</p>
            <h3>${courseName}</h3>
            <p >Date of issue:${formattedDate}</p>
            <p>2020-01-01</p>
            <p class="cert-number">${certNumber}</p>
            <img class="signature" src="../images/signature1.png" alt="signature">
        </div>
    </div>
</body>

</html>
    `;
  }

  async function convertHTMLToPDF(htmlContent) {
    try {
      const container = document.createElement("div");
      container.innerHTML = htmlContent;
      document.body.appendChild(container);

      const options = {
        margin: 0,
        filename: "certificate.pdf",
        image: { type: "jpeg", quality: 0.98 },
        html2canvas: { scale: 2, useCORS: true },
        jsPDF: { unit: "mm", format: "a4", orientation: "landscape" },
      };

      const pdf = await html2pdf()
        .from(container)
        .set(options)
        .outputPdf("blob");

      document.body.removeChild(container);

      return pdf;
    } catch (error) {
      console.error("Помилка при конвертації HTML в PDF:", error);
      throw new Error("Не вдалося створити сертифікат: " + error.message);
    }
  }

  async function loadEnrolledCourses() {
    try {
        const userId = localStorage.getItem('userId');
        if (!userId) {
            console.log('User ID not found');
            return;
        }

        const response = await fetch(`/courses/enrolled/${userId}`);
        if (!response.ok) throw new Error('Failed to fetch enrolled courses');
        
        const courses = await response.json();
        const coursesContainer = document.getElementById('enrolled-courses');
        const certificatesContainer = document.querySelector('.certificates-list');
        
        if (!coursesContainer || !certificatesContainer) return;

        // Check and handle no courses for both courses and certificates
        if (!courses || courses.length === 0) {
            coursesContainer.innerHTML = `<p class="no-courses">${translations[localStorage.getItem('language') || 'en'].noCourses}</p>`;
            certificatesContainer.innerHTML = `<p class="no-courses">${translations[localStorage.getItem('language') || 'en'].noCertificates}</p>`;
            return;
        }

        coursesContainer.innerHTML = '';
        certificatesContainer.innerHTML = '';

        // Prepare all tooltip containers
        const tooltipContainers = [];

        courses.forEach(course => {
            const courseElement = document.createElement('div');
            courseElement.className = 'course';
            
            // Truncate course name if it's too long
            const maxNameLength = 25;
            const truncatedName = course.name.length > maxNameLength 
                ? course.name.substring(0, maxNameLength) + '...' 
                : course.name;

            courseElement.innerHTML = `
                <div class="course-name-container" style="position: relative;">
                    <p class="p-1 course-name">${truncatedName}</p>
                    ${course.name.length > maxNameLength 
                        ? `<div class="tooltip" style="display: none;">${course.name}</div>` 
                        : ''}
                </div>
                <div class="bottom-block">
                    <div class="progress-bar">
                        <span style="width: ${course.progress || 0}%;"></span>
                    </div>
                    <p class="percent">${course.progress || 0}%</p>
                    <img src="/uploads/${course.image_url || '/images/250x100.png'}" 
                        alt="${course.name}" 
                        onerror="this.src='/images/250x100.png'">
                    <button class="btn-resume" data-course-id="${course.id}">
                        ${translations[localStorage.getItem('language') || 'en'].btnResume}
                    </button>
                </div>
            `;

            // Store reference to tooltip container if it exists
            const tooltipContainer = courseElement.querySelector('.course-name-container');
            if (tooltipContainer.querySelector('.tooltip')) {
                tooltipContainers.push(tooltipContainer);
            }

            coursesContainer.appendChild(courseElement);

            // Add event listener to the resume button
            const resumeButton = courseElement.querySelector(".btn-resume");
            if (resumeButton) {
                resumeButton.addEventListener("click", function() {
                    const courseId = this.getAttribute("data-course-id");
                    if (courseId) {
                        window.location.href = `/course/${courseId}`;
                    }
                });
            }
            
            // Add certificates for completed courses
            if (course.progress === 100) {
                const certificateElement = document.createElement('div');
                certificateElement.className = 'certificate';
                certificateElement.innerHTML = `
                    <div class="course-name-container" style="position: relative;">
                        <p class="p-1 course-name">🏆  ${truncatedName}</p>
                        ${course.name.length > maxNameLength 
                            ? `<div class="tooltip" style="display: none;">${course.name}</div>` 
                            : ''}
                    </div> 
                    <p class="p-2">${translations[localStorage.getItem('language') || 'en'].completedOn} ${new Date().toLocaleDateString()}</p>
                    <button class="btn-download" data-course-id="${course.id}">
                        <img src="/images/download-certificate.png">
                    </button>
                `;
                certificatesContainer.appendChild(certificateElement);
            }
        });

        // If no certificates were added, show no courses message
        if (certificatesContainer.children.length === 0) {
            certificatesContainer.innerHTML = `<p class="no-courses">${translations[localStorage.getItem('language') || 'en'].noCourses}</p>`;
        }
    } catch (error) {
        console.error('Error loading enrolled courses:', error);
    }
}
  document.addEventListener("click", function (event) {
    if (event.target.closest(".btn-download")) {
      const button = event.target.closest(".btn-download");
      const courseId = button.getAttribute("data-course-id");
      if (courseId) {
        generateAndDownloadCertificate(courseId);
      } else {
        console.error("Course ID не знайдено!");
      }
    }
  });

  // 🔹 Викликаємо функції при завантаженні сторінки
  window.addEventListener("DOMContentLoaded", async () => {
    await loadSavedBookmarks();
    await loadEnrolledCourses();
    //initializeViewAllButtons();
  });

  document.addEventListener("click", function (event) {
    if (
      event.target.classList.contains(
        ".btn-view-all-1, .btn-view-all-3, .btn-view-all-4"
      )
    ) {
      const button = event.target;
      let section, list;

      if (button.classList.contains("btn-view-all-1")) {
        section = button.closest(".my-courses");
        list = section.querySelector(".courses-list");
      } else if (button.classList.contains("btn-view-all-3")) {
        section = button.closest(".my-certificates");
        list = section.querySelector(".certificates-list");
      } else if (button.classList.contains("btn-view-all-4")) {
        section = button.closest(".my-bookmarks");
        list = section.querySelector(".bookmarks-list");
      }

      if (!list) {
        console.error("Список елементів не знайдено!");
        return;
      }

      list.classList.toggle("expanded");

      const items = list.querySelectorAll(
        ".course:nth-child(n+4), .bookmark:nth-child(n+4)"
      );
      if (list.classList.contains("expanded")) {
        items.forEach((item) => (item.style.display = "block"));
        button.textContent = "View less";
      } else {
        items.forEach((item) => (item.style.display = "none"));
        button.textContent = "View all";
      }
    }
  });

  // Функція для керування кнопкою "Показати більше/менше"
  /*function manageViewAllButton(containerClass, itemsCount) {
    const viewAllBtn = document.querySelector(`.${containerClass}`);
    if (viewAllBtn) {
        // Показуємо кнопку тільки якщо елементів більше 3
        viewAllBtn.style.display = itemsCount > 3 ? 'block' : 'none';
        
        // Set initial button text
        const lang = localStorage.getItem('language') || 'en';
        viewAllBtn.textContent = translations[lang].btnViewAll;
    }
}*/
  // Функція для ініціалізації всіх кнопок
  function initializeViewAllButtons() {
    const buttonConfigs = [
      {
        buttonClass: ".btn-view-all-1",
        containerClass: ".my-courses",
        listClass: ".courses-list",
      },
      {
        buttonClass: ".btn-view-all-3",
        containerClass: ".my-certificates",
        listClass: ".certificates-list",
      },
      {
        buttonClass: ".btn-view-all-4",
        containerClass: ".my-bookmarks",
        listClass: ".bookmarks-list",
      },
    ];

    buttonConfigs.forEach((config) => {
      document.querySelectorAll(config.buttonClass).forEach((button) => {
        // Set initial button text
        const lang = localStorage.getItem("language") || "en";
        button.textContent = translations[lang].btnViewAll;

        button.addEventListener("click", function () {
          const section = button.closest(config.containerClass);
          const list = section.querySelector(config.listClass);

          if (list) {
            list.classList.toggle("expanded");
            const isExpanded = list.classList.contains("expanded");
            const lang = localStorage.getItem("language") || "en";
            button.textContent = isExpanded
              ? translations[lang].btnShowLess
              : translations[lang].btnViewAll;
          }
        });
      });
    });
  }

  // 🔹 Викликаємо функції при завантаженні сторінки
  window.addEventListener("DOMContentLoaded", () => {
    loadSavedBookmarks();
    loadEnrolledCourses();
    initializeViewAllButtons();
  });
});
