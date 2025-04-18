import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentColorFlag20Icon],svg[fluent-color-flag-20-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="url(#fluentColorFlag200)" d="M4.75 11.25a.75.75 0 0 1 .75.75v5.5a.75.75 0 0 1-1.5 0V12a.75.75 0 0 1 .75-.75"></svg:path><svg:path fill="url(#fluentColorFlag201)" d="M4 12.5a.5.5 0 0 0 .5.5h12a.5.5 0 0 0 .416-.777L14.101 8l2.815-4.223A.5.5 0 0 0 16.5 3h-12a.5.5 0 0 0-.5.5z"></svg:path><svg:defs><svg:lineargradient id="fluentColorFlag200" x1="5.5" x2="5" y1="20.5" y2="11.5" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#889096"></svg:stop><svg:stop offset="1" stop-color="#63686E"></svg:stop></svg:lineargradient><svg:lineargradient id="fluentColorFlag201" x1="1.156" x2="6.777" y1=".143" y2="13.555" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#F97DBD"></svg:stop><svg:stop offset="1" stop-color="#D7257D"></svg:stop></svg:lineargradient></svg:defs></svg:g>`,
})
export class FluentColorFlag20Icon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
