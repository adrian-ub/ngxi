import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[humbleiconsRssIcon],svg[humbleicons-rss-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M13 19a8 8 0 0 0-8-8m14 8c0-7.732-6.268-14-14-14"></svg:path><svg:circle cx="6" cy="18" r="2" fill="currentColor"></svg:circle></svg:g>`,
})
export class HumbleiconsRssIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
