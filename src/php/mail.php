<?php

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
	$name = stripslashes(trim($_POST['name']));
	$email = stripslashes(trim($_POST['email']));
	$message = stripslashes(trim($_POST['message']));
	$pattern = '/[\r\n]|Content-Type:|Bcc:|Cc:/i';
}

if (preg_match($pattern, $name) || preg_match($pattern, $email)) {
    die("error");
}

$emailIsValid = filter_var($email, FILTER_VALIDATE_EMAIL);

if ($name && $email && $emailIsValid  && $message) {

	$from = "From: Our Site!";
  	$to = "kontakt@jakubbulanda.pl"; 
  	$subject = "Wiadomość od " . $name;
  
  	$m = "Wiadomość od ".$name." ".$email."

  	".$message."

  	";

	mail($to,$subject,$m,$from);
	echo "ok";
} else {
	echo "error";
}

?>