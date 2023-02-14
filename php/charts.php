<!-- <?php
  $username = "root";              // use your username  
  $password = "Password123";      // use your password
  $host = "localhost";           // use your host name or address 
  $database="finance_db";        // use your database name

// connect to database
$server = mysql_connect($host, $username, $password);
$connection = mysql_select_db($database, $server);

// replace below with proper selector
$myquery = "
  SELECT * FROM  `data`
  ";
$query = mysql_query($myquery);

if ( ! $query ) {
    echo mysql_error();
    die;
  }
?>

<?php
header('Content-Type: application/json');

require_once('db.php');

$sqlQuery = "SELECT student_id,student_name,marks FROM tbl_marks ORDER BY student_id";

$result = mysqli_query($conn,$sqlQuery);

$data = array();
foreach ($result as $row) {
	$data[] = $row;
}

mysqli_close($conn);

echo json_encode($data);
?> -->