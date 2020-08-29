import { Injectable } from '@angular/core';
import { Pelicula } from '../models/pelicula';

@Injectable()
export class PeliculaService {

    public peliculas: Pelicula[];

    constructor(){
        this.peliculas = [
            new Pelicula('Spiderman 4', 2019, 'https://wipy.tv/wp-content/uploads/2020/03/venom-apareceria-en-spider-man-4.jpg'),
            new Pelicula('Los Vengadores Endgame', 2018, 'https://arc-anglerfish-arc2-prod-copesa.s3.amazonaws.com/public/OF2GHTEXJFBSVNCTNCUES4ESAQ.jpg'),
            new Pelicula('Batman vs Superman', 2015, 'https://i.ytimg.com/vi/Vzi5Q5aIGJU/maxresdefault.jpg')
        ];
    }
    
    holaMundo(){
        return "Hola Mundo desde el Service de Angular";
    }

    getPeliculas(){
        return this.peliculas;
    }
}