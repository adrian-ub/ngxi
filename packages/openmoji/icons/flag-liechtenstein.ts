import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[openmojiFlagLiechtensteinIcon],svg[openmoji-flag-liechtenstein-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#1e50a0" d="M5 17h62v38H5z"></svg:path><svg:path fill="#d22f27" d="M5 36h62v19H5z"></svg:path><svg:path fill="#fcea2b" stroke="#fcea2b" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M18 22v8"></svg:path><svg:path fill="none" stroke="#fcea2b" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M18 28a3 3 0 0 1 3-3c1.657 0 4.14 1.473 2 6H13c-2.14-4.527.343-6 2-6a3 3 0 0 1 3 3"></svg:path><svg:path fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 17h62v38H5z"></svg:path>`,
})
export class OpenmojiFlagLiechtensteinIcon {
  readonly viewBox = input("0 0 72 72")
  readonly width = input("1em")
  readonly height = input("1em")
}
