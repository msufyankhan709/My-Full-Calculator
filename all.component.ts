import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-all',
  templateUrl: './all.component.html',
  styleUrls: ['./all.component.css']
})
export class AllComponent implements OnInit {

  constructor() { }
  public a:number;
  public b:number; 
  public result:number;
  Add()
  {
    return this.result=Number.parseInt(this.a.toString()) + Number.parseInt(this.b.toString());
  }
  Subtract()
  {
    return this.result=Number.parseInt(this.a.toString()) - Number.parseInt(this.b.toString());
  }
  Multiply()
  {
    return this.result=Number.parseInt(this.a.toString()) * Number.parseInt(this.b.toString());
  }
  Divide()
  {
    return this.result=Number.parseInt(this.a.toString()) / Number.parseInt(this.b.toString());
  }
  Clear()
  {
    return this.result=this.a=this.b=0;
  }

  ngOnInit(): void {
  }

}
