<!DOCTYPE html>

<?php
	if (!empty($_POST["fullname"]) && !empty($_POST["beverage"])) {
		$price = $_POST["price"];
		$fullname = $_POST["fullname"];
		$beverage = $_POST["beverage"];
		$str = "Hello $fullname, you shall pay $price coins for $beverage!";
		if (isset($_GET["token"])) {
			$str = "Hello $fullname! You will have to pay \$$price for $beverage.";
		}
	}
	if (!empty($_GET["token"])) {
                $token = $_GET["token"];
		if ($token == "princess") {
			$str .= " The phrase that pays is: 'But Our Princess Is In Another Castle'.  Please email mchow@cs.tufts.edu with subject line: 'I believe that I will win!'";
		}
		else {
			$str .= " The phrase that pays is: 'But Our Princess Is In Another Castle'.";
		}
        }
	else {
		if (isset($str)) {
			$str .= " But sorry, no phrase that pays for you.";
		}
	}
?>
<html>
<head>
<title>Hack Me Playground</title>
</head>

<body>
	<div id="theform">
		<form method="post">
			<input type="hidden" name="price" value="100" />
			<p>What is your name (max length of 15 characters)? <input type="text" name="fullname" maxlength="15" /></p>
			<p>What is your favorite beverage?</p>
			<p>
				<input type="radio" name="beverage" value="Water" /> Water<br/>
				<input type="radio" name="beverage" value="Coffee" /> Coffee<br/>
				<input type="radio" name="beverage" value="Tea" /> Tea<br/>
				<input type="radio" name="beverage" value="Soda" /> Soda<br/>
			</p>
			<p><input type="submit" name="submitBtn" value="Go!" /></p>
		</form>
	</div>
	<div id="results">
	<?php
		if (isset($str)) {
			echo "<h2>$str</h2>";
		}
	?>
	</div>
</body>
</html>
