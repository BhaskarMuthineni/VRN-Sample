import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-master',
  templateUrl: './master.component.html',
  styleUrls: ['./master.component.css']
})
export class MasterComponent implements OnInit {

  @ViewChild('masterList') elementView: ElementRef;
  viewHeight: number;

  VRN = [
    {
      icon: 'local_shipping',
      transport: 'Road Truck',
      transportCode: 'RD',
      vrn: '1000123',
      vehicle: 'MH43 9823',
      purpose: "Inbound",
      purpose_icon: ""
    },
    {
      icon: 'directions_bike',
      transport: 'Road Bike',
      transportCode: 'RB',
      vrn: '1000124',
      vehicle: 'MH01 1234',
      purpose: "Outbound"
    },
    {
      icon: 'directions_walk',
      transport: 'Hand Delivered',
      transportCode: 'HD',
      vrn: '1000125',
      vehicle: 'KL01 AC3563',
      purpose: "Inbound"
    },
    {
      icon: 'local_taxi',
      transport: 'Courier Road',
      transportCode: 'CR',
      vrn: '1000126',
      vehicle: 'DL02 2343',
      purpose: "Outbound"
    },
    {
      icon: 'flight',
      transport: 'Courier Air',
      transportCode: 'CA',
      vrn: '1000127',
      vehicle: 'MH04 X2135',
      purpose: "Inbound"
    },
    {
      icon: 'local_shipping',
      transport: 'Road Truck',
      transportCode: 'RD',
      vrn: '1000123',
      vehicle: 'MH43 9823',
      purpose: "Inbound",
      purpose_icon: ""
    },
    {
      icon: 'directions_bike',
      transport: 'Road Bike',
      transportCode: 'RB',
      vrn: '1000124',
      vehicle: 'MH01 1234',
      purpose: "Outbound"
    },
    {
      icon: 'directions_walk',
      transport: 'Hand Delivered',
      transportCode: 'HD',
      vrn: '1000125',
      vehicle: 'KL01 AC3563',
      purpose: "Inbound"
    },
    {
      icon: 'local_taxi',
      transport: 'Courier Road',
      transportCode: 'CR',
      vrn: '1000126',
      vehicle: 'DL02 2343',
      purpose: "Outbound"
    },
    {
      icon: 'flight',
      transport: 'Courier Air',
      transportCode: 'CA',
      vrn: '1000127',
      vehicle: 'MH04 X2135',
      purpose: "Inbound"
    },
    {
      icon: 'flight',
      transport: 'Courier Air',
      transportCode: 'CA',
      vrn: '1000127',
      vehicle: 'MH04 X2135',
      purpose: "Inbound"
    },
    {
      icon: 'flight',
      transport: 'Courier Air',
      transportCode: 'CA',
      vrn: '1000127',
      vehicle: 'MH04 X2135',
      purpose: "Inbound"
    }
  ];  

  constructor(private el:ElementRef) { }

  ngOnInit() {
    
  }

  ngAfterViewInit(){
    this.viewHeight = this.el.nativeElement.children[1].offsetHeight;
  }

  clickMe(){    
    alert(this.viewHeight);
  }

}
