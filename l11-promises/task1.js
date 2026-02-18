function someText(text, waitTime) {
	setTimeout(() => {
		console.log(text);
	}, waitTime);
}

someText('Привіт!', 5000);
