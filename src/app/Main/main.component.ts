import {Component, Injectable, Input, Output} from '@angular/core';
import { NgForm } from '@angular/forms';
import {Route, Router} from '@angular/router';
import {ActivatedRoute} from '@angular/router';
import {Global} from '../Global/global';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html'
})

@Injectable({ providedIn: 'root'})

export class MainComponent {
  @Input() public player1: string;
           public player2: string;
  constructor(private router: Router,
              public global: Global) {
  }

  onSubmit(form: NgForm) {
    this.global.player1 = form.value.player1;
    this.global.player2 = form.value.player2;
    this.router.navigate(['/board']);
  }

}
