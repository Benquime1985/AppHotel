export class RoomModel{
    constructor (
        public id : number,
        public title : string,
        public room_numb: number,
        public image : string,
        public description : string,
        public price : number,
        public reserv_id: number
    ){}
}