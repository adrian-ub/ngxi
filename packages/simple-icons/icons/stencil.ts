import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[simpleIconsStencilIcon],svg[simple-icons-stencil-icon]',
  host: {
    'role': 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8.85 15.66h9.25l-5 5.34H3.9ZM24 9.328H4.997L0 14.672h19.003ZM10.884 3H20.1l-4.977 5.34H5.9Z"></svg:path>`,
})
export class SimpleIconsStencilIcon {
  readonly viewBox = input('0 0 24 24')
  readonly width = input('1em')
  readonly height = input('1em')
}
