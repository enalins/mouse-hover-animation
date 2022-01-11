const container = document.querySelector('.hoverable-div');
const animatedDiv = container.querySelector('.animated-box');
const containerWidth = container.offsetWidth;
const containerHeight = container.offsetHeight;
const rect = container.getBoundingClientRect();
const containerPosX = rect.left;
const containerPosY = rect.top;

container.onmouseenter = () => {
	container.onmousemove = function(e){
		let translateX = ((100 / containerWidth) * (e.x - containerPosX)) / 5;
		let translateY = ((100 / containerHeight) * (e.y - containerPosY)) / 5;
		let skewX = ((360 / containerWidth) * (e.x - containerPosX)) / 200;
		let skewY = ((360 / containerHeight) * (e.x - containerPosY)) / 200;
		let shadowX = ((100 / containerWidth) * (e.x - containerPosX)) / 10;
		let shadowY = ((100 / containerHeight) * (e.y - containerPosY)) / 10;
		let shadowSpread = ((100 / containerWidth) * (e.x - containerPosX)) / 20;

		animatedDiv.style.transform = `translate(-${translateX}%, -${translateY}%) skew(${skewX}deg, ${skewY}deg)`;
		animatedDiv.style.filter = `drop-shadow(${shadowX}px ${shadowY}px ${shadowSpread}px rgba(0,0,0,0.3))`;
	}
}
container.onmouseleave = () => {
	animatedDiv.style.transform = `translate(0%, 0%) skew(0deg, 0deg)`;
	animatedDiv.style.filter = `drop-shadow(0px 0px 0px rgba(0,0,0,0.3))`;
}