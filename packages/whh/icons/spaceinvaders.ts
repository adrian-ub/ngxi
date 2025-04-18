import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[whhSpaceinvadersIcon],svg[whh-spaceinvaders-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M960 704V512H832v192h-64v-64H256v64h-64V512H64v192H0V448h64V320h128V192h128v-64h64v64h256v-64h64v64h128v128h128v128h64v256zM384 320H256v128h128zm384 0H640v128h128zM576 768v-64h192v64zm-128 0H256v-64h192zM256 64h64v64h-64zM128 0h128v64H128zm640 64v64h-64V64zM896 0v64H768V0z"></svg:path>`,
})
export class WhhSpaceinvadersIcon {
  readonly viewBox = input("0 0 1024 768")
  readonly width = input("1.34em")
  readonly height = input("1em")
}
