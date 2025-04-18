import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[openmojiFlagComorosIcon],svg[openmoji-flag-comoros-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#1e50a0" d="M5 17h62v38H5z"></svg:path><svg:path fill="#fff" d="M5 27h62v9H5z"></svg:path><svg:path fill="#d22f27" d="M5 36h62v9H5z"></svg:path><svg:path fill="#f1b31c" d="M5 17h62v10H5z"></svg:path><svg:path fill="#5c9e31" d="M37 36L5 55V17z"></svg:path><svg:g fill="#fff"><svg:circle cx="19" cy="31" r="1.044"></svg:circle><svg:circle cx="19" cy="34.333" r="1.044"></svg:circle><svg:circle cx="19" cy="37.667" r="1.044"></svg:circle><svg:circle cx="19" cy="41" r="1.044"></svg:circle></svg:g><svg:path fill="#fff" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" d="M11.693 36.125a7.48 7.48 0 0 1 5.989-7.357a7.4 7.4 0 0 0-1.437-.143a7.5 7.5 0 0 0 0 15a7.4 7.4 0 0 0 1.437-.143a7.48 7.48 0 0 1-5.99-7.357"></svg:path><svg:path fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 17h62v38H5z"></svg:path>`,
})
export class OpenmojiFlagComorosIcon {
  readonly viewBox = input("0 0 72 72")
  readonly width = input("1em")
  readonly height = input("1em")
}
