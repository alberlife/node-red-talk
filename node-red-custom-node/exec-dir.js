const readdirSync = require('fs').readdirSync;

module.exports = function (RED) {
	function ExecDirNode(config) {
		RED.nodes.createNode(this, config);
		this.path = config.path;
		var node = this;
		node.on('input', function (msg) {
			const read = readdirSync(node.path);
			msg.payload = read;
			node.send(msg);
		});
	}
	RED.nodes.registerType("exec-dir", ExecDirNode);
};