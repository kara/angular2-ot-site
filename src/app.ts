import {Component, View, bootstrap} from 'angular2/angular2';
import {OtSite} from 'ot-site';

@Component({
  selector: 'app'
})
@View({
  template: `
   <ot-site>
      <div head>I render in head.</div>
      <div menu>I render in menu.</div>
      <div body>I render in body.</div>
   </ot-site>
  `,
  directives: [OtSite]
})
export class App {

  constructor() {
  }
}

bootstrap(App);
