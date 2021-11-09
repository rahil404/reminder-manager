import { Component, OnInit } from '@angular/core';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  faLinkedin = faLinkedin;
  faGithub = faGithub;
  faMapMarkerAlt = faMapMarkerAlt;
  
  constructor() { }

  ngOnInit(): void {
  }

}
