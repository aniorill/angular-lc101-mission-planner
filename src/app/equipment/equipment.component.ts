import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-equipment',
  templateUrl: './equipment.component.html',
  styleUrls: ['./equipment.component.css']
})
export class EquipmentComponent implements OnInit {
   equipmentItems: object[] = [
       {name: 'Duct Tape', mass: 0.5},
       {name: 'Space Camera', mass: 20},
       {name: 'Food', mass: 150},
       {name: 'Oxygen Tanks', mass: 400},
       {name: 'AE-35 Unit', mass: 5},
       {name: 'ISS Supplies', mass: 800},
       {name: 'Water', mass: 250},
       {name: 'Satellite', mass: 1200},
       {name: 'R2 Unit', mass: 32}
   ];
   cargoHold: object[] = [];
   cargoMass: number = 0;
   maximumAllowedMass: number = 2000;
   maxItems: number = 10;
   inactive: boolean = false;


   constructor() { }

   ngOnInit() { }

   // Code your addItem function here:
   addItem(equipment: object){
    //if (!(this.cargoMass + equipment['mass']> this.maximumAllowedMass)){
      //this.inactive = true;
    //} else {
      this.cargoHold.push(equipment);
      this.cargoMass += equipment['mass']
    //}
     
     if (this.cargoHold.length === this.maxItems){
       this.inactive = true;
     }
     return (this.maximumAllowedMass > this.cargoMass-200);
     //return isNearMax(equipment);

   }
   canBeAdded(equipment: object): boolean {
     return (this.cargoMass + equipment['mass']> this.maximumAllowedMass)

   }

   isNearMax():boolean {
    return (this.cargoMass > this.maximumAllowedMass-200);
   }

   reset(){
     this.cargoHold = [];
     this.cargoMass = 0;
     this.inactive = false;
     
   }
   
}
