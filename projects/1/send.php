<?php

$name = $_POST['u-name'];
$phone = $_POST['u-phone'];
$service = $_POST['u-service'];
$email = $_POST['u-email'];
$customers = $_POST['customers'];
$item1 = $_POST['item_1'];
$item2 = $_POST['item_2'];
$item3 = $_POST['item_3'];

$name = htmlspecialchars($name);
$phone = htmlspecialchars($phone);
$email = htmlspecialchars($email);
$name = urldecode($name);
$phone = urldecode($phone);
$email = urldecode($email);
$name = trim($name);
$phone = trim($phone);
$email = trim($email);

if (mail(
    "hostmaster@upgradeconsult.ru", 
    "Заявка с сайта", 
    '<p><b>' . $name . '</b>, оставил данные!</p>
    <table style="width: 100%;">
        <tr>
            <td style="border: 1px solid #bdbdbd; padding: 5px; width: 120px">Имя</td>
            <td style="border: 1px solid #bdbdbd; padding: 5px;">' . $name . '</td>
        </tr>
        <tr>
            <td style="border: 1px solid #bdbdbd; padding: 5px; width: 120px">Телефон</td>
            <td style="border: 1px solid #bdbdbd; padding: 5px;">' . $phone . '</td>
        </tr>
        <tr>
            <td style="border: 1px solid #bdbdbd; padding: 5px; width: 120px">Телефон</td>
            <td style="border: 1px solid #bdbdbd; padding: 5px;">' . $email . '</td>
        </tr>
        <tr>
            <td style="border: 1px solid #bdbdbd; padding: 5px; width: 120px">Услуга</td>
            <td style="border: 1px solid #bdbdbd; padding: 5px;"><b>' . $service . '</b> 
            </td>
        </tr>
        <tr>
            <td style="border: 1px solid #bdbdbd; padding: 5px; width: 120px">Дополнительные услуги</td>
            <td style="border: 1px solid #bdbdbd; padding: 5px;">
            ' . $item1 . ' <br>
            ' . $item2 . ' <br>
            ' . $item3 . '
            </td>
        </tr>
        <tr>
            <td style="border: 1px solid #bdbdbd; padding: 5px; width: 120px">Количество сотрудников</td>
            <td style="border: 1px solid #bdbdbd; padding: 5px;">' . $customers . '</td>
        </tr>
    </table> ',
    "From: ' . $phone . ' \r\n"
    ."Content-type: text/html; charset=utf-8\r\n"
    ."X-Mailer: PHP mail script"
    ))
{echo "сообщение успешно отправлено";} else {
    echo "при отправке сообщения возникли ошибки";
}?>