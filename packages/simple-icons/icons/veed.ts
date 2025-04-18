import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[simpleIconsVeedIcon],svg[simple-icons-veed-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M23.985 3.448L17.514 19.32a2.41 2.41 0 0 1-2.235 1.502h-6.54a2.41 2.41 0 0 1-2.234-1.5L.015 3.447a.196.196 0 0 1 .181-.27h6.55a.39.39 0 0 1 .368.254l4.905 13.083l4.866-13.082a.39.39 0 0 1 .367-.255h6.552c.139 0 .234.141.181.27z"></svg:path>`,
})
export class SimpleIconsVeedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
