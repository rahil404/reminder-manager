import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  route: string;

  constructor(location: Location, router: Router) {
    router.events.subscribe((val) => {
        this.route = location.path();
    });
  }

  ngOnInit(): void {
  }

}
