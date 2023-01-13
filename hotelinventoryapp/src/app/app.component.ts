import { AfterViewInit, Component, ViewChild, ViewContainerRef } from '@angular/core';
import { RoomsComponent } from './rooms/rooms.component';

@Component({
  selector: 'hinv-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit {
  title = 'hotelinventoryapp';
  // role = 'Admin'; // Admin, User, None

  @ViewChild('user', { read: ViewContainerRef }) vcr!: ViewContainerRef;

  ngAfterViewInit(): void {
    // We loadded the component dynamically
    const componentRef = this.vcr.createComponent(RoomsComponent);
    componentRef.instance.numberOfRooms = 50;
  }
}
