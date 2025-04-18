import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[grommetIconsRssIcon],svg[grommet-icons-rss-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-width="2" d="M22 21C22 10.507 13.493 2 3 2m14 19c0-7.732-6.268-14-14-14m9 14a9 9 0 0 0-9-9m1 11a3 3 0 1 0 0-6a3 3 0 0 0 0 6Z"></svg:path>`,
})
export class GrommetIconsRssIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
