import { Component, OnInit } from '@angular/core';
// import {MatDatepickerModule} from '@angular/material/datepicker';
@Component({
  selector: 'app-appointments',
  templateUrl: './appointments.component.html',
  styleUrls: ['./appointments.component.css']
})
export class AppointmentsComponent {

  filterResultDataSet = [
    {
      repName: 'John',
      doctorName: 'Rajan',
      targetAilment: 'Alzhemier',
      medicine:'Dolo',
      slot: '1pm - 2pm',
      date:'21/08/2021',
      contact:'807329992'

    },
    {
      repName: 'Smith',
      doctorName: 'Martin',
      targetAilment: 'Alzhemier',
      medicine:'Dolo',
      slot: '1pm - 2pm',
      date:'21/08/2021',
      contact:'807329992'

    },
    {
      repName: 'Kim',
      doctorName: 'Mark',
      targetAilment: 'Alzhemier',
      medicine:'Dolo',
      slot: '1pm - 2pm',
      date:'21/08/2021',
      contact:'807329992'
    },
    
    
  ]


}
