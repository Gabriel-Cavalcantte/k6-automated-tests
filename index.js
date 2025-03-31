
import { options } from './options.js';
import { default as getCepTest } from './Scenarios/Get-Cep.js';

export { options };
export default function () {
    getCepTest();
}