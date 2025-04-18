import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[riBrush3FillIcon],svg[ri-brush-3-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20 10.997v-3h-6v-4h-4v4H4v3zm1 2v8a1 1 0 0 1-1 1H10v-6H8v6H4a1 1 0 0 1-1-1v-8H2v-6a1 1 0 0 1 1-1h5v-3a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1v3h5a1 1 0 0 1 1 1v6z"></svg:path>`,
})
export class RiBrush3FillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
