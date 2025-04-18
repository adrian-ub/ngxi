import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[openmojiFlagElSalvadorIcon],svg[openmoji-flag-el-salvador-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#1e50a0" d="M5 17h62v38H5z"></svg:path><svg:path fill="#fff" d="M5 30h62v12H5z"></svg:path><svg:path fill="none" stroke="#186648" stroke-linecap="round" stroke-linejoin="round" d="M39.5 36a3.5 3.5 0 0 1-7 0"></svg:path><svg:circle cx="36" cy="36" r="4.5" fill="none" stroke="#fcea2b" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:path fill="#fcea2b" stroke="#fcea2b" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m36 34l-2 3h4z"></svg:path><svg:path fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 17h62v38H5z"></svg:path>`,
})
export class OpenmojiFlagElSalvadorIcon {
  readonly viewBox = input("0 0 72 72")
  readonly width = input("1em")
  readonly height = input("1em")
}
