import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsWinbankIcon],svg[arcticons-winbank-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M11.896 36.026L4.5 11.974h7.303l8.185 24.083Zm8.092.031l4.137-12.228l-3.857-11.855l-4.105 12.197m4.105-12.197l7.557-.031l8.248 24.083h-7.744l-4.204-12.197m11.948 12.197L43.5 11.943h-7.24l-4.105 12.01"></svg:path>`,
})
export class ArcticonsWinbankIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
