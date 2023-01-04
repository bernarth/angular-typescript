import { Component, DoCheck, OnInit } from '@angular/core';
import { Room, RoomList } from './rooms';

@Component({
  selector: 'hinv-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.scss']
})
export class RoomsComponent implements OnInit, DoCheck {
  hotelName = 'Hilton Hotel';
  numberOfRooms = 10;
  hideRooms = false;
  selectedRoom!: RoomList;
  
  rooms: Room = {
    totalRooms: 20,
    availableRooms: 10,
    bookedRooms: 5
  };

  title = 'Room List';
  roomList: RoomList[] = [];

  constructor() {}

  ngDoCheck(): void {
    console.log('do check is called');
  }

  ngOnInit(): void {
    this.roomList = [
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
  }

  toggle() {
    this.hideRooms = !this.hideRooms;
    this.title = 'Rooms List';
  }

  selectRoom(room: RoomList) {
    this.selectedRoom = room;
  }

  addRoom() {
    const room: RoomList = {
      roomNumber: 4,
      roomType: 'Deluxe Room',
      amenities: 'Air Conditioner, Free Wi-Fi, TV, Bathroom, Kitchen',
      price: 500,
      photos: 'https://unsplash.com/es/fotos/9Eb97-TrMrA',
      checkinTime: new Date('11-Nov-2021'),
      checkoutTime: new Date('12-Nov-2021'),
      raiting: 4.5
    };

    // We are not using this because we use OnPush change detection strategy
    // this.roomList.push(room);
    this.roomList = [...this.roomList, room];
  }
}
