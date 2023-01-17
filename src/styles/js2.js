function sendEmail(){
	 Email.send({
	 	 Host : "smtp.gmail.com",
	     Username : "georgemellese@gmail.com",
	     Password : "banana_buffay_1994",
	     To : 'michaelmellese23@gmail.com',
	     From : document.getElementById("Email").value,
	     Subject : "New contact Form Enquiry",
	     Body : "And this is the body"
	 	 

}  
