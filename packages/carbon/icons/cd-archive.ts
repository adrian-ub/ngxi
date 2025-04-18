import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[carbonCdArchiveIcon],svg[carbon-cd-archive-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M16 28a12 12 0 1 1 12-12a12 12 0 0 1-12 12zm0-22a10 10 0 1 0 10 10A10 10 0 0 0 16 6z" fill="currentColor"></svg:path><svg:path d="M16 22a6 6 0 1 1 6-6a6 6 0 0 1-6 6zm0-10a4 4 0 1 0 4 4a4 4 0 0 0-4-4z" fill="currentColor"></svg:path><svg:circle cx="16" cy="16" r="2" fill="currentColor"></svg:circle>`,
})
export class CarbonCdArchiveIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
