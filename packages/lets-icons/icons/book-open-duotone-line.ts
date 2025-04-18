import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[letsIconsBookOpenDuotoneLineIcon],svg[lets-icons-book-open-duotone-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-opacity=".25" stroke="currentColor" stroke-width="1.2" d="M5 17h4a3 3 0 0 1 3 3V10c0-2.828 0-4.243-.879-5.121C10.243 4 8.828 4 6 4H5c-.943 0-1.414 0-1.707.293S3 5.057 3 6v9c0 .943 0 1.414.293 1.707S4.057 17 5 17Zm14 0h-4a3 3 0 0 0-3 3V10c0-2.828 0-4.243.879-5.121C13.757 4 15.172 4 18 4h1c.943 0 1.414 0 1.707.293S21 5.057 21 6v9c0 .943 0 1.414-.293 1.707S19.943 17 19 17Z"></svg:path>`,
})
export class LetsIconsBookOpenDuotoneLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
