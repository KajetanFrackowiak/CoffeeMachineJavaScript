let counter = {
    current: 0,
    inc: function () {
        this.current++;
        return this.current;
    }
};