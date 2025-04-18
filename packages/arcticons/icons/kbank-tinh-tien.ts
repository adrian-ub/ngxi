import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsKbankTinhTienIcon],svg[arcticons-kbank-tinh-tien-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M14.026 16.433a10.117 10.117 0 0 1 19.948-.002"></svg:path><svg:path d="m20.087 15.045l1.998 2.386l5.71-6.408"></svg:path><svg:path d="M9.395 5.5h29.21A3.886 3.886 0 0 1 42.5 9.395v29.21a3.886 3.886 0 0 1-3.895 3.895H9.395A3.886 3.886 0 0 1 5.5 38.605V9.395A3.886 3.886 0 0 1 9.395 5.5"></svg:path><svg:path d="m42.258 13.166l-12.93 5.281c-3.289 1.343-7.367 1.343-10.655 0l-12.93-5.281"></svg:path></svg:g>`,
})
export class ArcticonsKbankTinhTienIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
