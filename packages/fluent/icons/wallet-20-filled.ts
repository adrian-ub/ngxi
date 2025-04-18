import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentWallet20FilledIcon],svg[fluent-wallet-20-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4.5 3A1.5 1.5 0 0 0 3 4.5v10A2.5 2.5 0 0 0 5.5 17H15a2 2 0 0 0 2-2V7a2 2 0 0 0-1-1.732V5a2 2 0 0 0-2-2zM15 5H4.5a.5.5 0 0 1 0-1H14a1 1 0 0 1 1 1m-1.5 6h1a.5.5 0 0 1 0 1h-1a.5.5 0 0 1 0-1"></svg:path>`,
})
export class FluentWallet20FilledIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
