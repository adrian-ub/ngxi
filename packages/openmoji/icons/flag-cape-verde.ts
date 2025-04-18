import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[openmojiFlagCapeVerdeIcon],svg[openmoji-flag-cape-verde-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#1e50a0" d="M5 17h62v38H5z"></svg:path><svg:path fill="#d22f27" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 41h62v6H5z"></svg:path><svg:g fill="#f1b31c"><svg:circle cx="25.1" cy="51" r="1.75"></svg:circle><svg:circle cx="25.1" cy="37" r="1.75"></svg:circle><svg:circle cx="29.215" cy="49.663" r="1.75"></svg:circle><svg:circle cx="20.985" cy="38.337" r="1.75"></svg:circle><svg:circle cx="29.215" cy="38.337" r="1.75"></svg:circle><svg:circle cx="20.985" cy="49.663" r="1.75"></svg:circle><svg:circle cx="31.757" cy="41.837" r="1.75"></svg:circle><svg:circle cx="18.443" cy="46.163" r="1.75"></svg:circle><svg:circle cx="31.757" cy="46.163" r="1.75"></svg:circle><svg:circle cx="18.443" cy="41.837" r="1.75"></svg:circle></svg:g><svg:path fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 17h62v38H5z"></svg:path>`,
})
export class OpenmojiFlagCapeVerdeIcon {
  readonly viewBox = input("0 0 72 72")
  readonly width = input("1em")
  readonly height = input("1em")
}
