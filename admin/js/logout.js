
function logout()
{
	
    event.preventDefault();
    sessionStorage.setItem('logged', '0');
    location.href = '../../index.html';
}

$('#logout').on('click', function()
{
     logout()			
	 
});
