import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[oouiWatchlistRtlIcon],svg[ooui-watchlist-rtl-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19 3H3v2h16zm0 6h-6v2h6zm0 6h-8v2h8zm-8-4.24H7.15L5.5 7l-1.65 3.76H0l3 3.17l-.9 4.05l3.4-2.14L8.9 18L8 13.95Z"></svg:path>`,
})
export class OouiWatchlistRtlIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
