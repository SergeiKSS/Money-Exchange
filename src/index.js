// PLEASE DON'T change function name
module.exports = function makeExchange(currency) {
let result = {};
	let count = 0;
	let num = currency;
	if (currency > 10000) {
		return result.error = "You are rich, my friend! We don't have so much coins for exchange";
	}
	if (currency <= 0) {
		return result;
	}

	while ((num - 50) >= 0) {
		count++;
		num = num - 50;
	}
	if (count) {
		result.H = count;
	}
	count = 0;

	while ((num - 25) >= 0) {
		count++;
		num = num - 25;
	}
	if (count) {
		result.Q = count;
	}
	count = 0;	

	while ((num - 10) >= 0) {
		count++;
		num = num - 10;
	}
	if (count) {
		result.D = count;
	}
	count = 0;

	while ((num - 5) >= 0) {
		count++;
		num = num - 5;
	}
	if (count) {
		result.N = count;
	}
	count = 0;

	while ((num - 1) >= 0) {
		count++;
		num = num - 1;
	}
	if (count) {
		result.P = count;
	}
	count = 0;
	return result;
}