import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent implements OnInit {
  User = {
    name: 'Doe',
    firstName: 'John',
    age: 25,
    quote: '',
    photo: 'https://randomuser.me/api/portraits/lego/2.jpg',
  };

  isHidden = false;
  constructor() { }

  ngOnInit(): void {    
    document.getElementById("ageUser").hidden = true ;
  }

  displayAge() {
    console.log(this.isHidden)
  if (this.isHidden === true){
    document.getElementById("ageUser").hidden = true ;
  this.isHidden = false; }
else { 
  document.getElementById("ageUser").hidden = false ;
  this.isHidden = true;
}
  }
}