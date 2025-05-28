import { Component } from '@angular/core'
import { Navbar } from './Navbar'

@Component({
  selector: 'WithNavbar',
  imports: [Navbar],
  template: `
  <div class="flex h-screen flex-col overflow-hidden">
    <NavBar />
    <div class="flex-auto flex flex-col of-hidden">
      <ng-content />
    </div>
  </div>
  `,
})
export class WithNavbar {}
