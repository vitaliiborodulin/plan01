<?php
	$Subject="Заявка с сайта plany01.ru";
    $from = "noreply". $HTTP_HOST;

	$to = "<info@plany01.ru>,<info@plany01.ru>";
	$headers  = "MIME-Version: 1.0\r\n";
	$headers .= "Content-type: text/html; charset=utf-8 \r\n";
	$headers .= "From: noreply <".$from.">\r\n";

	$msg = '

		<p>	Имя: '.$_POST['name'].'</p>
		<p>	Телефон: '.$_POST['tel'].'</p>
		<p>	Выезд: '.$_POST['riding'].'</p>
		<p>	Кол-во помещений: '.$_POST['rooms'].'</p>
		<p>	Планировки в эл. виде : '.$_POST['eplan'].'</p>
		<p>	Объект в москве : '.$_POST['moscow'].'</p>
		<p>	Сумма : '.$_POST['price'].'</p>

	';


	if(mail($to, $Subject, $msg, $headers))
	{
        header("Location: success.html");
	}
	else
	{
		echo "Error : Email has not been sent.";
	}
?>
