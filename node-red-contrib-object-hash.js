const hash = require("object-hash");

module.exports = function (RED) {
	function objectHash(config) {
		RED.nodes.createNode(this, config);
		var node = this;

		this.on('input', function(msg) {
			const { payload, options } = msg
			msg.payload = hash(payload, options || {});
			node.send(msg);
		});
	}

	RED.nodes.registerType("object-hash", objectHash);
}