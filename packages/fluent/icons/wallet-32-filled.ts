import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentWallet32FilledIcon],svg[fluent-wallet-32-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 6a3 3 0 0 1 3-3h16.75A3.25 3.25 0 0 1 26 6.25v1.006c1.748.618 3 2.285 3 4.244v13a4.5 4.5 0 0 1-4.5 4.5h-17A4.5 4.5 0 0 1 3 24.5V6.25h.01A3 3 0 0 1 3 6m21 .25C24 5.56 23.44 5 22.75 5H6a1 1 0 0 0 0 2h18zM21 18a1 1 0 1 0 0 2h3a1 1 0 1 0 0-2z"></svg:path>`,
})
export class FluentWallet32FilledIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
