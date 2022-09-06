const btn = document.querySelector("button");
const onStatus = document.querySelector(".online-status");
const nameNode = document.querySelector(".name");
const wrapper = document.querySelector(".wrapper");

const animDuration = 250; // in ms

function hideOnlineStatusAnim() {
	onStatus.style.opacity = 0;
	setTimeout(() => {
		onStatus.remove();
		nameNode.style.height = "100%";
	}, animDuration + 1);
}

function showOnlineStatusAnim() {
	nameNode.style.height = "50%";
	onStatus.style.height = 0;
	setTimeout(() => {
		wrapper.append(onStatus);
		onStatus.style.height = "50%";
	}, animDuration + 1);
	setTimeout(() => {
		onStatus.style.opacity = 1;
	}, animDuration * 2 + 1);
}

btn.addEventListener("click", () => {
	if (wrapper.classList.contains("online")) {
		hideOnlineStatusAnim();
	} else {
		showOnlineStatusAnim();
	}
	wrapper.classList.toggle("online");
});
