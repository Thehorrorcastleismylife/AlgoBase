<?php
$file = $_FILES['myfile'];
$content = file_get_contents($file['tmp_name']);
echo "Файл получен! Содержимое:\n" . $content;
// Получаем файл от JS
$file = $_FILES['myfile'];

$content = file_get_contents($file['tmp_name']);


session_start();
$_SESSION['file_content'] = $content;
$_SESSION['file_name'] = $file['name'];

// Или сохраняем во временный файл
file_put_contents('temp_content.txt', $content);

echo "OK";
?>