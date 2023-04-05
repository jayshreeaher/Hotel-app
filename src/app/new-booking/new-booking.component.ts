import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-new-booking',
  templateUrl: './new-booking.component.html',
  styleUrls: ['./new-booking.component.scss']
})
export class NewBookingComponent implements OnInit{
  parentForm = this._formBuilder.group({
    //firstCtrl: ['', Validators.required],
  });
  
  isLinear = false;

  constructor(private _formBuilder: FormBuilder) {}
  ngOnInit(): void {
    
  }
  bookHotel(){
    console.log(this.parentForm.value)
  }
}

