import { Audit } from "./audit";

export class Department extends Audit{
  id: string;
  name: string;
  description: string;
  idEnterprise: string;
  phone: string;
}
