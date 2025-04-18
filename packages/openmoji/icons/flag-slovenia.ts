import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[openmojiFlagSloveniaIcon],svg[openmoji-flag-slovenia-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#d22f27" d="M5 17h62v38H5z"></svg:path><svg:path fill="#fff" d="M5 17h62v13H5z"></svg:path><svg:path fill="#1e50a0" d="M5 30h62v12H5z"></svg:path><svg:path fill="#1e50a0" stroke="#000" stroke-linecap="round" stroke-linejoin="round" d="M22.583 22v9c0 6.75-6.75 9-6.75 9s-6.75-2.25-6.75-9v-9s6.896-3.406 13.5 0"></svg:path><svg:path fill="#fff" stroke="#fff" stroke-miterlimit="10" d="m11.963 33.352l7.975.339A6.82 6.82 0 0 1 16 38c-3 1-4.037-4.648-4.037-4.648"></svg:path><svg:path fill="#fff" stroke="#fff" stroke-miterlimit="10" d="m14.5 33.5l1-2l2.265 2.584L14.5 33.5"></svg:path><svg:circle cx="13" cy="24" r="1" fill="#fcea2b"></svg:circle><svg:path fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m21 35l-1-3l-2 3l-2-5l-2 5l-2-3l-1 3s4 9 10 0"></svg:path><svg:circle cx="16" cy="26" r="1" fill="#fcea2b"></svg:circle><svg:circle cx="19" cy="24" r="1" fill="#fcea2b"></svg:circle><svg:path fill="none" stroke="#d22f27" stroke-linecap="round" stroke-linejoin="round" d="M22.583 22v9c0 6.75-6.75 9-6.75 9s-6.75-2.25-6.75-9v-9s6.896-3.406 13.5 0"></svg:path><svg:path fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 17h62v38H5z"></svg:path>`,
})
export class OpenmojiFlagSloveniaIcon {
  readonly viewBox = input("0 0 72 72")
  readonly width = input("1em")
  readonly height = input("1em")
}
