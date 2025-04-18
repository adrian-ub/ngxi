import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[openmojiFlagLaosIcon],svg[openmoji-flag-laos-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#1e50a0" d="M5 17h62v38H5z"></svg:path><svg:circle cx="36" cy="36.013" r="8.5" fill="#fff"></svg:circle><svg:path fill="#d22f27" d="M5 48h62v7H5zm0-31h62v7H5z"></svg:path><svg:path fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 17h62v38H5z"></svg:path>`,
})
export class OpenmojiFlagLaosIcon {
  readonly viewBox = input("0 0 72 72")
  readonly width = input("1em")
  readonly height = input("1em")
}
