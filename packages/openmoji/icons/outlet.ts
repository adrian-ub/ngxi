import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[openmojiOutletIcon],svg[openmoji-outlet-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#FFF" d="M57.041 61.067H14.866a3.91 3.91 0 0 1-3.913-3.913V14.98a3.91 3.91 0 0 1 3.913-3.912H57.04a3.91 3.91 0 0 1 3.912 3.912v42.176a3.91 3.91 0 0 1-3.912 3.912"></svg:path><svg:path fill="#D0CFCE" d="M12.102 59.906A3.74 3.74 0 0 0 14.75 61h42.5A3.75 3.75 0 0 0 61 57.25v-42.5a3.74 3.74 0 0 0-1.1-2.654z"></svg:path><svg:path fill="#D0CFCE" d="M25.401 46.615A14.95 14.95 0 0 1 21 36c0-8.284 6.716-15 15-15c4.141 0 7.89 1.678 10.605 4.391z"></svg:path><svg:path fill="#D0CFCE" d="M46.605 25.391A14.95 14.95 0 0 1 51 36c0 8.284-6.716 15-15 15a14.95 14.95 0 0 1-10.599-4.385"></svg:path><svg:path fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2" d="M58 61H14a3 3 0 0 1-3-3V14a3 3 0 0 1 3-3h44a3 3 0 0 1 3 3v44a3 3 0 0 1-3 3"></svg:path><svg:path fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2" d="M46.605 25.391A14.95 14.95 0 0 1 51 36v0c0 8.284-6.716 15-15 15h0a14.95 14.95 0 0 1-10.599-4.385"></svg:path><svg:circle cx="29.75" cy="36" r="3.75"></svg:circle><svg:circle cx="42.25" cy="36" r="3.75"></svg:circle><svg:circle cx="36" cy="36" r="15" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2"></svg:circle>`,
})
export class OpenmojiOutletIcon {
  readonly viewBox = input("0 0 72 72")
  readonly width = input("1em")
  readonly height = input("1em")
}
