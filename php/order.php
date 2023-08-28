

// ОТЗЫВЫ


<?php 

  $headers = 'Content-type: text/plain; charset="utf-8"';

  $username = $_POST['username'];
  $usermail = $_POST['usermail'];
  $userphone = $_POST['userphone'];
  $usertext = $_POST['usertext'];

  $headers = 'MiME-Version: 1.0' . "\r\n";
  $headers .= 'Content-type: text/html; charset="utf-8"';

  $to = 'beznosova.irine@yandex.ru';
  $subject = 'Отзыв с сайта';
  $message = "
  <html>
  <table>
    <tr>
      <td>Имя</td>
      <td>$username</td>
    </tr>
    <tr>
      <td>Емайл</td>
      <td>$usermail</td>
    </tr>
    <tr>
      <td>Телефон</td>
      <td>$userphone</td>
    </tr>
    <tr>
      <td>Отзыв</td>
      <td>$usertext</td>
    </tr>
  </table>
  </html>
  ";

  mail($to, $subject, $message, $headers);
  // $to - кому
  // $subject - тема письма
  // $message - тело письма (содержимое)
  // $headers - спец заголовок, не трогаем

  echo 'отпрвка формы'; 
 
  

  header("Location: file:///C:/Users/Sergei/Desktop/Anastasia.ru/thanks.html success.html"); /* Перенаправление броузера */

/* Можно убедиться, что следующий за командой код не выполнится из-за
перенаправления.*/
exit;

?>