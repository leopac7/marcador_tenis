<?php
//echo "Inicio...";
$host = "localhost";
$user = "root";
$pw = "";
$db = "tenis";

$con = mysqli_connect($host,$user,$pw,$db) or die ("No conecta al servidor local");

mysqli_select_db($con,$db) or die ("No conecta a la base de datos");

if ($con == TRUE) {
   // echo "Conexion al host";
}

else{
   // echo "no conecta";
}

//Recibes las variables por POST

print_r( $_POST );

$set=$_POST['sets'];
$game=$_POST['game'];
$servicio=$_POST['Servicio'];
$p1=$_POST['p1'];
$p2=$_POST['p2'];

if ($p1==0 && $p2==0)
	{
	//echo "Empty";
	}
else 
	{
		//Insert en la bd
		$sql="INSERT INTO tenis_stat (sets,game,service,player1,player2) VALUES ('$set','$game','$servicio','$p1','$p2')";

		$rs = mysqli_query($con, $sql);

		if($rs)
		{
		//echo "Record Inserted";
		}
	}
?>
<script>
    (function(){
        window.history.back();
    })()
</script>