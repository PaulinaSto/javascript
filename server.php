<?php

	// $link = mysqli_connect('localhost', 'root', '', 'application');
	// $query = "SELECT * FROM user WHERE 1;";

	// $result = mysqli_query($link, $query);

	// while ($row = mysqli_fetch_assoc($result) ) {
	// 	$data[] = $row;
	// }


	$data = array(
		array(
			'name'  => 'Michael',
			'email' => 'michael@zenbox.de'
		),
		array(
			'name'  => 'Paul',
			'email' => 'paul@zenbox.de'
		),
		array(
			'name'  => 'Klara',
			'email' => 'klara@zenbox.de'
		)
	);

	echo json_encode($data);