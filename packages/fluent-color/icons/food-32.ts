import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentColorFood32Icon],svg[fluent-color-food-32-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="url(#fluentColorFood320)" d="M25.5 2A7.5 7.5 0 0 0 18 9.5v4a2.5 2.5 0 0 0 2.5 2.5h.389a616 616 0 0 0-.431 4.262c-.23 2.37-.458 4.9-.458 5.738a4 4 0 1 0 8 0c0-.985-.317-4.033-.586-6.631l-.013-.122a425 425 0 0 1-.283-2.781C27.04 15.668 27 15.158 27 15V3a1 1 0 0 0-1-1z"></svg:path><svg:path fill="url(#fluentColorFood321)" d="M14.974 2.773a1 1 0 0 0-1.035-.771c-.53.03-.949.467-.949 1.004v6a.995.995 0 0 1-1.99.03V3a1 1 0 1 0-2 0v6.065a.995.995 0 0 1-1.988-.06V3.007a1.007 1.007 0 0 0-1.986-.233C5.004 2.866 4 7.14 4 10a5.99 5.99 0 0 0 2.27 4.7c.496.394.73.823.73 1.182a1 1 0 0 1-.007.114c-.06.504-.307 2.594-.539 4.753C6.226 22.872 6 25.16 6 26a4 4 0 0 0 8 0c0-.839-.226-3.128-.454-5.251c-.232-2.159-.48-4.25-.54-4.753a1 1 0 0 1-.006-.114c0-.359.234-.788.73-1.182A5.99 5.99 0 0 0 16 10c0-2.862-1.007-7.144-1.026-7.227m-1.08-.768l.02-.001h-.008l-.008.001z"></svg:path><svg:defs><svg:lineargradient id="fluentColorFood320" x1="16.462" x2="40.694" y1="3.75" y2="11.981" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#6CE0FF"></svg:stop><svg:stop offset="1" stop-color="#0067BF"></svg:stop></svg:lineargradient><svg:lineargradient id="fluentColorFood321" x1="2.154" x2="29.967" y1="3.75" y2="15.086" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#6CE0FF"></svg:stop><svg:stop offset="1" stop-color="#0067BF"></svg:stop></svg:lineargradient></svg:defs></svg:g>`,
})
export class FluentColorFood32Icon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
