import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[openmojiFlagCubaIcon],svg[openmoji-flag-cuba-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#fff" d="M5 17h62v38H5z"></svg:path><svg:path fill="#1e50a0" d="M5 32h62v8H5zm0 15h62v8H5zm0-30h62v8H5z"></svg:path><svg:path fill="#d22f27" d="M5 55V17l32.91 19l-16.45 9.5z"></svg:path><svg:path fill="#fff" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width=".868" d="m15.975 30.746l1.234 3.551l3.759.077l-2.996 2.27l1.089 3.599l-3.086-2.147l-3.085 2.147l1.089-3.598l-2.996-2.272l3.758-.077z"></svg:path><svg:path fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 17h62v38H5z"></svg:path>`,
})
export class OpenmojiFlagCubaIcon {
  readonly viewBox = input("0 0 72 72")
  readonly width = input("1em")
  readonly height = input("1em")
}
