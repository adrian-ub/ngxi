import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[openmojiFlagPakistanIcon],svg[openmoji-flag-pakistan-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#186648" d="M5 17h62v38H5z"></svg:path><svg:path fill="#fff" d="M5 17h21v38H5z"></svg:path><svg:path fill="#fff" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" d="M50 44a11.992 11.992 0 0 1-9.847-18.847a11.995 11.995 0 1 0 16.694 16.694A11.94 11.94 0 0 1 50 44m3.453-14.48l1.347-1.854l-2.179.708l-1.348-1.854v2.292l-2.179.708l2.179.708v2.292l1.348-1.854l2.179.708z"></svg:path><svg:path fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 17h62v38H5z"></svg:path>`,
})
export class OpenmojiFlagPakistanIcon {
  readonly viewBox = input("0 0 72 72")
  readonly width = input("1em")
  readonly height = input("1em")
}
