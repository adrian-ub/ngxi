import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[openmojiFlagEquatorialGuineaIcon],svg[openmoji-flag-equatorial-guinea-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#d22f27" d="M5 17h62v38H5z"></svg:path><svg:path fill="#fff" d="M5 30h62v12H5z"></svg:path><svg:path fill="#5c9e31" d="M5 17h62v13H5z"></svg:path><svg:path fill="#1e50a0" d="M26 36L5 55V17z"></svg:path><svg:path fill="none" stroke="#6a462f" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M40 34.5v4"></svg:path><svg:path fill="#5c9e31" stroke="#5c9e31" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M38 33.5h4"></svg:path><svg:path fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 17h62v38H5z"></svg:path>`,
})
export class OpenmojiFlagEquatorialGuineaIcon {
  readonly viewBox = input("0 0 72 72")
  readonly width = input("1em")
  readonly height = input("1em")
}
