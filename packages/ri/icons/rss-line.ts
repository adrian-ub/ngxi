import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[riRssLineIcon],svg[ri-rss-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 17a4 4 0 0 1 4 4H3zm0-7c6.075 0 11 4.925 11 11h-2a9 9 0 0 0-9-9zm0-7c9.941 0 18 8.059 18 18h-2c0-8.837-7.163-16-16-16z"></svg:path>`,
})
export class RiRssLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
