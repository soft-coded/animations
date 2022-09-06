const menuContainer = document.createElement("div");
menuContainer.classList.add("menu-container");

const menuOptions = [
	"Group info",
	"Select messages",
	"Unmute notifications",
	"Disappearing messages",
	"Clear messages",
	"Exit group"
];

const menuList = document.createElement("ul");
menuOptions.forEach(option => {
	let menuItem = document.createElement("li");
	menuItem.textContent = option;
	menuList.append(menuItem);
});

menuContainer.append(menuList);

function clickedOutside(e) {
	// if (e.target === menuContainer)
}

function addMenu(e) {
	menuContainer.style.top = e.clientY + "px";
	menuContainer.style.left = e.clientX + "px";
	document.body.append(menuContainer);
	setTimeout(() => menuContainer.classList.add("reveal"), 10);

	document.addEventListener("click");
}

function removeMenu(e) {
	menuContainer.classList.remove("reveal");
	setTimeout(() => {
		menuContainer.remove();
	}, 251);
}

document.addEventListener("click", addMenu);
