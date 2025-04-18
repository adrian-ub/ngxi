import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[openmojiFlagGuyanaIcon],svg[openmoji-flag-guyana-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#5c9e31" d="M5 17h62v38H5z"></svg:path><svg:path fill="#fcea2b" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M66 36L5 55V17z"></svg:path><svg:path fill="#d22f27" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M26 36L5 55V17z"></svg:path><svg:path fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 17h62v38H5z"></svg:path>`,
})
export class OpenmojiFlagGuyanaIcon {
  readonly viewBox = input("0 0 72 72")
  readonly width = input("1em")
  readonly height = input("1em")
}
