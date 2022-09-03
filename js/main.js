function adult(){
	let age = prompt("Please Enter Your Age");
	if (age<18) {
		document.getElementById('msg').innerHTML ="<span style='color:red'>You are a Child</span> & Your Age Is " + age;
	}else{
		document.getElementById('msg').innerHTML ="<span style='color:green; ;'>You are an Adult</span> & Your Age Is: " + age;
	}
}