const users = [{
        "id": "5eaecda0cba960e77fc9f205",
        "age": 29,
        "name": "Lesa Clark",
        "gender": "female",
        "company": "VINCH",
        "email": "lesaclark@trollery.com",
        "phone": "+1 (945) 413-2529",
        "latitude": -15.421613,
        "longitude": 101.274002
    },
    {
        "id": "5eaecda01070c34da892e9e5",
        "age": 34,
        "name": "Marsha Hansen",
        "gender": "female",
        "company": "VINCH",
        "email": "marshahansen@singavera.com",
        "phone": "+1 (909) 508-3857",
        "latitude": -44.617836,
        "longitude": 2.408834
    },
    {
        "id": "5eaecda01865876300aada64",
        "age": 28,
        "name": "Peck Johnson",
        "gender": "male",
        "company": "VINCH",
        "email": "peckjohnson@talkola.com",
        "phone": "+1 (964) 454-3417",
        "latitude": -75.566328,
        "longitude": 33.309041
    },
    {
        "id": "5eaecda0d132e8d506850631",
        "age": 30,
        "name": "Myrna Case",
        "gender": "female",
        "company": "VINCH",
        "email": "myrnacase@vinch.com",
        "phone": "+1 (915) 517-3973",
        "latitude": 20.926118,
        "longitude": 3.366088
    },
    {
        "id": "5eaecda010a868687280ce28",
        "age": 24,
        "name": "Kelli Alston",
        "gender": "female",
        "company": "FURNIGEER",
        "email": "kellialston@applidec.com",
        "phone": "+1 (957) 410-2377",
        "latitude": -50.476537,
        "longitude": -175.994997
    },
    {
        "id": "5eaecda0b40f4682d97117fb",
        "age": 31,
        "name": "Bates Johnston",
        "gender": "male",
        "company": "FURNIGEER",
        "email": "batesjohnston@earwax.com",
        "phone": "+1 (917) 583-3341",
        "latitude": -78.69636,
        "longitude": -0.632594
    },
    {
        "id": "5eaecda099f2a9c328ec3603",
        "age": 25,
        "name": "Mariana Monroe",
        "gender": "female",
        "company": "FURNIGEER",
        "email": "marianamonroe@furnigeer.com",
        "phone": "+1 (975) 514-2722",
        "latitude": 15.230689,
        "longitude": 131.753915
    },
    {
        "id": "5eaecda0fd696b8f0e33a6db",
        "age": 29,
        "name": "Letitia Andrews",
        "gender": "female",
        "company": "ISOLOGICA",
        "email": "letitiaandrews@parcoe.com",
        "phone": "+1 (858) 565-3095",
        "latitude": -86.176034,
        "longitude": -153.088186
    },
    {
        "id": "5eaecda0d01513c7cbbcffa4",
        "age": 37,
        "name": "Dina Buchanan",
        "gender": "female",
        "company": "ISOLOGICA",
        "email": "dinabuchanan@uniworld.com",
        "phone": "+1 (930) 542-2668",
        "latitude": -22.313357,
        "longitude": 149.910409
    },
    {
        "id": "5eaecda0ba6003ab1113ceac",
        "age": 30,
        "name": "Lottie Walters",
        "gender": "female",
        "company": "ISOLOGICA",
        "email": "lottiewalters@isologica.com",
        "phone": "+1 (956) 488-3898",
        "latitude": 23.420905,
        "longitude": -143.389375
    }
]

const posts = [{
        "id": "5eb917e6a1178245d4ec61dd",
        "userId": 0,
        "titre": "proident excepteur sit",
        "text": "Exercitation et eiusmod officia qui sit deserunt aliquip consectetur nisi commodo sit do ullamco. Dolore amet laborum est reprehenderit consequat commodo ad et reprehenderit occaecat magna. Labore esse culpa proident in proident do nulla Lorem magna sit aute consectetur ut.\r\n",
        "registered": "2014-03-08T10:48:34 -01:00"
    },
    {
        "id": "5eb917e695b76014702eaea8",
        "userId": 1,
        "titre": "minim do minim",
        "text": "Laboris ex id ipsum sint pariatur sit sunt sint voluptate elit quis ipsum. Laboris deserunt eu ea aute eiusmod amet aliquip dolor aliqua ad magna. Cupidatat ex laborum ad sunt consequat laboris labore aute tempor nulla cillum aute occaecat dolore. Pariatur nulla ea reprehenderit do ut ex magna eiusmod sunt. Eu magna excepteur et nisi aliqua aliqua. Mollit sunt incididunt tempor irure minim esse commodo. Dolor do proident elit non.\r\n",
        "registered": "2014-09-20T09:49:51 -02:00"
    },
    {
        "id": "5eb917e6df1dcff3263cd7fe",
        "userId": 2,
        "titre": "aliquip quis consectetur",
        "text": "Sint velit duis occaecat consequat enim labore ipsum fugiat et nisi excepteur. Consectetur fugiat adipisicing quis aliquip qui enim consectetur nostrud dolor ullamco proident. Reprehenderit cupidatat ad eiusmod qui aliquip.\r\n",
        "registered": "2019-07-31T09:43:40 -02:00"
    },
    {
        "id": "5eb917e6f6c6b877e8fc89a9",
        "userId": 3,
        "titre": "incididunt fugiat deserunt",
        "text": "Officia amet magna nostrud consectetur consequat dolor sunt sint. Ex occaecat Lorem excepteur laborum non reprehenderit. Id commodo qui nostrud reprehenderit deserunt ullamco minim.\r\n",
        "registered": "2015-08-03T01:40:31 -02:00"
    },
    {
        "id": "5eb917e69f22be1e5e1e02b9",
        "userId": 4,
        "titre": "Lorem incididunt quis",
        "text": "Dolore non reprehenderit exercitation aliqua mollit. Et sint est ex nisi quis ea occaecat velit labore reprehenderit irure. Ad ad nulla excepteur ad tempor ut minim exercitation tempor. Voluptate do adipisicing laboris eu esse do in.\r\n",
        "registered": "2015-02-14T11:24:28 -01:00"
    }
]

const express = require('express');
const cors = require('cors');
const app = express();

let corsOptions = {
    origin: "*"
}
app.use(cors(corsOptions))

app.listen(3000);
app.get('/users', function (req, res) {
    res.send(users);
})

app.get('/posts', function (req, res) {
    res.send(posts);
})

app.get('/users/:id', function (req, res) {
    let id = req.params.id;
    for (let i = 0; i < users.length; i++) {
        const currentUser = users[i];
        if (currentUser.id == id) {
            res.send(currentUser);
            break;
        }
    }
    res.statusMessage = "User not found";
    res.status(404).end();
})