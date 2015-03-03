var DGController = require('../src/DGController');


function testDamWeb(){
    var dgc = new DGController();
    dgc.initDamWeb("WMWP263132373839404142BP071012172223242935", "3933354426211726322823434238433237082646080229380205");
    dgc.setCurrentNumGame(1);
    //dgc.setTitlePattern("");

    var game = dgc.getGame();

    console.log("-------------------------------");
    console.log("DamWeb Test");
    console.log("-------------------------------");
    console.log("getGameCount = " + dgc.getGameCount());
    console.log("getGame = " + game);

    game.debugFull();
}


function testPDN(){
    var pdn = "[Event \"Essai\"]";
    pdn += "\n[Site \"?\"]";
    pdn += "\n[Date \"2015.01.02\"]";
    pdn += "\n[Round \"?\"]";
    pdn += "\n[White \"Jean\"]";
    pdn += "\n[Black \"Jacques\"]";
    pdn += "\n[Result \"*\"]";
    pdn += "\n[SetUp \"1\"]";
    pdn += "\n[FEN \"B:W42,48:B7,12,13,14,21,28,31\"]";
    pdn += "\n"
    pdn += "\n1. ... 28-33 2. 42-38 33x42 3. 48x10 7-12 4. 10-4 12-17 5. 4-15 17-22 6. 15-4";
    pdn += "\n22-28 7. 4-15 28-32 8. 15-10 32-38 *";

    var dgc = new DGController();
    dgc.initPDN(pdn);
    dgc.setCurrentNumGame(1);

    var game = dgc.getGame();

    console.log("-------------------------------");
    console.log("PDN Test");
    console.log("-------------------------------");
    console.log("getGameCount = " + dgc.getGameCount());
    console.log("getGame = " + game);

    game.debugFull();
}

testDamWeb();

testPDN();
