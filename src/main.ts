type Especialidad = "Medico de familia" | "Pediatra" | "Cardiólogo";

interface Pacientes {
    id: number;
    nombre: string;
    apellidos: string;
    sexo: string;
    temperatura: number;
    frecuenciaCardiaca: number;
    especialidad: Especialidad;
    edad: number;
}

const pacientes: Pacientes[] = [
    {
        id: 1,
        nombre: "John",
        apellidos: "Doe",
        sexo: "Male",
        temperatura: 36.8,
        frecuenciaCardiaca: 80,
        especialidad: "Medico de familia",
        edad: 44,
    },
    {
        id: 2,
        nombre: "Jane",
        apellidos: "Doe",
        sexo: "Female",
        temperatura: 36.8,
        frecuenciaCardiaca: 70,
        especialidad: "Medico de familia",
        edad: 43,
    },
    {
        id: 3,
        nombre: "Junior",
        apellidos: "Doe",
        sexo: "Male",
        temperatura: 36.8,
        frecuenciaCardiaca: 90,
        especialidad: "Pediatra",
        edad: 8,
    },
    {
        id: 4,
        nombre: "Mary",
        apellidos: "Wien",
        sexo: "Female",
        temperatura: 36.8,
        frecuenciaCardiaca: 120,
        especialidad: "Medico de familia",
        edad: 20,
    },
    {
        id: 5,
        nombre: "Scarlett",
        apellidos: "Somez",
        sexo: "Female",
        temperatura: 36.8,
        frecuenciaCardiaca: 110,
        especialidad: "Cardiólogo",
        edad: 30,
    },
    {
        id: 6,
        nombre: "Brian",
        apellidos: "Kid",
        sexo: "Male",
        temperatura: 39.8,
        frecuenciaCardiaca: 100,
        especialidad: "Pediatra",
        edad: 11,
    },
];

/* Apartado 1

 a) Queremos extraer la lista de paciente que están asignados a la especialidad de Pediatría*/

// let pacientesPediatra: Pacientes[] = [];

const obtenPacientesAsignadosAPediatria = pacientes.filter((pacientes: Pacientes) => pacientes.especialidad === "Pediatra")

const pacientesPediatria = () => obtenPacientesAsignadosAPediatria

console.log(pacientesPediatria());

// b) Queremos extraer la lista de pacientes asignados a Pediatría y que tengan una edad menor de 10 años.

const obtenPacientesAsignadosAPediatriaYMenorDeDiezAnios = pacientes.filter((pacientes: Pacientes) => pacientes.especialidad === "Pediatra" && pacientes.edad < 10)

const pacientesPediatriaMenorDiezAnios = () => obtenPacientesAsignadosAPediatriaYMenorDeDiezAnios

console.log(pacientesPediatriaMenorDiezAnios());

/* Apartado 2

Queremos activar el protocolo de urgencia si cualquier de los pacientes tiene un ritmo cardíaco superior a 100 pulsaciones por minuto y una temperatura corporal superior a 39 grados.

Es decir, crear una función que devuelve true / false dependiendo si se da la condición, algo así como: */

const activarProtocoloUrgencia = pacientes.some((pacientes: Pacientes) => pacientes.frecuenciaCardiaca > 100 && pacientes.temperatura > 39)

const protocoloUrgencia = () => activarProtocoloUrgencia

console.log(protocoloUrgencia());

/* Apartado 3
El pediatra no puede atender hoy a los pacientes, queremos reasignar los pacientes asignados a la especialidad de pediatría a la de medico de familia. */

const reasignaPacientesAMedicoFamilia: Pacientes[] =
    pacientes.map((pacientes: Pacientes) => ({
        ...pacientes,
        especialidad: pacientes.especialidad === 'Pediatra' ? 'Medico de familia' : pacientes.especialidad
    }));

const pacientesNuevosMedicoFamilia = () => reasignaPacientesAMedicoFamilia

console.log(pacientesNuevosMedicoFamilia());

/* Apartado 4
Queremos saber si podemos mandar al Pediatra a casa(si no tiene pacientes asignados), comprobar si en la lista hay algún paciente asignado a pediatría */

const HayPacientesDePediatria: boolean = pacientes.some((pacientes: Pacientes) => pacientes.especialidad === "Pediatra");

const compruebaPacientesPediatra = () => HayPacientesDePediatria;

console.log("¿Hay pacientes de Pediatria?", compruebaPacientesPediatra());

/* Apartado 5
Queremos calcular el número total de pacientes que están asignados a la especialidad de Medico de familia, y lo que están asignados a Pediatría y a cardiología*/

interface NumeroPacientesPorEspecialidad {
    medicoDeFamilia: number;
    pediatria: number;
    cardiologia: number;
}

const conteoPacientes: NumeroPacientesPorEspecialidad = {
    medicoDeFamilia: 0,
    pediatria: 0,
    cardiologia: 0,
}

const cuentaPacientesMedicoFamilia: number = pacientes.reduce((acc, pacientes) => acc + (pacientes.especialidad === "Medico de familia" ? conteoPacientes.medicoDeFamilia++ : conteoPacientes.medicoDeFamilia), 0)

const cuentaPacientesPediatra: number = pacientes.reduce((acc, pacientes) => acc + (pacientes.especialidad === "Pediatra" ? conteoPacientes.pediatria++ : conteoPacientes.pediatria), 0)

const cuentaPacientesCardiologo: number = pacientes.reduce((acc, pacientes) => acc + (pacientes.especialidad === "Cardiólogo" ? conteoPacientes.cardiologia++ : conteoPacientes.cardiologia), 0)

const numeroPacientes = () => conteoPacientes;
console.log(numeroPacientes());



// const conteoPacientesEspecialidad = cuentaPacientesPorEspecialidad(pacientes)
// console.log(conteoPacientesEspecialidad);
