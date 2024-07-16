const namesOfWebDevils = [
    [
        '\n\x1b[30m\x1b[47m Chrissi 👀 Claire \x1b[0m\n',
        '\n\x1b[31m\x1b[44m Claire 👀 Danny \x1b[0m\n',
        '\n\x1b[32m\x1b[43m Danny 👀 Ines \x1b[0m\n',
        '\n\x1b[33m\x1b[45m Ines 👀 Jerry \x1b[0m\n',
        '\n\x1b[34m\x1b[40m Jeery 👀 Lara \x1b[0m\n',
        '\n\x1b[35m\x1b[47m Lara 👀 Marie \x1b[0m\n',
        '\n\x1b[36m\x1b[41m Marie 👀 Mehmet \x1b[0m\n',
        '\n\x1b[37m\x1b[40m Mehmet 👀 Minas \x1b[0m\n',
        '\n\x1b[30m\x1b[101m Minas 👀 Ming \x1b[0m\n',
        '\n\x1b[31m\x1b[46m Ming 👀 Naheeda \x1b[0m\n',
        '\n\x1b[32m\x1b[45m Naheeda 👀 Natalia \x1b[0m\n',
        '\n\x1b[33m\x1b[44m Natalia 👀 Nell \x1b[0m\n',
        '\n\x1b[34m\x1b[103m Nell 👀 Sab \x1b[0m\n',
        '\n\x1b[35m\x1b[42m Sab 👀 Sabine \x1b[0m\n',
        '\n\x1b[36m\x1b[41m Sabine 👀 Sebastian \x1b[0m\n',
        '\n\x1b[37m\x1b[40m Sebastian 👀 Simia \x1b[0m\n',
        '\n\x1b[34m\x1b[45m Simia 👀 Wael \x1b[0m\n',
        '\n\x1b[31m\x1b[47m Wael 👀 Xianghu \x1b[0m\n',
        '\n\x1b[32m\x1b[104m Xiangyu 👀 Zahra \x1b[0m\n',
        '\n\x1b[37m\x1b[43m Zahra 👀 Zedan \x1b[0m\n',
        '\n\x1b[36m\x1b[105m Zedan 👀 Chrissi \x1b[0m\n',
    ]
];

const index = process.argv[2];

if (index >= 0 && index < namesOfWebDevils[0].length) {
    console.log(namesOfWebDevils[0][index]);
} else if (index >= 20) {
    namesOfWebDevils[0].forEach(name => console.log(name));
    console.log('\n\x1b[31m\x1b[107m\x1b[1m\x1b[3m  Zu spät, die Klasse ist aufgeflogen!  \x1b[0m\n');
}