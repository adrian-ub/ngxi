import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[openmojiBusStopIcon],svg[openmoji-bus-stop-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:path id="openmojiBusStop0" d="M32.7 18v10.9M39 18v10.9m0-5.5h-6.3"></svg:path></svg:defs><svg:path fill="#D0CFCE" d="M34.1 3.9h4V68h-4z"></svg:path><svg:path fill="#FFF" d="M48.9 38.5H23.4c-1.1 0-2-.9-2-2V10.9c0-1.1.9-2 2-2h25.5c1.1 0 2 .9 2 2v25.6c0 1.1-.9 2-2 2"></svg:path><svg:circle cx="36.1" cy="23.6" r="10" fill="#FCEA2B" stroke="#5C9E31" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2"></svg:circle><svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2"><svg:path d="M34.1 8.5V3.9h4v4.6m0 30.5v29h-4V38.9m14.8-.4H23.4c-1.1 0-2-.9-2-2V10.9c0-1.1.9-2 2-2h25.5c1.1 0 2 .9 2 2v25.6c0 1.1-.9 2-2 2"></svg:path><svg:circle cx="36.1" cy="23.6" r="10"></svg:circle><svg:use href="#openmojiBusStop0"></svg:use></svg:g><svg:g fill="none" stroke="#5C9E31" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2.1"><svg:circle cx="36.1" cy="23.6" r="10"></svg:circle><svg:use href="#openmojiBusStop0"></svg:use></svg:g>`,
})
export class OpenmojiBusStopIcon {
  readonly viewBox = input("0 0 72 72")
  readonly width = input("1em")
  readonly height = input("1em")
}
