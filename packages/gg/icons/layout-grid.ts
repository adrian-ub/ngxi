import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ggLayoutGridIcon],svg[gg-layout-grid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11 7H7v4h4zm0 6H7v4h4zm2 0h4v4h-4zm4-6h-4v4h4z"></svg:path>`,
})
export class GgLayoutGridIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
