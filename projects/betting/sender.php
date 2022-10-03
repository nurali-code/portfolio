<?php

/**
 * YesPlay http://wilicakq.beget.tech/betting/
 */
class YpClass
{
	function __construct(){
		// code...
	}
	protected $api_host = "https://yesplay.bet/";
	protected $operationId = "1000000";
	protected $siteId = "1003000";
	public function CheckUsernameStatus($username){
		$post_data = array(
			"username"	=>	$username
		);
		$url = $this->api_host."api/1.2/operations/".$this->operationId."/sites/".$this->siteId."/sign-up/check-username-status";
		$r = $this->curl($url."?".http_build_query($post_data));
		$d = json_decode($r, true);
		//var_dump($d);
		return $d; 
	}
	public function SingUP($username, $password, $cookie = array()){
		$post_data = array(
			"phone"	=>	$username,
			"password"	=>	$password, 
			"confirmPassword"	=>	$password,
			"googleAnalyticsData"	=> array(
				"firstUtmVisit"	=>		time(),
				"firstUtmSource" =>		$cookie["utm_source"],
				"firstUtmMedium" =>		$cookie["utm_medium"],
				"firstUtmCampaign" =>	$cookie["utm_campaign"],
				"lastUtmVisit"	=>		time(),
				"lastUtmSource" =>		$cookie["utm_source"],
				"lastUtmMedium" =>		$cookie["utm_medium"],
				"lastUtmCampaign" =>	$cookie["utm_campaign"]
			),
			"source"	=>	$cookie["source"]
		);
		$post_data = json_encode($post_data);
		$url = $this->api_host."api/1.3/operations/".$this->operationId."/sites/".$this->siteId."/sign-up";
		//var_dump($url);
		$r = $this->curl($url, $post_data);
		//var_dump($post_data);
		$d = json_decode($r,	true);
		return $d;
	}
	public function CreateAccount($username, $password, $cookie = array()){
		//    	/api/1.2/operations/{operationId}/sites/{siteId}/sign-up/check-username-status
		
		//		/api/1.3/operations/{operationId}/sites/{siteId}/sign-up 
		//		(это уже сам запрос на регу, нужно отправить 3 обязательных поля в теле запроса phone, password, confirmPassword)
		
		//		/api/1.2/operations/{operationId}/sites/{siteId}/oauth2/token (новый, нужно шифровать с помошью AES256 алгоритма)
		//		В обоих случаях передаем username(номер телефона в нашем случае), password, grant_type = "password"
		$c_s = $this->CheckUsernameStatus($username);
		if(isset($c_s["isRegistered"]) && $c_s["isRegistered"] == false){
			$res = $this->SingUP($username, $password, $cookie);
			if(isset($res["message"])) {
				return $res["message"];
			}else if($res == null){
				return "true";
			}else{
				return json_encode($res);
			}
		}else{
			return "Account already registered";
		}
		
	}
	private function curl($url, $data = false){
		if( $curl = curl_init() ) {
		    curl_setopt($curl, CURLOPT_URL, $url);
		    curl_setopt($curl, CURLOPT_RETURNTRANSFER, true);
		    if($data !== false){
		    	curl_setopt($curl, CURLOPT_POST, true);
				curl_setopt($curl, CURLOPT_POSTFIELDS,$data);
		    }
		   	curl_setopt($curl, CURLOPT_HTTPHEADER, array('Content-Type: application/json')); 
		   	curl_setopt($curl, CURLOPT_COOKIEFILE, 'cookiefile.txt'); curl_setopt($curl, CURLOPT_COOKIEJAR, 'cookiefile.txt');
		    $out = curl_exec($curl);
		    curl_close($curl);
		    return $out;
	  	}
	}
	public function EncriptAes256($str){
		$method = 'aes-256-cbc';
		$password = 'c02eb5a7226845b79a672c7a2bbdc309';
		$iv = "c02eb5a7226845b7";
		$encrypted = base64_encode(openssl_encrypt($str, $method, $password, OPENSSL_RAW_DATA, $iv));
		return $encrypted;
	}
}
$phone = (int)$_POST["phone"];
$password = (string)$_POST["password"];
$YC = new YpClass();

if(!empty($phone) && !empty($password)){
	$en_pass = $YC->EncriptAes256($password);
	$res = $YC->CreateAccount("+".$phone, $en_pass, $_COOKIE);
	echo $res;
} 
?>