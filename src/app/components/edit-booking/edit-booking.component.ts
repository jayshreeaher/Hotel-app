import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';
import { HttpService } from 'src/app/core/services/http.service';

@Component({
  selector: 'app-edit-booking',
  templateUrl: './edit-booking.component.html',
  styleUrls: ['./edit-booking.component.scss']
})
export class EditBookingComponent implements OnInit {
  payStatus=['Paid','Not Paid'];
  editBookingForm!:FormGroup;
  constructor(private fb:FormBuilder,private dialog:MatDialog,@Inject(MAT_DIALOG_DATA) public data: any,private http:HttpService,  public dialogRef: MatDialogRef<EditBookingComponent>){
    console.log("data",data)
  }

  ngOnInit(): void {
    this.editBookingForm=this.fb.group({
      "checkInDate":[''],
      "checkOutDate":[''],
      "paymentStatus":['']
    })
    this.setBookingDetails();
  }
  setBookingDetails(){
    this.editBookingForm.get("checkInDate")?.setValue(this.data.searchHotel.checkInDate);
    this.editBookingForm.get("checkOutDate")?.setValue(this.data.searchHotel.checkOutDate);
    this.editBookingForm.get("paymentStatus")?.setValue(this.data.paymentDetails.paymentStatus);
  }
  update(){
    this.data.searchHotel.checkInDate=this.editBookingForm.value.checkInDate;
    this.data.searchHotel.checkOutDate=this.editBookingForm.value.checkOutDate;
    this.data.paymentDetails.paymentStatus=this.editBookingForm.value.paymentStatus;

    let endPoint="hotel-booking/"+this.data.id;
    this.http.putDataToServer(endPoint,this.data).subscribe((el:any)=>{
      if(el){
        this.dialogRef.close({booking:this.data})
        console.log(el);
      }
    })
  
  }
  close(){
    this.dialogRef.close();
  }
}
