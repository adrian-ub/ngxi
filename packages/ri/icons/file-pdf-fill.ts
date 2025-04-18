import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[riFilePdfFillIcon],svg[ri-file-pdf-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m16 2l5 5v14.008a.993.993 0 0 1-.993.992H3.993A1 1 0 0 1 3 21.008V2.992C3 2.444 3.445 2 3.993 2zm-4 14a4 4 0 0 0 0-8H8v8zm-2-6h2a2 2 0 1 1 0 4h-2z"></svg:path>`,
})
export class RiFilePdfFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
