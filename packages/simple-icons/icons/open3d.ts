import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[simpleIconsOpen3dIcon],svg[simple-icons-open3d-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5.998 1.606L0 12l5.998 10.394h2.094l1.954-3.383H7.952L4.06 12.268h8.149l3.56 6.157L19.483 12l-3.715-6.444l-3.56 6.18H4.055l3.893-6.747h2.098L8.088 1.606Zm2.71 0l1.954 3.383h5.386L20.096 12l-4.044 7.011h-5.394l-1.954 3.383h9.294l.488-.847L24 12L18.002 1.606Z"></svg:path>`,
})
export class SimpleIconsOpen3dIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
