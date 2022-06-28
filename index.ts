interface User {
  name: string;
  age: number;
  occupation?: string;
}

interface Admin {
  role?: string;
}

export type Person = User & Admin;

export const persons: Person[] = [
  {
    name: "Max Mustermann",
    age: 25,
    occupation: "Chimney sweep",
  },
  {
    name: "Jane Doe",
    age: 32,
    role: "Administrator",
  },
  {
    name: "Kate Müller",
    age: 23,
    occupation: "Astronaut",
  },
  {
    name: "Bruce Willis",
    age: 64,
    role: "World saver",
  },
];

export function logPerson(person: Person) {
  let userOrAdmin: string | undefined;
  if (person.role) {
    userOrAdmin = person.role;
  } else {
    userOrAdmin = person.occupation;
  }
  console.log(
    ` -Name: ${person.name}, Age:${person.age}, Admin or User: ${userOrAdmin}`
  );
}

persons.forEach(logPerson);
