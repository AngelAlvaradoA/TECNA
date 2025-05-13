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

const userName = prompt('Ingrese su nombre de usuario');
const password = prompt('Ingrese su contrasena');

function existingUser(userName, password){
    for (let i = 0; i < usersDatabase.length; i++) {
        if (usersDatabase[i].username === userName && usersDatabase[i].password === password) {
            return true;
        }
    }
     return false;
};

function singIn(userName, password){
    if (existingUser(userName, password)) {
        alert(`Bienvenido a tu cuenta ${userName}`);
        console.log(usersTimeline);
    }else{
        alert('Usuario o contraseña incorrectos');
    }
};

singIn(userName, password);