window.blockly = window.blockly || {};
window.blockly.js = window.blockly.js || {};
window.blockly.js.blockly = window.blockly.js.blockly || {};
window.blockly.js.blockly.Imagem = window.blockly.js.blockly.Imagem || {};

/**
 * Imagem
 */
window.blockly.js.blockly.Imagem.ObterImagem = function() {
 var item, enderecoImagem;
  this.cronapi.cordova.camera.getPicture(function(sender_item) {
      item = sender_item;
  }.bind(this), function(sender_item) {
      item = sender_item;
  }.bind(this), '0', '0', '0', 'false');
}
