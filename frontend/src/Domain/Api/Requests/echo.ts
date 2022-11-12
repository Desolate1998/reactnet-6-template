import { requests } from "../agent";
const controller:string = 'echo'

export const EchoApi = {
    echo:()=> requests.get<string>(`${controller}/echo`),
    echoNoneAuth:()=> requests.get<string>(`${controller}/EchoAuth`),
}