import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsUdeappIcon],svg[arcticons-udeapp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M24.655 35.892a3.864 3.864 0 0 1 3.712 3.886a3.71 3.71 0 0 1-3.712 3.712M7.44 8.213a3.712 3.712 0 1 1 7.425 0v0l.01 18.79h0a9.04 9.04 0 0 0 9.186 8.883a9.04 9.04 0 0 0 9.185-8.884h0l-.11-18.79a3.712 3.712 0 1 1 7.425 0V26.94a16.56 16.56 0 0 1-33.12 0z"></svg:path>`,
})
export class ArcticonsUdeappIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
