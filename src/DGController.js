var
    Game = require('draughts-reader-core').Game,
    Piece = require('draughts-reader-core').Piece,
    DamWeb = require('./converters/DamWeb'),
    PDN = require('./converters/PDN')
;


function DGController() {
    this.converter = null;
    this.titlePattern = null;
    this.currentNumGame = 0;
}


DGController.prototype.initDamWeb = function(position, notation) {
    this.converter = new DamWeb(position, notation);
};


DGController.prototype.initPDN = function(pdnText) {
    this.converter = new PDN(pdnText);
};

DGController.prototype.setCurrentNumGame = function(numGame) {
    this.currentNumGame = numGame;
};

DGController.prototype.setTitlePattern = function(pattern) {
    this.titlePattern = pattern;
};


DGController.prototype.getGameCount = function() {
    return this.converter.getGameCount();
};

DGController.prototype.getTitles = function() {
    return this.converter.getTitles(this.titlePattern);
};

DGController.prototype.getTitle = function() {
    return this.converter.getTitle(this.currentNumGame, this.titlePattern);
};

DGController.prototype.getGame = function() {
    return this.converter.getGame(this.currentNumGame);
};



module.exports = DGController;
