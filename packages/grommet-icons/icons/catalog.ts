import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[grommetIconsCatalogIcon],svg[grommet-icons-catalog-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-width="2" d="M5 6L1 4.5v13.943L12 23l11-4.557V4l-4 2M5 16V2l7 3l7-3v14l-7 3zm6.95-11v14"></svg:path>`,
})
export class GrommetIconsCatalogIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
