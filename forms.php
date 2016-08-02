<?php
    $to = "fisunovartem@gmail.com";
    $subject = "New order";
    $txt = "Имя: " . $_POST["name"] . " \n" .  "Телефон: " . $_POST["phone"] . " \n" .  "Сообщение: " . $_POST["message"] ;

    mail($to,$subject,$txt);
?>