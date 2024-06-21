import { Component } from '@angular/core';

@Component({
  selector: 'app-toggleimage',
  templateUrl: './toggleimage.component.html',
  styleUrl: './toggleimage.component.css'
})
export class ToggleimageComponent {
  leaf: string = "leaf";
  imgSrc: string = "https://img.freepik.com/premium-photo/water-drops-leaf-generative-ai_847296-46.jpg?size=626&ext=jpg&ga=GA1.1.484556349.1717480828&semt=ais_user.jpg";
  imgName: string = "leaf";

  changeImage(): void {
    if (this.leaf === "leaf") {
      this.imgSrc = "https://img.freepik.com/premium-photo/colorful-flower-with-green-leaf_1028782-202406.jpg";
      this.imgName = "flower";
      this.leaf = "flower";
    } else {
      this.imgSrc = "https://img.freepik.com/premium-photo/water-drops-leaf-generative-ai_847296-46.jpg?size=626&ext=jpg&ga=GA1.1.484556349.1717480828&semt=ais_user.jpg";
      this.imgName = "leaf";
      this.leaf = "leaf";
    }
  }
}
