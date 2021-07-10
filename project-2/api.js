import { Math as TMath } from 'three';

export default class Api {
    test() {
        let clamped_number = TMath.clamp(2, 0, 1);
        console.log(clamped_number)
        let result = Math.max(clamped_number, 3);
        console.log(result)
    }
}

export { Api };
