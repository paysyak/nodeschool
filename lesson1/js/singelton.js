const singleton = Symbol();
const singletonCode = Symbol()

class Singleton {

	/**
	 * Close constructor
	 */
	constructor() {
		throw new Error 'It is static class, you should use getter instance';
	}

	/**
	 * @returns {Singleton instance}
	 */
	static get instance() {
		if(!this[singleton]) {
			this[singleton] = new Singleton(singletonCode);
		}

		return this[singleton];
	}
}

export default Singleton