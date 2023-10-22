const form = document.getElementById("form");
const progress = document.getElementById("progress");

form.addEventListener("submit", function (event) {
    event.preventDefault();

    const formData = new FormData(form);

    const xhr = new XMLHttpRequest();
    xhr.open(
        "POST",
        "https://students.netoservices.ru/nestjs-backend/upload",
        true
    );

    xhr.upload.onprogress = function (event) {
        if (event.lengthComputable) {
            const percentComplete = (event.loaded / event.total) * 100;
            progress.value = percentComplete;
        }
    };

    xhr.onload = function () {
        if (xhr.status >= 200 && xhr.status < 300) {
            console.log("Файл успешно загружен!");
        } else {
            console.error(
                "Ошибка при загрузке файла. Пожалуйста, попробуйте снова."
            );
        }
    };

    xhr.onerror = function () {
        console.error(
            "Произошла ошибка при соединении. Пожалуйста, попробуйте снова."
        );
    };

    xhr.send(formData);
});
