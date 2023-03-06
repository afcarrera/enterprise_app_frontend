import { Audit } from "./audit";

export class Employee extends Audit{
  id: string;
  name: string;
  surname: string;
  email: string;
  age: number;
  position: string;
}
