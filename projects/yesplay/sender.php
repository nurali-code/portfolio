<?
// скрипт отправляет к API запрос на отправку sms

$apiKey = '9e7ec1f4-a97b-4fa2-a75a-a98bb36aa931';
$apiSecret = 'N8M7u/NO5ecU+QAVsU9ZcjSSigC2EI5B';

$phone = (int)$_POST["phone"];
$partner = (string)$_POST["partner"];

if (strlen($phone)) {
	// $msg = file_get_contents ("./msg_template.txt");
	$msg = 'Hello from YesPlay! Click on the following link to Sign Up & claim your bonus: ' .$partner;
	$accountApiCredentials = $apiKey . ':' .$apiSecret;

	$base64Credentials = base64_encode($accountApiCredentials);
	$authHeader = 'Authorization: Basic ' . $base64Credentials;

	$authEndpoint = 'https://rest.mymobileapi.com/Authentication';

	$authOptions = array(
	    'http' => array(
	        'header'  => $authHeader,
	        'method'  => 'GET',
	        'ignore_errors' => true
	    )
	);
	$authContext  = stream_context_create($authOptions);

	$result = file_get_contents($authEndpoint, false, $authContext);

	$authResult = json_decode($result);

	$status_line = $http_response_header[0];
	preg_match('{HTTP\/\S*\s(\d{3})}', $status_line, $match);
	$status = $match[1];

	if ($status === '200') {
	    $authToken = $authResult->{'token'};

	    //var_dump($authResult);
	}
	else {
		echo "err 1";
	    var_dump($authResult);
	}

	$sendUrl = 'https://rest.mymobileapi.com/bulkmessages';

	$authHeader = 'Authorization: Bearer ' . $authToken;

	$sendData = '{ "messages" : [ { "content" : "'.$msg.'", "destination" : "'.$phone.'" } ] }';

	$options = array(
	    'http' => array(
	        'header'  => array("Content-Type: application/json", $authHeader),
	        'method'  => 'POST',
	        'content' => $sendData,
	        'ignore_errors' => true
	    )
	);
	$context  = stream_context_create($options);

	$sendResult = file_get_contents($sendUrl, false, $context);

	$status_line = $http_response_header[0];
	preg_match('{HTTP\/\S*\s(\d{3})}', $status_line, $match);
	$status = $match[1];

	if ($status === '200') {
	    var_dump($sendResult);
		echo "1";
	}
	else {
		echo "err 2";
	    var_dump($sendResult);
	}
}

?>