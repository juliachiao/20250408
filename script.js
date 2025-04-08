document.addEventListener("mousemove", (event) => {
    const menu = document.querySelector(".menu");
    if (event.clientY < 250) {
        menu.classList.add("show"); // 顯示選單
    } else {
        menu.classList.remove("show"); // 隱藏選單
    }
});