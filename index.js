const success = function(item) {
	item.enhancement++;
	item.name = `[+${item.enhancement}] ${item.name}`;
	return item;
};

const enhancer = {
	success,
};

module.exports = {
	enhancer,
};
