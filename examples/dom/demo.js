function highlightParagraphs() {
	paragraphs = document.getElementsByTagName("p");
	for (i = 0; i < paragraphs.length; i++) {
		paragraphs[i].style.backgroundColor = "yellow";
	}
}