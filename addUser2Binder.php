<?php
    
    $data = array("users" =>array("0"=>(array("user" => array("unique_id" => $_REQUEST['user_id'])))));
    $data_string = json_encode($data);
    $uri = "https://api.moxtra.com/".$_REQUEST['binderID']."/addteamuser?access_token=".$_REQUEST['system_access_token'];
    $ch = curl_init($uri);
    curl_setopt($ch, CURLOPT_CUSTOMREQUEST, "POST");
    curl_setopt($ch, CURLOPT_POSTFIELDS, $data_string);
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
    curl_setopt($ch, CURLOPT_HTTPHEADER, array(
                                               'Content-Type: application/json',
                                               'Content-Length: ' . strlen($data_string))
                );
    
    $result = curl_exec($ch);
    //    print_r(json_decode($result, true));
?>