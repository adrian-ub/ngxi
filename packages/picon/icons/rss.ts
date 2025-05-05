import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[piconRssIcon],svg[picon-rss-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M0 0q8 0 8 8H7q0-7-7-7m0 2q4 0 5 5H4Q3 4 0 4m0 4V6h2v2"></svg:path>`,
})
export class PiconRssIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}
