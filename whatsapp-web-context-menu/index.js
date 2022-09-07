const menuContainer = document.createElement("div");
menuContainer.classList.add("menu-container");
const menuWidth = 191.2;
const menuHeight = 280.1;
const animDuration = 250; // in ms

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
	const menuItem = document.createElement("li");
	menuItem.textContent = option;
	menuList.append(menuItem);
});

menuContainer.append(menuList);

function clickedOutside(e) {
	if (e.target === menuContainer || menuContainer.contains(e.target)) return;
	removeMenu();
}

function _animateMenu(e) {
	let transformOriginX = "left";
	let transformOriginY = "top";

	if (e.clientX + menuWidth >= window.innerWidth) {
		transformOriginX = "right";
		menuContainer.style.left = e.clientX - menuWidth + "px";
	} else {
		menuContainer.style.left = e.clientX + "px";
	}

	if (e.clientY + menuHeight >= window.innerHeight) {
		transformOriginY = "bottom";
		menuContainer.style.top = e.clientY - menuHeight + "px";
	} else {
		menuContainer.style.top = e.clientY + "px";
	}

	menuContainer.style.transformOrigin =
		transformOriginY + " " + transformOriginX;
}

function moveMenu(e) {
	e.preventDefault();

	_animateMenu(e);
}

function _initListeners() {
	document.addEventListener("click", clickedOutside);
	document.removeEventListener("contextmenu", addMenu);
	document.addEventListener("contextmenu", moveMenu);
}

function addMenu(e) {
	e.preventDefault();

	_animateMenu(e);

	document.body.append(menuContainer);
	setTimeout(() => menuContainer.classList.add("reveal"), 10);

	setTimeout(() => _initListeners(), animDuration + 1);
}

function _delListeners() {
	document.removeEventListener("click", clickedOutside);
	document.removeEventListener("contextmenu", moveMenu);
	document.addEventListener("contextmenu", addMenu);
}

function removeMenu() {
	menuContainer.classList.remove("reveal");
	setTimeout(() => {
		menuContainer.remove();
		_delListeners();
	}, animDuration + 1);
}

document.addEventListener("contextmenu", addMenu);
