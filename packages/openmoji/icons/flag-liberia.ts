import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[openmojiFlagLiberiaIcon],svg[openmoji-flag-liberia-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#fff" d="M5 17h62v38H5z"></svg:path><svg:path fill="#d22f27" d="M5 17h62v5H5zm0 9h62v4H5zm0 8h62v4H5zm0 8h62v4H5zm0 8h62v5H5z"></svg:path><svg:path fill="#1e50a0" d="M5 17h17v17H5z"></svg:path><svg:path fill="#fff" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" d="M14.455 26.09L16 24.91h-1.91L13.5 23l-.59 1.91H11l1.545 1.18l-.59 1.91l1.545-1.18L15.045 28z"></svg:path><svg:path fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 17h62v38H5z"></svg:path>`,
})
export class OpenmojiFlagLiberiaIcon {
  readonly viewBox = input("0 0 72 72")
  readonly width = input("1em")
  readonly height = input("1em")
}
