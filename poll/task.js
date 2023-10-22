const pollTitleElement = document.getElementById("poll__title");
const pollAnswersElement = document.getElementById("poll__answers");

async function loadPoll() {
    try {
        const response = await fetch(
            "https://students.netoservices.ru/nestjs-backend/poll"
        );
        const pollData = await response.json();

        pollTitleElement.textContent = pollData.data.title;

        pollData.data.answers.forEach((answer) => {
            const answerButton = document.createElement("button");
            answerButton.className = "poll__answer";
            answerButton.textContent = answer;
            answerButton.addEventListener("click", () => {
                alert("Спасибо, ваш голос засчитан!");
            });
            pollAnswersElement.appendChild(answerButton);
        });
    } catch (error) {
        console.error("Произошла ошибка при загрузке опроса:", error);
    }
}
