import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[openmojiFlagZambiaIcon],svg[openmoji-flag-zambia-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#5c9e31" d="M5 17h62v38H5z"></svg:path><svg:path fill="#f1b31c" d="M61 36h6v19h-6z"></svg:path><svg:path fill="#d22f27" d="M51 36h5v19h-5z"></svg:path><svg:path d="M56 36h5v19h-5z"></svg:path><svg:path fill="none" stroke="#f1b31c" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m53 31l5.75 1L64 31"></svg:path><svg:path fill="none" stroke="#f1b31c" stroke-linecap="round" stroke-linejoin="round" d="M58 32v2m1-2v2m-.5-3.5v2"></svg:path><svg:path fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 17h62v38H5z"></svg:path>`,
})
export class OpenmojiFlagZambiaIcon {
  readonly viewBox = input("0 0 72 72")
  readonly width = input("1em")
  readonly height = input("1em")
}
