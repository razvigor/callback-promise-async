// Callback function

setTimeout(function () {
	console.log('One');
	setTimeout(function () {
		console.log('Two');
		setTimeout(function () {
			console.log('Three');
		}, 1000);
	}, 1000);
}, 1000);

console.log("I'm not in callback ");

//-----------------------------------

// function download(url, success, failure) {
// 	setTimeout(() => {
// 		console.log(`Downloading the picture from ${url} ...`);
// 		!url ? failure(url) : success(url);
// 	}, 1000);
// }

// download(
// 	null,
// 	(url) => console.log(`Processing the picture ${url}`),
// 	(url) => console.log(`The '${url}' is not valid`)
// );

// // Ili
// function getUsers(callback) {
// 	setTimeout(() => {
// 		callback([
// 			{ username: 'john', email: 'john@test.com' },
// 			{ username: 'jane', email: 'jane@test.com' },
// 		]);
// 	}, 1000);
// }

// function findUser(username, callback) {
// 	getUsers((users) => {
// 		const user = users.find((user) => user.username === username);
// 		callback(user);
// 	});
// }

// findUser('john', console.log);

// Promises

// function promGetUsers() {
// 	return new Promise((resolve, reject) => {
// 		setTimeout(() => {
// 			resolve([
// 				{ username: 'john', email: 'john@test.com' },
// 				{ username: 'jane', email: 'jane@test.com' },
// 			]);
// 		}, 1000);
// 	});
// }

// function onFulfilled(users) {
// 	console.log(users);
// }

// const promise = promGetUsers();
// promise.then(onFulfilled);

//Promise Chaining

// let p = new Promise((resolve, reject) => {
// 	setTimeout(() => {
// 		resolve(10);
// 	}, 3 * 100);
// });

// p.then((result) => {
// 	console.log(result);
// 	return result * 2;
// })
// 	.then((result) => {
// 		console.log(result);
// 		return result * 3;
// 	})
// 	.then((result) => {
// 		console.log(result);
// 		return result * 4;
// 	});

// Promise All

// const p1 = new Promise((resolve, reject) => {
// 	setTimeout(() => {
// 		console.log('The first promise has resolved');
// 		resolve(10);
// 	}, 1 * 1000);
// });
// const p2 = new Promise((resolve, reject) => {
// 	setTimeout(() => {
// 		console.log('The second promise has resolved');
// 		resolve(20);
// 	}, 2 * 1000);
// });
// const p3 = new Promise((resolve, reject) => {
// 	setTimeout(() => {
// 		console.log('The third promise has resolved');
// 		resolve(30);
// 	}, 3 * 1000);
// });

// Promise.all([p1, p2, p3]).then((results) => {
// 	const total = results.reduce((p, c) => p + c);

// 	console.log(`Results: ${results}`);
// 	console.log(`Total: ${total}`);
// });

//Promise race  return valu what is first resolved

// const p1 = new Promise((resolve, reject) => {
// 	setTimeout(() => {
// 		console.log('The first promise has resolved');
// 		resolve(10);
// 	}, 1 * 1000);
// });

// const p2 = new Promise((resolve, reject) => {
// 	setTimeout(() => {
// 		console.log('The second promise has resolved');
// 		resolve(20);
// 	}, 2 * 1000);
// });

// Promise.race([p1, p2])
// 	.then((value) => console.log(`Resolved: ${value}`))
// 	.catch((reason) => console.log(`Rejected: ${reason}`));

// Promise Any

// const p1 = new Promise((resolve, reject) => {
// 	setTimeout(() => {
// 		console.log('Promise 1 fulfilled');
// 		resolve(1);
// 	}, 2000);
// });

// const p2 = new Promise((resolve, reject) => {
// 	setTimeout(() => {
// 		console.log('Promise 2 fulfilled');
// 		reject('Something went wrong');
// 	}, 1000);
// });

// const p = Promise.any([p1, p2]);
// p.then((value) => {
// 	console.log('Returned Promise');
// 	console.log(value);
// });

