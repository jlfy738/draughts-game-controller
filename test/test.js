const test = require('node:test');
const assert = require('node:assert/strict');

const DGController = require('../src/DGController');

test('DamWeb: parses position and move list into a Game', () => {
    const dgc = new DGController();
    dgc.initDamWeb(
        "WMWP263132373839404142BP071012172223242935",
        "3933354426211726322823434238433237082646080229380205"
    );
    dgc.setCurrentNumGame(1);

    assert.equal(dgc.getGameCount(), 1);

    const game = dgc.getGame();
    assert.ok(game.getNotation().length > 0);
});

test('PDN: parses title, FEN position and move list into a Game', () => {
    const pdn = [
        '[Event "Essai"]',
        '[Site "?"]',
        '[Date "2015.01.02"]',
        '[Round "?"]',
        '[White "Jean"]',
        '[Black "Jacques"]',
        '[Result "*"]',
        '[SetUp "1"]',
        '[FEN "B:W42,48:B7,12,13,14,21,28,31"]',
        '',
        '1. ... 28-33 2. 42-38 33x42 3. 48x10 7-12 4. 10-4 12-17 5. 4-15 17-22 6. 15-4',
        '22-28 7. 4-15 28-32 8. 15-10 32-38 *',
    ].join('\n');

    const dgc = new DGController();
    dgc.initPDN(pdn);
    dgc.setCurrentNumGame(1);

    assert.equal(dgc.getGameCount(), 1);

    const game = dgc.getGame();
    assert.ok(game.getNotation().length > 0);
});

test('DGController: getGame returns an empty Game when no current game is set', () => {
    const dgc = new DGController();
    dgc.initPDN('[Event "Essai"]');

    const game = dgc.getGame();
    assert.equal(game.getNotation().length, 0);
});
