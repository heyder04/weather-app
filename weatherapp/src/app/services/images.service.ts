import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ImagesService {
  images:any;
  constructor() { }
  Giveimages(){
     return {"0":"clear_sky.jpg",
    "1":"mainly_clear.jpg",
    "2":"mainly_clear.jpg",
  "3":"mainly_clear.jpg","45":"fog.png","48":"fog.png","51":"drizzle1.jpg","53":"drizzle1.jpg","55":"drizzle1.jpg","56":"fdrizzle.jpg","57":"fdrizzle.jpg","61":"rain.jpg","63":"rain.jpg","65":"rain.jpg","66":"freezimgrain.jpeg","67":"freezimgrain.jpeg","71":"snowfall.jpg","73":"snowfall.jpg","75":"snowfall.jpg","77":"snowgrain.webp","80":"rainshower.jpg","81":"rainshower.jpg","82":"rainshower.jpg","85":"snowshower.webp","86":"snowshower.webp","95":"slightthunderstorm.jpg","96":"hailthunderstorm.jpg","99":"hailthunderstorm.jpg"}
  }
}
