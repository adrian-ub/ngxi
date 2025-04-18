import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsMastodonRedirectIcon],svg[arcticons-mastodon-redirect-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M28.048 26.787v14.627h-8.042V29.809a5.52 5.52 0 0 0-1.255-3.495l-7.03-8.528l-6.221 6.22V6.614h17.394L17.806 11.7l6.06 7.341l.512.62l1.97 2.39a7.5 7.5 0 0 1 1.7 4.736"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M23.865 19.041L36.32 6.586l6.18 6.18l-14.452 14.466"></svg:path>`,
})
export class ArcticonsMastodonRedirectIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
