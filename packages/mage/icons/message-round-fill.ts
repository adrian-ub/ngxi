import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mageMessageRoundFillIcon],svg[mage-message-round-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21.99 12a9.9 9.9 0 0 1-.76 3.83a9.7 9.7 0 0 1-2.17 3.24a10 10 0 0 1-3.24 2.17a9.9 9.9 0 0 1-3.83.76a9.7 9.7 0 0 1-3.88-.79l-3.65.54a1.94 1.94 0 0 1-2.21-2.33l.5-3.65A9.6 9.6 0 0 1 2.01 12a9.8 9.8 0 0 1 .76-3.82a10 10 0 0 1 2.16-3.25a10 10 0 0 1 14.15 0a9.7 9.7 0 0 1 2.17 3.25a9.8 9.8 0 0 1 .74 3.82"></svg:path>`,
})
export class MageMessageRoundFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
