import { Injectable } from '@angular/core';
import { RoomList } from '../rooms';

@Injectable({
  providedIn: 'root'
})
export class RoomsService {

  roomList: RoomList[] = [
    {
      roomNumber: 1,
      roomType: 'Deluxe Room',
      amenities: 'Air Conditioner, Free Wi-Fi, TV, Bathroom, Kitchen',
      price: 500,
      photos: 'https://unsplash.com/es/fotos/9Eb97-TrMrA',
      checkinTime: new Date('11-Nov-2021'),
      checkoutTime: new Date('12-Nov-2021'),
      raiting: 4.5
    },
    {
      roomNumber: 2,
      roomType: 'Deluxe Room',
      amenities: 'Air Conditioner, Free Wi-Fi, TV, Bathroom, Kitchen',
      price: 1000,
      photos: 'https://unsplash.com/es/fotos/9Eb97-TrMrA',
      checkinTime: new Date('12-Nov-2021'),
      checkoutTime: new Date('13-Nov-2021'),
      raiting: 3.456475
    },
    {
      roomNumber: 3,
      roomType: 'Private Suite',
      amenities: 'Air Conditioner, Free Wi-Fi, TV, Bathroom, Kitchen',
      price: 1500,
      photos: 'https://unsplash.com/es/fotos/9Eb97-TrMrA',
      checkinTime: new Date('12-Nov-2021'),
      checkoutTime: new Date('13-Nov-2021'),
      raiting: 2.6
    }
  ];

  constructor() { }

  getRooms() {
    return this.roomList;
  }
}
