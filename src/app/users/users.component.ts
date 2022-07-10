import { AfterContentChecked, AfterContentInit, Component, ContentChild, ElementRef, OnInit } from '@angular/core';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent  implements OnInit , AfterContentChecked , AfterContentInit{

  @ContentChild('par',{ static: true}) par: ElementRef;

  constructor() { }

  ngOnInit(): void {
    console.log("ngOnInit" + this.par.nativeElement.textContent);
  }
  ngAfterContentInit() {
    console.log("ngAfterContentInit" + this.par.nativeElement.textContent); 
  }

  ngAfterContentChecked() {
    console.log("ngAfterContentChecked" + this.par.nativeElement.textContent); 
  }
}
