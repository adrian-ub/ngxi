import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineRssSymbolIcon],svg[streamline-rss-symbol-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M2.13 13.38a1.5 1.5 0 1 0 0-3a1.5 1.5 0 0 0 0 3m11.25-1.26A11.5 11.5 0 0 0 1.88.62m.24 4.76a6.5 6.5 0 0 1 6.5 6.5"></svg:path>`,
})
export class StreamlineRssSymbolIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
