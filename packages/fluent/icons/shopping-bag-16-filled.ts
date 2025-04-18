import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentShoppingBag16FilledIcon],svg[fluent-shopping-bag-16-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 5V3a2 2 0 0 1 3-1.732A2 2 0 0 1 11 3v2h.5A1.5 1.5 0 0 1 13 6.5v7a1.5 1.5 0 0 1-3 0V3a1 1 0 0 0-1.25-.969c.16.287.25.618.25.969v10.5c0 .563.186 1.082.5 1.5H5a2 2 0 0 1-2-2V6.5A1.5 1.5 0 0 1 4.5 5zm2-3a1 1 0 0 0-1 1v2h2V3a1 1 0 0 0-1-1"></svg:path>`,
})
export class FluentShoppingBag16FilledIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
