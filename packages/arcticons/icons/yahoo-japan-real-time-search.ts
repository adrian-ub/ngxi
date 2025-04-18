import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsYahooJapanRealTimeSearchIcon],svg[arcticons-yahoo-japan-real-time-search-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M24 2.5C12.126 2.5 2.5 12.126 2.5 24S12.126 45.5 24 45.5a21.5 21.5 0 0 0 12.705-4.223l5.594 1.022l-1.022-5.594A21.5 21.5 0 0 0 45.5 24c0-11.874-9.626-21.5-21.5-21.5"></svg:path><svg:circle cx="23.5" cy="23.5" r="12" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m31.985 31.985l4.323 4.323"></svg:path>`,
})
export class ArcticonsYahooJapanRealTimeSearchIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
