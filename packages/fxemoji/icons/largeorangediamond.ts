import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fxemojiLargeorangediamondIcon],svg[fxemoji-largeorangediamond-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#FF8E39" d="M500.426 271.4c8.378-8.378 8.378-22.088 0-30.466L269.543 10.051c-7.54-7.54-19.879-7.54-27.419 0L9.718 242.457c-7.54 7.54-7.54 19.879 0 27.419L240.6 500.759c8.378 8.378 22.088 8.378 30.466 0z"></svg:path>`,
})
export class FxemojiLargeorangediamondIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
