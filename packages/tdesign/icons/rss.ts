import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignRssIcon],svg[tdesign-rss-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 3h1c9.389 0 17 7.611 17 17v1h-2v-1c0-8.284-6.716-15-15-15H3zm0 7h1c5.523 0 10 4.477 10 10v1h-2v-1a8 8 0 0 0-8-8H3zm0 9a2 2 0 1 1 4 0a2 2 0 0 1-4 0"></svg:path>`,
})
export class TdesignRssIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
