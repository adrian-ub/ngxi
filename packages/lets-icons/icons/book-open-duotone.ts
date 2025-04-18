import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[letsIconsBookOpenDuotoneIcon],svg[lets-icons-book-open-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-opacity=".25" d="M5 17h4a3 3 0 0 1 3 3V10c0-2.828 0-4.243-.879-5.121C10.243 4 8.828 4 6 4H5c-.943 0-1.414 0-1.707.293S3 5.057 3 6v9c0 .943 0 1.414.293 1.707S4.057 17 5 17"></svg:path><svg:path fill="currentColor" d="M19 17h-3a3 3 0 0 0-3 3V10c0-2.828 0-4.243.879-5.121C14.757 4 16.172 4 19 4c.943 0 1.414 0 1.707.293S21 5.057 21 6v9c0 .943 0 1.414-.293 1.707S19.943 17 19 17M5 4.15A.15.15 0 0 1 5.15 4h2.7a.15.15 0 0 1 .15.15v4.246a.25.25 0 0 1-.427.177l-.896-.896a.25.25 0 0 0-.354 0l-.896.896A.25.25 0 0 1 5 8.396z"></svg:path>`,
})
export class LetsIconsBookOpenDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
