import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[flatColorIconsNeutralTradingIcon],svg[flat-color-icons-neutral-trading-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="#1565C0"><svg:path d="M43.4 13L35 20V6z"></svg:path><svg:path d="M4 11h34v4H4z"></svg:path></svg:g><svg:path fill="#2196F3" d="M40 23h4v19h-4zm-6 0h4v19h-4zm-6 0h4v19h-4zm-6 0h4v19h-4zm-6 0h4v19h-4zm-6 0h4v19h-4zm-6 0h4v19H4z"></svg:path>`,
})
export class FlatColorIconsNeutralTradingIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
