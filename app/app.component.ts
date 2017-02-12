import { Http } from '@angular/http';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute, NavigationStart } from '@angular/router';

@Component({
  selector: 'my-app',
  template: `
    <ul class="nav nav-tabs">
      <li class="nav-item">
        <a routerLink="/ixup/word-reversal" routerLinkActive="active" [routerLinkActiveOptions]="{ exact: false }"  
          class="nav-link active">Word Reversal</a>
      </li>
      <li class="nav-item">
        <a routerLink="/ixup/triangle-categorisation" routerLinkActive="active" [routerLinkActiveOptions]="{ exact: false }"  
          class="nav-link">Triangle catgeorisation</a>
      </li>
      <li class="nav-item">
        <a routerLink="/ixup/linked-list-traversal" routerLinkActive="active" [routerLinkActiveOptions]="{ exact: false }"  
          class="nav-link">Linked List Traversal</a>
      </li>
    </ul>
    <router-outlet></router-outlet>
  `,
})
export class AppComponent {
}