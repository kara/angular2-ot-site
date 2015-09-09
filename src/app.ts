import {Component, View, bootstrap} from 'angular2/angular2';
import {OtModal} from 'ot-modal';

@Component({
  selector: 'app'
})
@View({
  template: `
    <ot-modal></ot-modal>
  `,
  directives: [OtModal]
})
export class App {

  constructor() {
  }
}

bootstrap(App);