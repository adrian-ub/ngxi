import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentColorDataTrending24Icon],svg[fluent-color-data-trending-24-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="url(#fluentColorDataTrending240)" d="M15 6a1 1 0 1 0 0 2h2.086l-3.836 3.836l-1.793-1.793a1 1 0 0 0-1.414 0l-3.25 3.25a1 1 0 1 0 1.414 1.414l2.543-2.543l1.793 1.793a1 1 0 0 0 1.414 0l4.544-4.543L18.5 11.5a1 1 0 1 0 2 0l.002-4.5a1 1 0 0 0-1-1z"></svg:path><svg:path fill="url(#fluentColorDataTrending241)" d="M5 4a1 1 0 0 0-2 0v13.5A3.5 3.5 0 0 0 6.5 21H20a1 1 0 1 0 0-2H6.5A1.5 1.5 0 0 1 5 17.5z"></svg:path><svg:defs><svg:lineargradient id="fluentColorDataTrending240" x1="5.423" x2="24.458" y1="14.5" y2="7.097" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#0FAFFF"></svg:stop><svg:stop offset=".445" stop-color="#9C6CFE"></svg:stop><svg:stop offset=".957" stop-color="#E656EB"></svg:stop></svg:lineargradient><svg:lineargradient id="fluentColorDataTrending241" x1="19.313" x2="3.56" y1="4.125" y2="27.58" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#70777D"></svg:stop><svg:stop offset="1" stop-color="#B9C0C7"></svg:stop></svg:lineargradient></svg:defs></svg:g>`,
})
export class FluentColorDataTrending24Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
