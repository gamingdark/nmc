# nmc

Preliminary work on new idle game.
It will use Phaser engine and run mostly on JavaScript (at first, server side might be added later)

By the way I plan to use ECMAScript 6 (ES2015), almost everything is supported by major browsers now, and it should catch up while this is in dev :)



index.html structure:

<!doctype html>
<html>
    <head>
        <meta charset="UTF-8" />
        <title>hello phaser!</title>
		<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.1.1/jquery.min.js"></script>
        <!--script src="phaser/v2/build/phaser.min.js"></script-->
        <script src="nmc/js/external/lazyload.js"></script>
		<link rel="stylesheet" type="text/css" href="nmc/css/styles.css" />
        <script src="nmc/js/Init.js"></script>
    </head>
    <body>
		<img id="loading" src="nmc/img/loading.gif" alt="Loading..." class="loading" />
    </body>
</html>