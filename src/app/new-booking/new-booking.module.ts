import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NewBookingRoutingModule } from './new-booking-routing.module';
import { NewBookingComponent } from './new-booking.component';
import { MaterialModuleModule } from '../material-module/material-module.module';
import { ReactiveFormsModule } from '@angular/forms';
import { SearchHotelComponent } from './search-hotel/search-hotel.component';
import { ChooseHotelComponent } from './choose-hotel/choose-hotel.component';
import { ChooseRoomComponent } from './choose-room/choose-room.component';
import { PersonalInfoComponent } from './personal-info/personal-info.component';
import { GuestInformationComponent } from './guest-information/guest-information.component';
import { PaymentDetailsComponent } from './payment-details/payment-details.component';


@NgModule({
  declarations: [
    NewBookingComponent,
    SearchHotelComponent,
    ChooseHotelComponent,
    ChooseRoomComponent,
    PersonalInfoComponent,
    GuestInformationComponent,
    PaymentDetailsComponent
  ],
  imports: [
    CommonModule,
    NewBookingRoutingModule,
    MaterialModuleModule,
    ReactiveFormsModule
  ]
})
export class NewBookingModule { }
