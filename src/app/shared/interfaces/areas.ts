import { Area } from './area';
export interface Areas {
    payload: { value: Area[] };
}
export interface UpdatedAreas {
    payload: Area;
}
export interface DeletedAreas {
    payload: { value: boolean };
}
