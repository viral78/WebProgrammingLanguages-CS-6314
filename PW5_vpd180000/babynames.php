<?php

$year=$_POST["year"];
$gender=$_POST["gender"];
//$ranking=$_POST["ranking"]

$con = mysqli_connect("localhost","root","root","HW3");

 if($_SERVER["REQUEST_METHOD"]=="POST")
 {
 	if($con)
 	{

 		if ($year == 'all' && $gender != 'both') 
 		{

				$query = "Select * from babynames where gender='" . $gender ."' order by ranking asc;";
 		
 		}
 		else if($year != 'all' && $gender == 'both')
 		{

				$query = "Select * from babynames where year=" . $year . " order by ranking asc;";

 		}
 		else if ($year == 'all' && $gender == 'both')
 		{

 	 			$query = "SELECT * FROM babynames  order by ranking asc";

 		}
 		else{

				$query = "Select * from babynames where gender='" . $gender ."' and year=" . $year . " order by ranking asc;";

 		}
		$result = mysqli_query($con,$query);
 	}else{
		echo "Error! Unable to connect to database.";
		echo "Debugging errno: " . mysqli_connect_errno();
	}

 }


?> 


<!DOCTYPE html>
<html>
<head>
	<title>Baby Names</title>
</head>
<body>
	<form action="babynames.php" method="POST" >
		Year: <select name='year'>
		<option value='all' <?php if($year == 'all'){echo " selected ='selected'";}?>>All Years</option>
  		<option value='2011'<?php if($year == '2011'){echo " selected";}?>>2011</option>
  		<option value='2012'<?php if($year == '2012'){echo " selected";}?>>2012</option>
  		<option value='2013'<?php if($year == '2013'){echo " selected";}?>>2013</option>
  		<option value='2014'<?php if($year == '2014'){echo " selected";}?>>2014</option>
  		<option value='2015'<?php if($year == '2015'){echo " selected";}?>>2015</option>
	</select>
		Gender: <select name ='gender'>
		<option value='both'<?php if($gender == 'both'){echo " selected ='selected'";}?>>Both</option>
  		<option value='f'<?php if($gender == 'f'){echo " selected ='selected'";}?>>Female</option>
  		<option value='m'<?php if($gender == 'm'){echo " selected ='selected'";}?>>Male</option>
	</select>
		<input type="submit" name="Submit">	
	</form>

	<table border="1">
		<tr>
			<td>Name</td>
			<td>Year</td>
			<td>Ranking</td>
			<td>Gender</td>
		</tr>
		<?php
			while($row = mysqli_fetch_array($result)) {
					echo "<tr> <td>". $row['name'] . "</td> 
					 <td>" .$row['year']. "</td>
					 <td>". $row['ranking'] . "</td>
					 <td>".$row['gender'] . "</td>
				  	 </tr>";	
				  }
				

		?>
	
	</table>
</body>
</html>