import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[openmojiFlagEthiopiaIcon],svg[openmoji-flag-ethiopia-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#d22f27" d="M5 17h62v38H5z"></svg:path><svg:path fill="#fcea2b" d="M5 30h62v12H5z"></svg:path><svg:path fill="#5c9e31" d="M5 17h62v13H5z"></svg:path><svg:circle cx="36" cy="36" r="10" fill="#1e50a0"></svg:circle><svg:path fill="#fcea2b" stroke="#fcea2b" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="m36 31l2.781 9l-7.281-5.562h9L33.219 40z"></svg:path><svg:path fill="none" stroke="#fcea2b" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M36 44v-2m7.608-3.528l-1.902-.618m-1.004-8.326l-1.175 1.618m-8.229-1.618l1.175 1.618m-4.081 7.326l1.902-.618"></svg:path><svg:circle cx="36" cy="36" r="1.75" fill="#1e50a0"></svg:circle><svg:path fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 17h62v38H5z"></svg:path>`,
})
export class OpenmojiFlagEthiopiaIcon {
  readonly viewBox = input("0 0 72 72")
  readonly width = input("1em")
  readonly height = input("1em")
}
