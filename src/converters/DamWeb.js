var
    DamWebParser = require('draughts-damweb-parser').DamWebParser,
    Game = require('draughts-reader-core').Game,
    Piece = require('draughts-reader-core').Piece
;

function DamWeb(position, notation) {
    this.position = position;
    this.notation = notation;
}

DamWeb.prototype.getGameCount = function(){
    return 1;
};

DamWeb.prototype.getTitle = function(numGame, pattern){
    return "";
};

DamWeb.prototype.getTitles = function(pattern){
    return [{"num":1, "title":""}];
};

DamWeb.prototype.getGame = function(numGame){
    var dw = new DamWebParser(this.position, this.notation);
    dw.parse();

    var game = new Game();
    
    // Position
    game.board.setPosition(Piece.PAWN_WHITE, dw.getWPList());
    game.board.setPosition(Piece.DAME_WHITE, dw.getWKList());
    game.board.setPosition(Piece.PAWN_BLACK, dw.getBPList());
    game.board.setPosition(Piece.DAME_BLACK, dw.getBKList());

    // Notation
    var moves = dw.getMoveList();
    for (var i = 0; i < moves.size; i++) {
        var iStart = moves[i][0];
        var iEnd = moves[i][1];

        if (iStart != null && iEnd != null) {
            game.addMove(iStart, iEnd);
        } else {
            break;
        }
    }

    return game;
};


module.exports = DamWeb;
