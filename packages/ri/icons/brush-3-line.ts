import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[riBrush3LineIcon],svg[ri-brush-3-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8 19.997v-5h2v5h9v-7H5v7zm-4-9h16v-3h-6v-4h-4v4H4zm-1 10v-8H2v-6a1 1 0 0 1 1-1h5v-3a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1v3h5a1 1 0 0 1 1 1v6h-1v8a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1"></svg:path>`,
})
export class RiBrush3LineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
