import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsHibymusicIcon],svg[arcticons-hibymusic-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linejoin="round"><svg:circle cx="25.328" cy="23.997" r="9.244"></svg:circle><svg:circle cx="25.328" cy="23.997" r="2.464"></svg:circle><svg:path stroke-linecap="round" d="M26.194 19.543a4.54 4.54 0 0 1 3.566 3.48m-5.299 5.43a4.54 4.54 0 0 1-3.566-3.48m5.905-7.94a7.12 7.12 0 0 1 5.432 5.233m-8.377 8.698a7.12 7.12 0 0 1-5.432-5.233"></svg:path><svg:g stroke-linecap="round"><svg:path d="M11.038 23.96c.015-7.891 6.424-14.277 14.316-14.263c7.892.015 14.277 6.424 14.263 14.316c-.008 7.887-6.405 14.276-14.292 14.275"></svg:path><svg:path d="M44.175 34.34c-5.712 10.41-18.78 14.217-29.19 8.505A21.5 21.5 0 0 1 4.657 29.9C1.396 18.483 8.01 6.585 19.426 3.326a21.5 21.5 0 0 1 16.45 1.939"></svg:path></svg:g><svg:path stroke-linecap="round" d="m35.874 5.264l-.004 9.087"></svg:path></svg:g><svg:circle cx="25.328" cy="23.997" r=".75" fill="currentColor"></svg:circle>`,
})
export class ArcticonsHibymusicIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
