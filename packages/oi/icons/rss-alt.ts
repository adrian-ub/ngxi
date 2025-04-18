import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[oiRssAltIcon],svg[oi-rss-alt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M0 0v2c3.33 0 6 2.67 6 6h2c0-4.41-3.59-8-8-8m0 3v2c1.67 0 3 1.33 3 3h2c0-2.75-2.25-5-5-5m0 3v2h2a2 2 0 0 0-2-2"></svg:path>`,
})
export class OiRssAltIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}
