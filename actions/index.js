export const SUM = 'SUM';
export const SUBTRACT = 'SUBTRACT';
export const SET_DIFF = 'SET_DIFF';

export function sum() {
   return {
     type: SUM	       
   };
}

export function subtract() {
    return {
      type: SUBTRACT 
    };
 }

export function setDiff(value) {
    return {
      type: SET_DIFF,
      diff: value
    };
}