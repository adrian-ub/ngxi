import { Component } from '@angular/core'

import { WithNavbar } from '../components/WithNavbar'

@Component({
  selector: 'docs-home',
  imports: [WithNavbar],
  template: `<WithNavbar></WithNavbar>`,
})
export default class HomeComponent { }
