export class Recipe {

  name;
  description;
  imagePath;

  constuctor (name:string, description:string, imagePath:string){
    this.name = name;
    this.description = description;
    this.imagePath = imagePath;
  }
}
