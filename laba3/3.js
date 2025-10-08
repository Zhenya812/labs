function ipToInt(ip= '127.0.0.1') {
    return ip.split('.').reduce((acc ,byte , index) => acc + (byte << 8*(3 - index)), 0);
    map(Number)
}
console.dir(ipToInt('127.0.0.1'));
console.dir(ipToInt('10.0.0.1 '));
console.dir(ipToInt('192.168.1.10'));
console.dir(ipToInt('165.225.133.150'));
console.dir(ipToInt('0.0.0.0'));
console.dir(ipToInt('8.8.8.8').toString(16));