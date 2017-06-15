const singleton = Symbol();
const singletonCode = Symbol()

class Singleton {
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
