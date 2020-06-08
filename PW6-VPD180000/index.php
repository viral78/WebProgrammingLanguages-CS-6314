<?php

#$servername="localhost";
#$username="root";
#$password="root";
#$database="PW6";
$connection= mysqli_connect("localhost","root","root","PW6",3307);

if(!$connection)
{
	die("Connection failed: ".mysqli_connect_error());
}
else
{
	$sql="SELECT * FROM books";
	$result= mysqli_query($connection, $sql);
	$array=array();
	if(mysqli_num_rows($result)>0)
	{
		while($row=mysqli_fetch_assoc($result))
		{
			$array[]=$row;
		}
	
		echo json_encode($array);
	}
}

mysqli_close($connection);

?>