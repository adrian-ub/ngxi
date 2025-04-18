import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[openmojiFlagStBarthelemyIcon],svg[openmoji-flag-st-barthelemy-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#fff" d="M5 17h62v38H5z"></svg:path><svg:path fill="#fcea2b" stroke="#fcea2b" stroke-linecap="round" stroke-linejoin="round" d="m43.5 25.91l1-3h-17l1 3z"></svg:path><svg:path fill="#1e50a0" stroke="#1e50a0" stroke-linecap="round" stroke-linejoin="round" d="M36 45.91s7.5-2.5 7.5-10v-10h-15v10c0 7.5 7.5 10 7.5 10"></svg:path><svg:path fill="#d22f27" stroke="#d22f27" stroke-miterlimit="10" d="M28.5 32.41v3.5a10.2 10.2 0 0 0 .306 2.5h14.388a10.2 10.2 0 0 0 .306-2.5v-3.5Z"></svg:path><svg:path fill="#fcea2b" stroke="#fcea2b" stroke-linecap="round" stroke-linejoin="round" d="M36 30.16v-2.5m-.625.834h1.25M40.5 30.16v-2.5m-.625.834h1.25M31.5 30.16v-2.5m-.625.834h1.25"></svg:path><svg:path fill="#fff" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" d="M36 36.66v-2.5m1.25 1.25h-2.5"></svg:path><svg:circle cx="36" cy="43.91" r="1" fill="#fcea2b"></svg:circle><svg:circle cx="33" cy="40.91" r="1" fill="#fcea2b"></svg:circle><svg:circle cx="39" cy="40.91" r="1" fill="#fcea2b"></svg:circle><svg:path fill="none" stroke="#a57939" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M47 46.27a23.1 23.1 0 0 1-11 2.82m-11-2.82a23.1 23.1 0 0 0 11 2.82"></svg:path><svg:path fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 17h62v38H5z"></svg:path>`,
})
export class OpenmojiFlagStBarthelemyIcon {
  readonly viewBox = input("0 0 72 72")
  readonly width = input("1em")
  readonly height = input("1em")
}
