function showPage(pageNumber) {
    // Hide all page contents
    const pageContents = document.querySelectorAll('.page-content');
    pageContents.forEach(content => content.classList.toggle('active'));

    // Activate the selected page content
    
    document.getElementById(`page${pageNumber}`).classList.add('active');

    // Update the active page number link
    const pageLinks = document.querySelectorAll('.page-number a');
    pageLinks.forEach(link => link.classList.remove('active'));
    pageLinks[pageNumber - 1].classList.add('active');
}