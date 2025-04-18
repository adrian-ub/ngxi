import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[openmojiFlagTajikistanIcon],svg[openmoji-flag-tajikistan-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#5c9e31" d="M5 17h62v38H5z"></svg:path><svg:path fill="#d22f27" d="M5 17h62v13H5z"></svg:path><svg:path fill="#fff" d="M5 30h62v12H5z"></svg:path><svg:circle cx="36" cy="35.155" r=".497" fill="#fcea2b" stroke="#fcea2b" stroke-miterlimit="10" stroke-width=".994"></svg:circle><svg:rect width=".928" height="3.975" x="35.536" y="35.155" fill="#fcea2b" rx=".306" ry=".306"></svg:rect><svg:path fill="none" stroke="#fcea2b" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.988" d="M38.982 40.125a4.214 4.214 0 0 0-5.963 0"></svg:path><svg:g fill="#fcea2b" stroke="#fcea2b" stroke-miterlimit="10"><svg:circle cx="41" cy="37" r=".5"></svg:circle><svg:circle cx="40.2" cy="34.6" r=".5"></svg:circle><svg:circle cx="38.4" cy="32.9" r=".5"></svg:circle><svg:circle cx="36" cy="32.2" r=".5"></svg:circle><svg:circle cx="33.6" cy="32.9" r=".5"></svg:circle><svg:circle cx="31.8" cy="34.6" r=".5"></svg:circle><svg:circle cx="31" cy="37" r=".5"></svg:circle></svg:g><svg:path fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 17h62v38H5z"></svg:path>`,
})
export class OpenmojiFlagTajikistanIcon {
  readonly viewBox = input("0 0 72 72")
  readonly width = input("1em")
  readonly height = input("1em")
}
