import { Component, OnInit } from '@angular/core';
declare var $: any;
@Component({
  selector: 'app-panel',
  templateUrl: './panel.component.html',
  styleUrls: ['./panel.component.scss']
})
export class PanelComponent implements OnInit {
  img=true;

  ngOnInit(): void {
    $(document).ready(function () {
      var trigger = $('.hamburger'),
         isClosed = true;

        trigger.click(function () {
          hamburger_cross();
        });

        function hamburger_cross() {

          if (isClosed == true) {
            trigger.removeClass('is-open');
            trigger.addClass('is-closed');
            isClosed = false;
          } else {
            trigger.removeClass('is-closed');
            trigger.addClass('is-open');
            isClosed = true;
          }
      }

      $('[data-toggle="offcanvas"]').click(function () {
            $('#wrapper').toggleClass('toggled');
      });
    });
    // setTimeout(()=>{
    //   this.img = false;
    // },5000)
  }
}
