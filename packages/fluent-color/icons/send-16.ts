import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentColorSend16Icon],svg[fluent-color-send-16-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="url(#fluentColorSend162)" d="M8.805 8.958L1.994 11l.896-3l-.896-3l6.811 2.042c.95.285.95 1.63 0 1.916"></svg:path><svg:path fill="url(#fluentColorSend160)" d="M1.724 1.053a.5.5 0 0 0-.714.545l1.403 4.85a.5.5 0 0 0 .397.354l5.69.953c.268.053.268.437 0 .49l-5.69.953a.5.5 0 0 0-.397.354l-1.403 4.85a.5.5 0 0 0 .714.545l13-6.5a.5.5 0 0 0 0-.894z"></svg:path><svg:path fill="url(#fluentColorSend161)" d="M1.724 1.053a.5.5 0 0 0-.714.545l1.403 4.85a.5.5 0 0 0 .397.354l5.69.953c.268.053.268.437 0 .49l-5.69.953a.5.5 0 0 0-.397.354l-1.403 4.85a.5.5 0 0 0 .714.545l13-6.5a.5.5 0 0 0 0-.894z"></svg:path><svg:defs><svg:lineargradient id="fluentColorSend160" x1="1" x2="12.99" y1="-4.688" y2="11.244" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#3BD5FF"></svg:stop><svg:stop offset="1" stop-color="#0094F0"></svg:stop></svg:lineargradient><svg:lineargradient id="fluentColorSend161" x1="8" x2="11.641" y1="4.773" y2="14.624" gradientUnits="userSpaceOnUse"><svg:stop offset=".125" stop-color="#DCF8FF" stop-opacity="0"></svg:stop><svg:stop offset=".769" stop-color="#FF6CE8" stop-opacity=".7"></svg:stop></svg:lineargradient><svg:radialgradient id="fluentColorSend162" cx="0" cy="0" r="1" gradientTransform="matrix(7.43807 0 0 1.12359 .5 8)" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#0094F0"></svg:stop><svg:stop offset="1" stop-color="#2052CB"></svg:stop></svg:radialgradient></svg:defs></svg:g>`,
})
export class FluentColorSend16Icon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
