import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[openmojiFlagCentralAfricanRepublicIcon],svg[openmoji-flag-central-african-republic-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#f1b31c" d="M5 17h62v38H5z"></svg:path><svg:path fill="#1e50a0" d="M5 17h62v10H5z"></svg:path><svg:path fill="#fff" d="M5 27h62v9H5z"></svg:path><svg:path fill="#5c9e31" d="M5 36h62v9H5z"></svg:path><svg:path fill="#d22f27" d="M33 17h6v38h-6z"></svg:path><svg:path fill="#f1b31c" stroke="#f1b31c" stroke-linecap="round" stroke-linejoin="round" d="m12.906 19.603l1.545 5l-4.045-3.09h5l-4.045 3.09z"></svg:path><svg:path fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 17h62v38H5z"></svg:path>`,
})
export class OpenmojiFlagCentralAfricanRepublicIcon {
  readonly viewBox = input("0 0 72 72")
  readonly width = input("1em")
  readonly height = input("1em")
}
