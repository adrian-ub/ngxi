import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[riRssFillIcon],svg[ri-rss-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 3c9.941 0 18 8.059 18 18h-3c0-8.284-6.716-15-15-15zm0 7c6.075 0 11 4.925 11 11h-3a8 8 0 0 0-8-8zm0 7a4 4 0 0 1 4 4H3z"></svg:path>`,
})
export class RiRssFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
