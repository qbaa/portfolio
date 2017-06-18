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

	$header = "From: ".$email."".PHP_EOL."Content-type: text/plain; charset=utf-8";
  	$to = "kontakt@jakubbulanda.pl";
  	$subject = "=?UTF-8?B?".base64_encode("Wiadomość od " . $name ."")."?=";
  
  	$m = "Wiadomość od ".$name." ".$email."\r\n\r\n".$message."";

	mail($to,$subject,$m,$header);
	echo "ok";
} else {
	echo "error";
}

?>