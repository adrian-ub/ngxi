import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[majesticonsDataMinusLineIcon],svg[majesticons-data-minus-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 7c0 2.21-4.03 4-9 4S3 9.21 3 7m18 0c0-2.21-4.03-4-9-4S3 4.79 3 7m18 0v5M3 7v5m9 4c-4.97 0-9-1.79-9-4m0 0v5c0 2.21 4.03 4 9 4m9-3h-6"></svg:path>`,
})
export class MajesticonsDataMinusLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
