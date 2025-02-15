import GetCep from "./Scenarios/Get-Cep.js";
import { group, sleep } from 'k6';

export default function (){
        group('Get-Cep', () => {
            GetCep();
            sleep(1)
        });
}