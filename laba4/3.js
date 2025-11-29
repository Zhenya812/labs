function ages(persons) {
    var result = {};

    for (const key in persons) {
        var born = persons[key].born;
        var died = persons[key].died;
        result[key] = died - born;
    }

    return result;
}

const persons = {
Mozart : { born: 1756, died: 1791 },
Bethowen: { born: 1770, died: 1827 },
Bach: { born: 1685, died: 1750 },
Wagner: { born: 1813, died: 1883 },
};

console.log(ages(persons));
