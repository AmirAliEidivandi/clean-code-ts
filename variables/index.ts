// bad
// function between<T>(a1: T, a2: T, a3: T): boolean {
// 	return a2 <= a1 && a1 <= a3;
// }

// good
function between<T>(value: T, left: T, right: T): boolean {
	return left <= value && value <= right;
}

/////////////////////////////////////////////////////////////////
// If you can’t pronounce it, you can’t discuss it without sounding like an idiot.
// bad
type DtaRcrd102 = {
	genymdhms: Date;
	modymdhms: Date;
	pszqint: number;
};

// good
type Customer = {
	generationTimestamp: Date;
	modificationTimestamp: Date;
	recordId: number;
};

////////////////////////////////////////////////////////////////////////////////////
// Use the same vocabulary for the same type of variable
// bad
// interface User {}
// function getUserInfo(): User;
// function getUserDetails(): User;
// function getUserData(): User;

// good
// function getUser(): User;

////////////////////////////////////////////////////////////////////////////////
// We will read more code than we will ever write. It's important that the code we do write must be readable and searchable. By not naming variables that end up being meaningful for understanding our program, we hurt our readers. Make your names searchable. Tools like ESLint can help identify unnamed constants (also known as magic strings and magic numbers).
// bad
setTimeout(() => {}, 86400000);

// good
const MILLISECONDS_PER_DAY = 24 * 60 * 60 * 1000; // 86400000
setTimeout(() => {}, MILLISECONDS_PER_DAY);

//////////////////////////////////////////////////////////////////////////////////////
interface User {}
declare const users: Map<string, User>;

// bad
for (const keyValue of users) {
	// iterate through users map
}

// good
for (const [id, user] of users) {
	// iterate through users map
}

/////////////////////////////////////////////////////////////////////////////////
// bad
// const u = getUser();
// const s = getSubscription()
// const t = charge(u, s);

// good
// const user = getUser()
// const subscription = getSubscription()
// const transaction = charge(user, subscription)

