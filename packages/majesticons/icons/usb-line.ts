import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[majesticonsUsbLineIcon],svg[majesticons-usb-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6v1m4-1v1m-6 4h8a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1H8a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1m2 8H9a4 4 0 0 1-4-4v-3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v3a4 4 0 0 1-4 4h-1m-4 0v2m0-2h4m0 0v2"></svg:path>`,
})
export class MajesticonsUsbLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
