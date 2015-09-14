import {Component, View} from 'angular2/angular2';

@Component({
  selector: 'ot-site'
})
@View({
  template: `
    <div class="ot-site">
      <div class="ot-site--head" head>
        <img class="ot-site--logo" src="//guestcenter.opentable.com/Content/img/icons/icon/2x/ot-logo-2x.png">
        <ng-content></ng-content>
      </div>
      <div class="ot-site--menu" menu>
        <ng-content select="[menu]"></ng-content>
      </div>
      <div class="ot-site--body" body>
        <ng-content select="[body]"></ng-content>
      </div>
      <div class="ot-site--foot">
        &copy; 2015 OpenTable, Inc.
      </div>
    </div>
  `
})
export class OtSite {

  constructor() {
  }
}
