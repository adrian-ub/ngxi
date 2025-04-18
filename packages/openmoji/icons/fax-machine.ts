import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[openmojiFaxMachineIcon],svg[openmoji-fax-machine-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2"><svg:path fill="#9B9B9A" d="M13 32h46v26H13z"></svg:path><svg:path fill="#D0CFCE" d="M21 55h-1a3 3 0 0 1-3-3V38a3 3 0 0 1 3-3h1a3 3 0 0 1 3 3v14a3 3 0 0 1-3 3"></svg:path><svg:path fill="#9B9B9A" d="M17 13h38v19H17z"></svg:path><svg:path fill="#FFF" d="M29 17h22v15H29z"></svg:path><svg:path fill="#B1CC33" d="M46 37h9v8h-9z"></svg:path></svg:g><svg:path fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2" d="M13 32h46v26H13z"></svg:path><svg:path fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2" d="M21 55h-1a3 3 0 0 1-3-3V38a3 3 0 0 1 3-3h1a3 3 0 0 1 3 3v14a3 3 0 0 1-3 3m-4-42h38v19H17z"></svg:path><svg:path fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2" d="M29 17h22v15H29z"></svg:path><svg:circle cx="29" cy="39" r="2"></svg:circle><svg:circle cx="35" cy="39" r="2"></svg:circle><svg:circle cx="41" cy="39" r="2"></svg:circle><svg:circle cx="29" cy="45" r="2"></svg:circle><svg:circle cx="35" cy="45" r="2"></svg:circle><svg:circle cx="41" cy="45" r="2"></svg:circle><svg:circle cx="29" cy="51" r="2"></svg:circle><svg:circle cx="35" cy="51" r="2"></svg:circle><svg:circle cx="41" cy="51" r="2"></svg:circle><svg:path fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2" d="M46 37h9v8h-9z"></svg:path>`,
})
export class OpenmojiFaxMachineIcon {
  readonly viewBox = input("0 0 72 72")
  readonly width = input("1em")
  readonly height = input("1em")
}
