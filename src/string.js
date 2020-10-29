const functions = {
    strLength(string) {
        return string.length;
    },
    strIndexOf(word, string) {
        return string.indexOf(word);
    },
    strSlice(string, start, end) {
        return string.slice(start, end);
    },
    strReplace(string, oldWord, newWorld) {
        return string.replace(oldWord, newWorld);
    },
    strUpper(string) {
        return string.toUpperCase();
    },
    strLower(string) {
        return string.toLowerCase();
    },
    strAdd(firstString, secondString) {
        return firstString + " " + secondString;
    }
}

module.exports = functions;