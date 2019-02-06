<?php
if(!empty($_POST["send"])) {
	$name = $_POST["Name"];
	$email = $_POST["Email"];
	$message = $_POST["Message"];

	$toEmail = "jeff@jeffcadampog.com";
	$mailHeaders = "From: " . $name . "<". $email .">\r\n";
	if(mail($toEmail, $subject, $content)) {
	    $message = "Your contact information is received successfully.";
	    $type = "success";
	}
}
require_once "contact.php";
?>