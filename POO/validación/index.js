const usersDatabase = [
    {
        username: 'Andres',
        password: '123',
    },
    {
    username: "caro",
    password: "456",
  },
  {
    username: "mariana",
    password: "789",
  },
]

const usersTimeline = [
  {
    username: "Estefany",
    timeline: "Me encata Javascript!",
  },
  {
    username: "Oscar",
    timeline: "Bebeloper es lo mejor!",
  },
  {
    username: "Mariana",
    timeline: "A mi me gusta mÃ¡s el cafÃ© que el tÃ©",
  },
  {
    username: "Andres",
    timeline: "Yo hoy no quiero trabajar",
  },
];

const username = prompt('Ingrese su nobre de usuiario');
const password = prompt('Ingrese su contraseña');
const existingUser = usersDatabase.find((user) => user.username === username && user.password === password);
    // Si el usuario existe, se muestra su timeline
    if (existingUser) {
        console.log('Bienvenido ' + existingUser.username);
        const userTimeline = usersTimeline.filter((user) => user.username === existingUser.username);
        console.log('Estas son tus publicaciones:');
        userTimeline.forEach((timeline) => {
            console.log(timeline.timeline);
        });
        if (userTimeline.length === 0) {
            console.log('No tienes publicaciones');
            
        }
    }else{
        console.log('Usuario o contraseña incorrectos');
    }

