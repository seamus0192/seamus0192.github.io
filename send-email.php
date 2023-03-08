<?php
if(isset($_POST['submit'])) {
    $name = $_POST['name'];
    $email = $_POST['email'];
    $message = $_POST['message'];
    
    $to = 'seamus0192@gmail.com'; // Replace with your own email address
    $subject = 'New message from website contact form';
    $body = "Name: $name\nEmail: $email\nMessage: $message";
    
    $headers = "From: $email";
    
    if(mail($to, $subject, $body, $headers)) {
        echo 'Message sent successfully!';
    } else {
        echo 'An error occurred while sending the message.';
    }
}
?>