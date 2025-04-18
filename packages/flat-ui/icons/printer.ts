import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[flatUiPrinterIcon],svg[flat-ui-printer-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#2C3E50" d="M13 20h74a3 3 0 0 1 3 3v7H10v-7a3 3 0 0 1 3-3"></svg:path><svg:path fill="#BDC3C7" d="M6 30h88c3.312 0 6 2.687 6 6v38c0 3.312-2.688 6-6 6H6c-3.313 0-6-2.688-6-6V36a6 6 0 0 1 6-6"></svg:path><svg:path fill="#2C3E50" d="M14 60h72a4 4 0 0 1 4 4v16H10V64a4 4 0 0 1 4-4"></svg:path><svg:path fill="#EBEDEE" d="M20 70h60v30H20zm60-40V0H20v30H10v16a4 4 0 0 0 4 4h72a4 4 0 0 0 4-4V30z"></svg:path><svg:path fill="#BDC3C7" d="M30 14v2h40v-2zm0 6h40v-2H30zm0 4h40v-2H30z"></svg:path><svg:path fill="#BDC3C7" d="M30 6v2h40V6zm0 6h40v-2H30zm0 4h40v-2H30z"></svg:path><svg:path fill="#D3D5D6" d="M20 70h60v2H20zm0-42h60v2H20z"></svg:path><svg:path fill="#E74C3C" d="M23 37a3 3 0 1 1 0 6a3 3 0 0 1 0-6"></svg:path>`,
})
export class FlatUiPrinterIcon {
  readonly viewBox = input("0 0 100 100")
  readonly width = input("1em")
  readonly height = input("1em")
}
