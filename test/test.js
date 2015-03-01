var DGController = require('./DGController');

var dgc = new DGController();
dgc.initDamWeb("WMWP263132373839404142BP071012172223242935", "3933354426211726322823434238433237082646080229380205");
dgc.setCurrentNumGame(1);
//dgc.setTitlePattern("");


var game = dgc.getGame();

console.log("getGameCount = " + dgc.getGameCount());
console.log("getGame = " + game);

game.debugFull();


