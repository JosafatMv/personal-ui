import { Entity } from '../../../../../../PersonalApp/src/app/types/entity';
// export interface Personal {
// 	id: number;
// 	nombre: string;
// 	apellidoP: string;
// 	apellidoM: string;
// 	sueldo: number;
// 	puesto: number;
// 	fecNac: string;
// }

export type Personal = Entity<number> & {
	name: string;
	surname: string;
	lastname: string;
	birthday: string;
	salary: number;
	position: any;
};
