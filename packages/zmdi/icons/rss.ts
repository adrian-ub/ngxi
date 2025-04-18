import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[zmdiRssIcon],svg[zmdi-rss-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M47 269q19 0 33 13.5t14 33T80 349t-33 14t-33-14t-14-33.5t14-33T47 269M0 146q90 0 153.5 63.5T217 363h-62q0-64-45.5-109.5T0 208zM0 21q93 0 171.5 46t124 124.5T341 363h-62q0-116-81.5-198T0 83z"></svg:path>`,
})
export class ZmdiRssIcon {
  readonly viewBox = input("0 0 344 384")
  readonly width = input("0.9em")
  readonly height = input("1em")
}