// Promise allSeteled

// const p1 = new Promise((resolve, reject) => {
// 	setTimeout(() => {
// 		console.log('The first promise has resolved');
// 		resolve(10);
// 	}, 1 * 1000);
// });

// const p2 = new Promise((resolve, reject) => {
// 	setTimeout(() => {
// 		console.log('The second promise has rejected');
// 		reject('Something went wrong');
// 	}, 2 * 1000);
// });

// Promise.allSettled([p1, p2]).then((result) => {
// 	console.log(result);
// });

// Promise Error

// Outside of promise

// function getUserById(id) {
// 	if (typeof id !== 'number' || id <= 0) {
// 		throw new Error('Invalid id argument');
// 	}

// 	return new Promise((resolve, reject) => {
// 		resolve({
// 			id: id,
// 			username: 'admin',
// 		});
// 	});
// }

// getUserById('a')
// 	.then((user) => console.log(user.username))
// 	.catch((err) => console.log(err));

// try {
// 	getUserById('a')
// 		.then((user) => console.log(user.username))
// 		.catch((err) => console.log(`Caught by .catch ${err}`));
// } catch (error) {
// 	console.log(`Caught by try/catch ${error}`);
// }

// Error inside of promise

// let authorized = false;

// function getUserById(id) {
// 	return new Promise((resolve, reject) => {
// 		if (!authorized) {
// 			throw new Error('Unauthorized access to the user data');
// 		}

// 		resolve({
// 			id: id,
// 			username: 'admin',
// 		});
// 	});
// }

// try {
// 	getUserById(10)
// 		.then((user) => console.log(user.username))
// 		.catch((err) => console.log(`Caught by .catch ${err}`));
// } catch (error) {
// 	console.log(`Caught by try/catch ${error}`);
// }
//Error with reject inside of

// let authorized = false;

// function getUserById(id) {
// 	return new Promise((resolve, reject) => {
// 		if (!authorized) {
// 			reject('Unauthorized access to the user data');
// 		}

// 		resolve({
// 			id: id,
// 			username: 'admin',
// 		});
// 	});
// }

// try {
// 	getUserById(10)
// 		.then((user) => console.log(user.username))
// 		.catch((err) => console.log(`Caught by .catch ${err}`));
// } catch (error) {
// 	console.log(`Caught by try/catch ${error}`);
// }

//Without catch method

// let authorized = false;

// function getUserById(id) {
// 	return new Promise((resolve, reject) => {
// 		if (!authorized) {
// 			reject('Unauthorized access to the user data');
// 		}
// 		resolve({
// 			id: id,
// 			username: 'admin',
// 		});
// 	});
// }

// try {
// 	getUserById(10).then((user) => console.log(user.username));
// } catch (error) {
// 	console.log(`Caught by try/catch ${error}`);
// }

// async await

// function getUser(userId) {
// 	return new Promise((resolve, reject) => {
// 		console.log('Get user from the database.');
// 		setTimeout(() => {
// 			resolve({
// 				userId: userId,
// 				username: 'john',
// 			});
// 		}, 1000);
// 	});
// }

// function getServices(user) {
// 	return new Promise((resolve, reject) => {
// 		console.log(`Get services of  ${user.username} from the API.`);
// 		setTimeout(() => {
// 			resolve(['Email', 'VPN', 'CDN']);
// 		}, 2 * 1000);
// 	});
// }

// function getServiceCost(services) {
// 	return new Promise((resolve, reject) => {
// 		console.log(`Calculate service costs of ${services}.`);
// 		setTimeout(() => {
// 			resolve(services.length * 100);
// 		}, 3 * 1000);
// 	});
// }

// async function showServiceCost() {
// 	let user = await getUser(100);
// 	let services = await getServices(user);
// 	let cost = await getServiceCost(services);
// 	console.log(`The service cost is ${cost}`);
// }

// showServiceCost();
