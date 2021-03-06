import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FloatingActionButton } from 'ng2-floating-action-menu';


@Component({
  selector: 'app-tutor-dashboard',
  templateUrl: './tutor-dashboard.component.html',
  styleUrls: ['./tutor-dashboard.component.scss']
})
export class TutorDashboardComponent implements OnInit {

  constructor(
    private router: Router
  ) {
    this.config = {
      placment: 'br',
      effect: 'mfb-slidein',
      iconClass: 'fa fa-comment',
      activeIconClass: 'fa fa-comment',
      toggle: 'hover',
      buttons: this.buttons
    };
  }

  ngOnInit() {
  }

  config;
  buttons: Array<FloatingActionButton> = [
    {
      iconClass: 'fa fa-android',
      onClick: ()=>{
        //this.router.navigate(['student/allrequests']);
      }
    },
    {
      iconClass: 'fa fa-address-book',
      onClick: ()=>{
        //this.router.navigate(['student/teachers']);
      }
    },
    {
      iconClass: 'fa fa-cab',
      onClick: ()=>{
        //this.router.navigate(['student/profile']);
      }
    },
  ];
 
  placements = [
    {
      value: 'br',
      key: 'bottom right'
    },
    {
      value: 'bl',
      key: 'bottom left'
    },
    {
      value: 'tr',
      key: 'top right'
    },
    {
      value: 'tl',
      key: 'top left'
    },
  ];
 
  effects = [
    {
      value: 'mfb-zoomin',
      key: 'Zoom In'
    },
    {
      value: 'mfb-slidein',
      key: 'Slide In + Fade'
    },
    {
      value: 'mfb-fountain',
      key: 'Fountain'
    },
    {
      value: 'mfb-slidein-spring',
      key: 'Slide In (Spring)'
    }
  ];
 
  toggles = [
    'click',
    'hover'
  ];


  toggleTab(tab){
    console.log(tab);
    this.router.navigate(['tutor/'+tab]);
  }


}
