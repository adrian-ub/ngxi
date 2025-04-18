import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsSamsungBrowserIcon],svg[arcticons-samsung-browser-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M33.49 34.544a14.185 14.185 0 0 1-23.024-6.289m-.19-7.845a14.186 14.186 0 1 1 27.295 7.723"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M37.7 27.672c-.794 2.964-7.57 3.722-15.137 1.694S9.507 23.292 10.3 20.328"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M37.604 19.785c4.23 2.93 6.54 6.402 5.738 9.4c-1.358 5.07-11.12 6.86-21.802 3.997S3.3 23.887 4.658 18.816c.809-3.02 4.6-4.877 9.79-5.28"></svg:path>`,
})
export class ArcticonsSamsungBrowserIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
