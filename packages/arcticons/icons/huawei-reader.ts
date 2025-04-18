import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsHuaweiReaderIcon],svg[arcticons-huawei-reader-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:rect width="16.137" height="13.75" x="5.5" y="17.125" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" rx=".992"></svg:rect><svg:rect width="16.137" height="13.75" x="26.363" y="17.125" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" rx=".992"></svg:rect><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M21.637 23.045h4.727m4.916-1.075v4.536M10.107 21.97v4.536"></svg:path>`,
})
export class ArcticonsHuaweiReaderIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
