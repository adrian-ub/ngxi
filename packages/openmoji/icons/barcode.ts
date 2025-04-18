import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[openmojiBarcodeIcon],svg[openmoji-barcode-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#fff" d="M5 17h62v38H5z"></svg:path><svg:g stroke="#000" stroke-linejoin="round" stroke-width="2"><svg:path fill="none" d="M5 17h62v38H5z"></svg:path><svg:path fill="none" stroke-linecap="round" d="M9 21v31m3-31v31m0-31v31m8-31v29m8-29v29"></svg:path><svg:path stroke-linecap="round" d="M15 50V21h2v29zm8 0V21h2v29zm8 0V21h1v29z"></svg:path><svg:path fill="none" stroke-linecap="round" d="M46 21v29m3-29v29m8-29v29"></svg:path><svg:path stroke-linecap="round" d="M41 50V21h2v29zm11 0V21h2v29z"></svg:path><svg:path fill="none" stroke-linecap="round" d="M60 21v31m3-31v31M35 21v31m3-31v31"></svg:path></svg:g>`,
})
export class OpenmojiBarcodeIcon {
  readonly viewBox = input("0 0 72 72")
  readonly width = input("1em")
  readonly height = input("1em")
}
