import { changeBackgroundWhenSearch } from "./changeBackground";
import { getInformation } from "./getInformation";
const searchButton = document.querySelector(".search-btn");
const clickSearchEvent = searchButton.addEventListener("click", () => {
    changeBackgroundWhenSearch();
    getInformation();
})

export { clickSearchEvent }