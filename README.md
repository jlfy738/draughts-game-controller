draughts-game-controller
===============

Javascript interface between text notation and Game, for use in the browser.

## Install

```
npm install
```

## Build

```
npm run build
```

This produces two files in `dist/`:

- `draughts-game-controller.js` — readable bundle
- `draughts-game-controller.min.js` — minified bundle

```html
<script src="dist/draughts-game-controller.min.js"></script>
<script>
    var dgc = new DGController();
    dgc.initPDN(pdnText);
    dgc.setCurrentNumGame(1);
    var game = dgc.getGame();
</script>
```

## Test

Tests run with Node's built-in test runner:

```
npm test
```
