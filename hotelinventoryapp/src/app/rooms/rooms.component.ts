import { AfterViewChecked, AfterViewInit, Component, DoCheck, OnInit, ViewChild } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { Room, RoomList } from './rooms';
import { RoomsService } from './services/rooms.service';

@Component({
  selector: 'hinv-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.scss']
})
export class RoomsComponent implements OnInit, DoCheck, AfterViewInit, AfterViewChecked {
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

  // When static true it is said to be load in ngOnInit parent
  // when you have some asyncrounous code make static false to
  // avoid following the parent's lifecycle
  // @ViewChild(HeaderComponent, {static: true}) headerComponent!: HeaderComponent;
  @ViewChild(HeaderComponent) headerComponent!: HeaderComponent;

  // roomService = new RoomsService();

  constructor(private roomsService: RoomsService) { }

  ngDoCheck(): void {
    console.log('do check is called');
  }

  ngAfterViewInit(): void {
    console.log(this.headerComponent);
    this.headerComponent.title = 'Rooms View';
  }

  ngAfterViewChecked(): void {
    // this will be executed whenever there is a change
    // this.headerComponent.title = 'Rooms View';
  }

  ngOnInit(): void {
    console.log(this.headerComponent);
    this.roomList = this.roomsService.getRooms();
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
