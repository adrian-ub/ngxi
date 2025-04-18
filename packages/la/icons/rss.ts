import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[laRssIcon],svg[la-rss-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 5v4c9.93 0 18 8.07 18 18h4C27 14.85 17.15 5 5 5m0 7v4c6.07 0 11 4.93 11 11h4c0-8.28-6.72-15-15-15m3 9a3 3 0 0 0 0 6a3 3 0 0 0 0-6"></svg:path>`,
})
export class LaRssIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
