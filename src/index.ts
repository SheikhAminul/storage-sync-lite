// Local
function getLocal(name: string) {
    return JSON.parse(localStorage[name] || '[]')[0]
}

function setLocal(name: string, value: any) {
    localStorage[name] = JSON.stringify([value])
    return value
}

function deleteLocal(name: string) {
    localStorage.removeItem(name)
}

function changeLocal(name: string, value: any) {
    localStorage[name] = JSON.stringify([Object.assign(getLocal(name) || {}, value)])
}

function clearLocal() {
    localStorage.clear()
}

// Session
function getSession(name: string) {
    return JSON.parse(sessionStorage[name] || '[]')[0]
}

function setSession(name: string, value: any) {
    sessionStorage[name] = JSON.stringify([value])
}

function changeSession(name: string, value: any) {
    sessionStorage[name] = JSON.stringify([Object.assign(getSession(name) || {}, value)])
}

function deleteSession(name: string) {
    sessionStorage.removeItem(name)
}

function clearSession() {
    sessionStorage.clear()
}

export { getLocal, setLocal, deleteLocal, changeLocal, clearLocal, getSession, setSession, changeSession, deleteSession, clearSession }