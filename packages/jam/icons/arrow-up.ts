import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[jamArrowUpIcon],svg[jam-arrow-up-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m6 4.071l-3.95 3.95A1 1 0 0 1 .636 6.607L6.293.95a.997.997 0 0 1 1.414 0l5.657 5.657A1 1 0 0 1 11.95 8.02L8 4.07v9.586a1 1 0 1 1-2 0z"></svg:path>`,
})
export class JamArrowUpIcon {
  readonly viewBox = input("-5 -4.5 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
