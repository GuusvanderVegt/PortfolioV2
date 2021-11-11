export const getItemFromLocalStorage = (key) => {
    if (key) {
        const item = localStorage.getItem(key);

        return item ? item : false;
    }

    return false;
};

export const setItemInLocalStorage = (key, item) => {
    if (key && item) {
        localStorage.setItem(key, item);
    }

    return false;
};
