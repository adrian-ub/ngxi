import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[openmojiFlagPanamaIcon],svg[openmoji-flag-panama-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#fff" d="M5 17h62v38H5z"></svg:path><svg:path fill="#1e50a0" d="M5 36h31v19H5z"></svg:path><svg:path fill="#d22f27" d="M36 17h31v19H36z"></svg:path><svg:path fill="#1e50a0" stroke="#1e50a0" stroke-linecap="round" stroke-linejoin="round" d="m18.962 29.167l1.659-5l1.431 4.924l-3.974-2.967l5-.123z"></svg:path><svg:path fill="#d22f27" stroke="#d22f27" stroke-linecap="round" stroke-linejoin="round" d="m50.962 48.167l1.659-5l1.431 4.924l-3.974-2.967l5-.123z"></svg:path><svg:path fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 17h62v38H5z"></svg:path>`,
})
export class OpenmojiFlagPanamaIcon {
  readonly viewBox = input("0 0 72 72")
  readonly width = input("1em")
  readonly height = input("1em")
}
