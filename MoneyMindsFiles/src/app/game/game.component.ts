import { Component } from '@angular/core';
import { StoreItem } from '../store-item';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-game',
  standalone: true,
  imports: [NgFor],
  templateUrl: './game.component.html',
  styleUrl: './game.component.css'
})
export class GameComponent {
  budget = 100;
  storeItems: StoreItem[] = [
    { name: 'Apple', price: 5, image: 'https://i.gyazo.com/ce19fc6530bc4e906383cf59c49bc0fc.png', quantity: 5 },
    { name: 'Banana', price: 5, image: 'https://i.gyazo.com/6dd5be080e93efceead4aa8c133e7b4b.png', quantity: 5 },
    { name: 'Orange', price: 5, image: 'https://i.gyazo.com/4d73bded08d28b462479328ed36eba90.png', quantity: 5 },
    { name: 'Pear', price: 5, image: 'https://i.gyazo.com/25ffe91a6e36958598cb3d01cf7861c7.png', quantity: 5 },
    { name: 'Pineapple', price: 5, image: 'https://i.gyazo.com/d5fbe75199c595d10e379f66bef04c48.png', quantity: 5 },
    { name: 'Strawberry', price: 5, image: 'https://i.gyazo.com/1e869e3592e6529855e4f77dc7105b88.png', quantity: 5 },
    { name: 'Watermelon', price: 5, image: 'https://i.gyazo.com/3149dad40cc3246dd762d9c145683aeb.png', quantity: 5 }
  ]
  inventory: StoreItem[] = [];

  buyItem(item: StoreItem){
    if(item.quantity <= 0){
      alert('Out of stock!');
      return;
    }
    if(this.budget >= item.price){
      this.budget -= item.price;
      let newItem = {name: item.name, price: item.price, image: item.image, quantity: 1};
      item.quantity--;
      item.price *= Math.floor(7/item.quantity);
      
      this.inventory.push(newItem);
    }
    else{
      alert('Not enough money!');
    }
  }

  reset(){
    this.budget = 100;
    this.storeItems = [
      { name: 'Apple', price: 5, image: 'https://i.gyazo.com/ce19fc6530bc4e906383cf59c49bc0fc.png', quantity: 5 },
      { name: 'Banana', price: 5, image: 'https://i.gyazo.com/6dd5be080e93efceead4aa8c133e7b4b.png', quantity: 5 },
      { name: 'Orange', price: 5, image: 'https://i.gyazo.com/4d73bded08d28b462479328ed36eba90.png', quantity: 5 },
      { name: 'Pear', price: 5, image: 'https://i.gyazo.com/25ffe91a6e36958598cb3d01cf7861c7.png', quantity: 5 },
      { name: 'Pineapple', price: 5, image: 'https://i.gyazo.com/d5fbe75199c595d10e379f66bef04c48.png', quantity: 5 },
      { name: 'Strawberry', price: 5, image: 'https://i.gyazo.com/1e869e3592e6529855e4f77dc7105b88.png', quantity: 5 },
      { name: 'Watermelon', price: 5, image: 'https://i.gyazo.com/3149dad40cc3246dd762d9c145683aeb.png', quantity: 5 }
    ]
    this.inventory = [];
  }

}
