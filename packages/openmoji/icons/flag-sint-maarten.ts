import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[openmojiFlagSintMaartenIcon],svg[openmoji-flag-sint-maarten-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#d22f27" d="M5 17h62v38H5z"></svg:path><svg:path fill="#1e50a0" d="M5 36h62v19H5z"></svg:path><svg:path fill="#fff" d="M26 36L5 55V17z"></svg:path><svg:circle cx="13" cy="31" r="2.5" fill="#fcea2b" stroke="#fcea2b" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:path fill="#92d3f5" stroke="#d22f27" stroke-linecap="round" stroke-linejoin="round" d="M18 31.776v4.612C18 39.847 13.042 41 13.042 41s-4.959-1.153-4.959-4.612v-4.612a16.7 16.7 0 0 1 9.917 0"></svg:path><svg:path fill="none" stroke="#fcea2b" stroke-linecap="round" stroke-linejoin="round" d="M19 39c0 1.933-2.686 3.5-6 3.5S7 40.933 7 39"></svg:path><svg:path fill="#fff" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 34h4v3h-4z"></svg:path><svg:path fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 17h62v38H5z"></svg:path>`,
})
export class OpenmojiFlagSintMaartenIcon {
  readonly viewBox = input("0 0 72 72")
  readonly width = input("1em")
  readonly height = input("1em")
}
