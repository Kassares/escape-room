<?php

include 'functions.php';

if (!empty($_POST)){

  $data['success'] = true;
  $_POST  = multiDimensionalArrayMap('cleanEvilTags', $_POST);
  $_POST  = multiDimensionalArrayMap('cleanData', $_POST);

  //your email adress 
  $emailTo ="demetrius_92@mail.ru"; //"yourmail@yoursite.com";

  //from email adress
  $emailFrom ="contact@escape-room.com"; //"contact@yoursite.com";

  //email subject
  $emailSubject = "Письмо с сайта Grand escape room";
 
  $today = date("d.m.Y");
  
  $name = $_POST["name"];
  $phone = $_POST["phone"];
  $email = $_POST["email"];
  $comment = $_POST["comment"];
  if($name == "")
   $data['success'] = false;
 
  if($phone == "")
   $data['success'] = false;
   
  if($email == "")
   $email = "Не указано";

 if($comment == "")
   $data['success'] = false;

 if($data['success'] == true){

  $message = "
             <div style='margin: 0;	padding: 0;	font-family: Arial, sans-serif;'>
             		<table width='100%' height='100%' cellpadding='0' cellspacing='0' bgcolor='#303030'>
             			<tr>
             				<td>
             					<table id='mail-header' cellpadding='0' cellspacing='0' width='600' align='center' bgcolor='#303030'> 
             						<tr>
             							<td>
             								<table id='logo' cellpadding='10' cellspacing='0' align='center' bgcolor='#303030'>  
    						            <tr>  
    						                <td width='600' align='center'>
             											    <a href='http://pr0jects.hol.es/'>
             								         <img src='http://pr0jects.hol.es/images/logo-min.png' width='161' height='57' border='0'  alt='logo'>
             								       </a>
             						       </td>  
     						            </tr> 
     						        </table>
             							</td>
             						</tr>
             						<tr>
             							<td>
             								<table id='date' cellpadding='0' cellspacing='0' align='center' bgcolor='#bb9d32' style='padding: 4px 10px 4px 10px !important;'>
             									<td width='570' align='left' bgcolor='#bb9d32' style='color: #ffffff; font-size: 18px;'>
             										<span> $today </span>
             									</td>    
             						            <td width='570' align='right' bgcolor='#bb9d32'>
             						            	<a href='http://pr0jects.hol.es/' style='color: #ffffff !important; font-size: 14px;'>GrandEscape.com</a>
             						            </td> 
             								</table>
             							</td>
             						</tr>
             						<tr>
             							<td>
             								<table id='title' cellpadding='10' cellspacing='0' align='center' bgcolor='ffffff'>
             									<td width='600' align='left' bgcolor='ffffff' style='padding-top: 30px !important; text-align: center; font-size: 32px; font-weight: bold; border-bottom: 4px solid #000000;'><span>Новый запрос с сайта Grand</span></td>
             								</table>
             							</td>
             						</tr>
             					</table>
             					<table id='mail-main' cellpadding='0' cellspacing='15' bgcolor='ffffff' width='600' align='center' bgcolor='ffffff'>  
             						<tr>  
             						    <td>  
             						        <table id='content' cellpadding='0' cellspacing='10' align='center'>  
             						            <tr>  
             						                <td width='170' valign='middle'>  
             						                    Имя:
             						                </td>  
             						                <td width='15'></td>  
             						                <td width='375' valign='middle' colspan='3'>
             						                	$name
             						                </td>  
             						            </tr>  
             						            <tr>  
             						                <td width='170' valign='middle'>  
             						                    Телефон:
             						                </td>  
             						                <td width='15'></td>  
             						                <td width='375' valign='middle' colspan='3'>
             						                	$phone
             						                </td>  
             						            </tr> 
             						            <tr>  
             						                <td width='170' valign='middle'>  
             						                    Email
             						                </td>  
             						                <td width='15'></td>  
             						                <td width='375' valign='middle' colspan='3'>
             						                	$email
             						                </td>  
             						            </tr> 
             						            <tr>  
             						                <td width='170' valign='middle'>  
             						                    Сообщение:
             						                </td>  
             						                <td width='15'></td>  
             						                <td width='375' valign='middle' colspan='3'>
             						                	$comment
             						                </td>  
             						            </tr> 
             						        </table>
             						        <hr />  
             						    </td>
             						</tr>
             					</table>
             					<table id='mail-footer' cellpadding='20' cellspacing='0' width='600' align='center' bgcolor='#303030'> 
             						<tr>
             							<td>
             								  
             							</td>
             						</tr>
             					</table>
             				</td>
             			</tr>
             		</table>
             	</div>
             ";


  $headers = "MIME-Version: 1.0" . "\r\n"; 
  $headers .= "Content-type:text/html; charset=utf-8" . "\r\n"; 
  $headers .= "From: <$emailFrom>" . "\r\n";
  mail($emailTo, $emailSubject, $message, $headers);

  $data['success'] = true;
  echo json_encode($data);
}
}