function solve(args) {
    var protocolSeparator = '://',
        serverSeparator = '/',
        parse = args[0] + '',
        index = 0,
        len = protocolSeparator.length;

    var protocol = '',
        server = '',
        resource = '';


    index = parse.indexOf(protocolSeparator);
    protocol = parse.substr(0, index);

    len = index + len;
    index = parse.indexOf(serverSeparator, len);

    server = parse.substr(len, index - len);
    resource = parse.substr(index);

    console.log('protocol: ' + protocol);
    console.log('server: ' + server);
    console.log('resource: ' + resource);
}

test1 = (['http://telerikacademy.com/Courses/Courses/Details/212']);

solve(test1);