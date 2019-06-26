window.blockly = window.blockly || {};
window.blockly.js = window.blockly.js || {};
window.blockly.js.Imagem = window.blockly.js.Imagem || {};

/**
 * Imagem
 */
window.blockly.js.Imagem.ObterImagem = function() {
 var item;
  this.cronapi.cordova.camera.getPicture(function(sender_item) {
      item = sender_item;
    this.cronapi.cordova.file.readFile('IMG001', function(sender_item) {
        item = sender_item;
      this.cronapi.screen.notify('success','endereccoImagem');
    }.bind(this), function(sender_item) {
        item = sender_item;
    }.bind(this), 'ARRAYBUFFER');
  }.bind(this), function(sender_item) {
      item = sender_item;
  }.bind(this), '0', '0', '0', 'false');
}
