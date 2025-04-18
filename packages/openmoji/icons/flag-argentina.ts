import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[openmojiFlagArgentinaIcon],svg[openmoji-flag-argentina-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#1e50a0" d="M5 17h62v38H5z"></svg:path><svg:path fill="#fff" d="M5 17h62v38H5z"></svg:path><svg:path fill="#61b2e4" d="M5 42h62v13H5zm0-25h62v13H5z"></svg:path><svg:path fill="#f1b31c" stroke="#f1b31c" stroke-linecap="round" stroke-linejoin="round" d="M36 33.897L37.236 32l-.06 2.299l2.06-.771l-1.334 1.822L40 36l-2.098.65l1.334 1.822l-2.06-.771l.06 2.299L36 38.103L34.764 40l.06-2.299l-2.06.771l1.334-1.822L32 36l2.098-.65l-1.334-1.822l2.06.771l-.06-2.299z"></svg:path><svg:path fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 17h62v38H5z"></svg:path>`,
})
export class OpenmojiFlagArgentinaIcon {
  readonly viewBox = input("0 0 72 72")
  readonly width = input("1em")
  readonly height = input("1em")
}
