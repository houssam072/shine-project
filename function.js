function myFunction(){
    myVar = setTimeout(showPage, 3000);
    
    document.querySelector('.myPage').style.display = 'none';
}
function showPage(){
    document.querySelector('.loader-web').style.display = 'none';
    document.querySelector('.myPage').style.display = 'block';
}