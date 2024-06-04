interface rol{
    id: number;
    name: string;
}

export interface UserInterface{
    id : number;
    name: string;
    email: string;
    rol_id: number;
    rol: rol;
}