import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[simpleIconsUvIcon],svg[simple-icons-uv-icon]',
  host: {
    'role': 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m0 .106l.05 11.95l.04 9.56a2.39 2.39 0 0 0 2.4 2.379l9.56-.04l5.975-.026l.608-.002c1.316-.006 2.38-1.097 2.38-2.413h1.094v2.39H24L23.9.005L12.905.051l.046 9.525v5.963h-1.958l.046-5.955l-.046-9.525Z"></svg:path>`,
})
export class SimpleIconsUvIcon {
  readonly viewBox = input('0 0 24 24')
  readonly width = input('1em')
  readonly height = input('1em')
}
