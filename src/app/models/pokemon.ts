export class Pokemon{
    constructor(
        public _id: string,
        public id: number,
        public type: string[],
        public name: name[],
        public base: any[]
    ){
        
    }
}

export class name{
    constructor(
        public _id: string,
        public english: string
    ){
        
    }
}

// export class base{
//     constructor(
//         public _id: string,
//         public HP: string,
//         public Attack: string,
//         public Defense: string,
//         public SpAttack: string,
//         public SpDefense: string,
//         public Speed: string
//     ){
        
//     }
// }