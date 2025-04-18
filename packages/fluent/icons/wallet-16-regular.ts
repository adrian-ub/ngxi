import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentWallet16RegularIcon],svg[fluent-wallet-16-regular-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10.5 8a.5.5 0 0 0 0 1h1a.5.5 0 0 0 0-1zm-7-6A1.5 1.5 0 0 0 2 3.5v8A2.5 2.5 0 0 0 4.5 14H12a2 2 0 0 0 2-2V6a2 2 0 0 0-1-1.732V4a2 2 0 0 0-2-2zm0 1H11a1 1 0 0 1 1 1H3.5a.5.5 0 0 1 0-1m0 2H12a1 1 0 0 1 1 1v6a1 1 0 0 1-1 1H4.5A1.5 1.5 0 0 1 3 11.5V4.915q.236.084.5.085"></svg:path>`,
})
export class FluentWallet16RegularIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
