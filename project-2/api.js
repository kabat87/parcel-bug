import { Math as TMath } from 'three';

export default class Api {
    test() {
        let clamped_number = TMath.clamp(2, 0, 1);

        let result = Math.max(clamped_number, 3);
    }
}

export { Api };
