import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[oouiWatchlistLtrIcon],svg[ooui-watchlist-ltr-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1 3h16v2H1Zm0 6h6v2H1Zm0 6h8v2H1Zm8-4.24h3.85L14.5 7l1.65 3.76H20l-3 3.17l.9 4.05l-3.4-2.14L11.1 18l.9-4.05Z"></svg:path>`,
})
export class OouiWatchlistLtrIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
