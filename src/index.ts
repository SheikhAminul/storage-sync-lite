/**
 * Retrieves a value from local storage.
 * @param {string} name - The name of the item to retrieve.
 * @returns {*} The value stored in local storage, or undefined if the item does not exist or has expired.
 */
const getLocal = (name: string): any => {
    const [value, expiration] = JSON.parse(localStorage[name] || '[]')
    if (expiration && expiration < Date.now()) deleteLocal(name)
    else return value
}

/**
 * Stores a value in local storage.
 * @param {string} name - The name of the item to store.
 * @param {*} value - The value to store.
 * @param {object} options - Optional configuration object.
 * @param {string | number | Date} options.expiration - The expiration date/time for the item.
 * @param {number} options.timeToLive - The time to live in milliseconds.
 * @returns {*} The stored value.
 */
const setLocal = (name: string, value: any, { expiration, timeToLive }: { expiration?: string | number | Date, timeToLive?: number } = {}): any => {
    if (timeToLive) expiration = Date.now() + timeToLive
    localStorage[name] = JSON.stringify(expiration ? [value, expiration] : [value])
    return value
}

/**
 * Deletes an item from local storage.
 * @param {string} name - The name of the item to delete.
 */
const deleteLocal = (name: string) => {
    localStorage.removeItem(name)
}

/**
 * Updates a value in local storage with the provided changes.
 * @param {string} name - The name of the item to update.
 * @param {object} changes - An object containing the changes to apply to the stored value.
 * @returns {*} The updated value.
 */
const changeLocal = (name: string, changes: { [key: string]: any }): any => {
    const [value, expiration] = JSON.parse(localStorage[name] || '[]')
    if (value) {
        Object.assign(value, changes)
        localStorage[name] = JSON.stringify(expiration ? [value, expiration] : [value])
        return value
    }
}

/**
 * Clears all items from local storage.
 */
const clearLocal = () => {
    localStorage.clear()
}

/**
 * Retrieves a value from session storage.
 * @param {string} name - The name of the item to retrieve.
 * @returns {*} The value stored in session storage, or undefined if the item does not exist or has expired.
 */
const getSession = (name: string) => {
    const [value, expiration] = JSON.parse(sessionStorage[name] || '[]')
    if (expiration && expiration < Date.now()) deleteSession(name)
    else return value
}

/**
 * Stores a value in session storage.
 * @param {string} name - The name of the item to store.
 * @param {*} value - The value to store.
 * @param {object} options - Optional configuration object.
 * @param {string | number | Date} options.expiration - The expiration date/time for the item.
 * @param {number} options.timeToLive - The time to live in milliseconds.
 * @returns {*} The stored value.
 */
const setSession = (name: string, value: any, { expiration, timeToLive }: { expiration?: string | number | Date, timeToLive?: number } = {}) => {
    if (timeToLive) expiration = Date.now() + timeToLive
    sessionStorage[name] = JSON.stringify(expiration ? [value, expiration] : [value])
    return value
}

/**
 * Updates a value in session storage with the provided changes.
 * @param {string} name - The name of the item to update.
 * @param {object} changes - An object containing the changes to apply to the stored value.
 * @returns {*} The updated value.
 */
const changeSession = (name: string, changes: { [key: string]: any }) => {
    const [value, expiration] = JSON.parse(sessionStorage[name] || '[]')
    if (value) {
        Object.assign(value, changes)
        sessionStorage[name] = JSON.stringify(expiration ? [value, expiration] : [value])
        return value
    }
}

/**
 * Deletes an item from session storage.
 * @param {string} name - The name of the item to delete.
 */
const deleteSession = (name: string) => {
    sessionStorage.removeItem(name)
}

/**
 * Clears all items from session storage.
 */
const clearSession = () => {
    sessionStorage.clear()
}

export { getLocal, setLocal, deleteLocal, changeLocal, clearLocal, getSession, setSession, changeSession, deleteSession, clearSession }