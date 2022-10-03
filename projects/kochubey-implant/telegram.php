<?php 
// https://api.telegram.org/bot5395791651:AAGIakGLPiMwmO3iJLQlKBRZR6PYqZjj1iM/getUpdates

$name = $_POST["u_name"];
$phone = $_POST['u_phone'];

$token = "5395791651:AAGIakGLPiMwmO3iJLQlKBRZR6PYqZjj1iM";
$chat_id = "-1001787428012";

$arr = array(
    'Имя: ' => $name,
    'Телефон: ' => $phone
);

foreach($arr as $key => $value) {
    $txt .= "<b>".$key."</b> ".$value."%0A";
};

$sendToTelegram = fopen("https://api.telegram.org/bot{$token}/sendMessage?chat_id={$chat_id}&parse_mode=html&text={$txt}","r");
    
if ($sendToTelegram) {
    header ('Location: https://audit.matrix-quest.ru/thnk.html');
    return true;
} else {
    echo 'Error';
}
?>