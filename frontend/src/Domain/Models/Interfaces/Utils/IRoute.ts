//TODO - Add child router capabilities

export interface IRoute {
  path: string;
  component: any;
  name:string;
  mapped:boolean;
  icon?:string;
}