document.addEventListener("DOMContentLoaded", () => {
    const copyBtn = document.getElementById("copy-btn");
    const discordUsername = document.getElementById("discord-username").textContent;

    copyBtn.addEventListener("click", () => {
        navigator.clipboard.writeText(discordUsername).then(() => {
            copyBtn.textContent = "Copied!";
            setTimeout(() => {
                copyBtn.textContent = "Copy Username";
            }, 2000);
        }).catch(err => {
            console.error("Failed to copy text: ", err);
        });
    });
});