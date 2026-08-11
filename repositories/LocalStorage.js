class LocalStorage {
    saveItem(key, object) {
        localStorage.setItem(key, item);
    }

    retriveItem(key) {
        localStorage.getItem(key);
    }
}

export default LocalStorage;