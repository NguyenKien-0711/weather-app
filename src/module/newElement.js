const newElement = (type="", className="", content="") => {
    const newElement = document.createElement(type);
    newElement.classList.add(className);
    newElement.textContent = content;
    return newElement;
}

export {newElement}