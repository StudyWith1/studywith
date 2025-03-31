document.addEventListener("DOMContentLoaded", () => {
    const studentForm = document.getElementById("student-register-form");
    if (studentForm) {
        studentForm.addEventListener("submit", async (event) => {
            event.preventDefault();

            const formData = new FormData(studentForm);
            const data = Object.fromEntries(formData.entries());
            console.log("Student form data:", data);

            try {
                const response = await fetch("http://localhost:8000/auth/register", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify(data),
                });

                const result = await response.json();

                if (response.ok) {
                    alert("Registration successful! Please confirm your email.");
                    localStorage.setItem("userEmail", data.email);
                    window.location.href = "/confirm-email";
                    studentForm.reset();
                } else {
                    alert(result.error || "An error occurred during registration.");
                }
            } catch (error) {
                alert("Failed to connect to the server. Please try again later.");
                console.error("Error during student registration:", error);
            }
        });
    }

    const teacherForm = document.getElementById("teacher-register-form");

if (teacherForm) {
    teacherForm.addEventListener("submit", async (e) => {
        e.preventDefault();

        // Отримуємо дані з форми
        const formData = new FormData(teacherForm);
        const name = formData.get("name").trim();
        const email = formData.get("email").trim();
        const password = formData.get("password").trim();
        const forbiddenChars = /[^a-zA-Z0-9]/;
        const minPasswordLength = 6;
        const currentLang = localStorage.getItem('language');
        const errorElement = document.getElementById('error-message');
        const fillfields = {
            en: `Please fill in all fields`,
            ua: `Будь ласка, заповніть всі поля`
        };
        // Перевіряємо, чи всі поля заповнені
        if (!name || !email || !password) {
            errorElement.textContent = fillfields[currentLang];
            return;
        }


        const shortpass = {
            en: `Password must be at least ${minPasswordLength} characters long`,
            ua: `Пароль має бути щонайменше ${minPasswordLength} символів завдовжки`
        };
        
        if (password.length < minPasswordLength) {
            errorElement.textContent = shortpass[currentLang];
            return;
        }

        // Створюємо об'єкт для зберігання
        const teacherData = {
            name,
            email,
            password,
        };

        console.log("Teacher data to save:", teacherData);

        try {
            // Очищуємо дані студента перед збереженням нового вчителя
            sessionStorage.removeItem("isStudentBecomingTeacher");
            sessionStorage.removeItem("userId");
            sessionStorage.removeItem("role");
            sessionStorage.removeItem("name");
            sessionStorage.removeItem("email");
            sessionStorage.removeItem("password");
            // Зберігаємо в sessionStorage
            sessionStorage.setItem("teacherData", JSON.stringify(teacherData));
            sessionStorage.setItem("currentStep", "0"); // Початковий крок
            sessionStorage.setItem("isStudentBecomingTeacher", "false"); 
            console.log("🔹 Redirecting to full registration with data:", sessionStorage.getItem("teacherData"));
            // Перенаправляємо на другу сторінку
            window.location.href = "/registration_pages/full_reg_teacher.html";
        } catch (error) {
            console.error("Error during registration:", error);
            alert("An error occurred. Please try again.");
        }
    });
}
});
