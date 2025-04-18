import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[codiconRssIcon],svg[codicon-rss-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M5 13H3v-2c1.11 0 2 .89 2 2M3 3v1a9 9 0 0 1 9 9h1C13 7.48 8.52 3 3 3m0 4v1c2.75 0 5 2.25 5 5h1c0-3.31-2.69-6-6-6" clip-rule="evenodd"></svg:path>`,
})
export class CodiconRssIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
