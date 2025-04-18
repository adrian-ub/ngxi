import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[openmojiWashingMachineIcon],svg[openmoji-washing-machine-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#D0CFCE" d="M53.908 63.031H18.01a1 1 0 0 1-1-1V13.068a1 1 0 0 1 1-1h35.9a1 1 0 0 1 1 1V62.03a1 1 0 0 1-1 1"></svg:path><svg:circle cx="36.024" cy="45.016" r="12" fill="#FFF"></svg:circle><svg:path fill="#92D3F5" d="M24.024 45.016c0 6.627 5.373 12 12 12s12-5.373 12-12"></svg:path><svg:path fill="#9B9B9A" d="M17 17.009h16v9.95H17z"></svg:path><svg:circle cx="36.024" cy="45.016" r="7" fill="#D0CFCE"></svg:circle><svg:path fill="#61B2E4" d="M29.024 45.016a7 7 0 1 0 14 0"></svg:path><svg:circle cx="36.024" cy="45.016" r="12" fill="none" stroke="#000" stroke-miterlimit="10" stroke-width="2"></svg:circle><svg:circle cx="36.024" cy="45.016" r="7" fill="none" stroke="#000" stroke-miterlimit="10" stroke-width="2"></svg:circle><svg:path fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2" d="M53.908 63.031H18.01a1 1 0 0 1-1-1V13.068a1 1 0 0 1 1-1h35.9a1 1 0 0 1 1 1V62.03a1 1 0 0 1-1 1"></svg:path><svg:path fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2" d="M17 17.009h16v9.95H17zM37 19h7m-7 4h7m-21-2h4"></svg:path><svg:circle cx="49" cy="21" r="2"></svg:circle>`,
})
export class OpenmojiWashingMachineIcon {
  readonly viewBox = input("0 0 72 72")
  readonly width = input("1em")
  readonly height = input("1em")
}
