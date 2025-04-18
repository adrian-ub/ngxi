import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[carbonChooseItemIcon],svg[carbon-choose-item-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M28 6h2v20h-2zM17 6l-1.43 1.393L23.15 15H2v2h21.15l-7.58 7.573L17 26l10-10z"></svg:path>`,
})
export class CarbonChooseItemIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
