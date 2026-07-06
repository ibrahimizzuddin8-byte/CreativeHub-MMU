const username = localStorage.getItem('username');
if (!username) {
    alert('please register or login first to access your profile page');
    window.location.href = '/login.html';
}
const email = localStorage.getItem('email');
const studentId = localStorage.getItem('studentId');

document.getElementById('profileTitle').textContent = username;
document.getElementById('profileInfo').innerHTML = `Email: ${email || 'Not provided'}<br>Student ID: ${studentId || 'Not provided'}`; 
