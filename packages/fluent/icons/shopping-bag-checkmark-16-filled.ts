import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentShoppingBagCheckmark16FilledIcon],svg[fluent-shopping-bag-checkmark-16-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 5V3a2 2 0 0 1 3-1.732A2 2 0 0 1 11 3v2h.5a1.5 1.5 0 0 1 1.47 1.199a5.5 5.5 0 0 0-2.97.008V3a1 1 0 0 0-1.25-.969c.16.287.25.618.25.969v3.6A5.5 5.5 0 0 0 7.257 15H5a2 2 0 0 1-2-2V6.5A1.5 1.5 0 0 1 4.5 5zm2-3a1 1 0 0 0-1 1v2h2V3a1 1 0 0 0-1-1m9 9.5a4.5 4.5 0 1 1-9 0a4.5 4.5 0 0 1 9 0m-2.146-1.854a.5.5 0 0 0-.708 0L10.5 12.293l-.646-.647a.5.5 0 0 0-.708.708l1 1a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0 0-.708"></svg:path>`,
})
export class FluentShoppingBagCheckmark16FilledIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
