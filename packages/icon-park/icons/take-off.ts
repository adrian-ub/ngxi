import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkTakeOffIcon],svg[icon-park-take-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="M22 29L13.7763 33.1118C12.6994 33.6503 11.4049 33.4927 10.4886 32.7117L4 27.1808L7.56226 25.8157C8.19869 25.5718 8.8992 25.5519 9.54846 25.7592L12.8273 26.8063C13.5787 27.0463 14.3944 26.9807 15.0977 26.6237L37.36 15.3248C37.7807 15.1113 38.2459 15 38.7177 15H44L42.4472 18.1056C42.1569 18.6862 41.6862 19.1569 41.1056 19.4472L32 24"></svg:path><svg:path d="M22.0007 29L18.0003 31L23.0003 41L32.0003 24"></svg:path><svg:path d="M17 25L12 16L28 20"></svg:path></svg:g>`,
})
export class IconParkTakeOffIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
