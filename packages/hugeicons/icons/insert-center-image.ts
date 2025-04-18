import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsInsertCenterImageIcon],svg[hugeicons-insert-center-image-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M3 3h16M3 21h9m-9-9c0-2.357 0-3.536.732-4.268S5.643 7 8 7h8c2.357 0 3.535 0 4.268.732S21 9.643 21 12s0 3.536-.732 4.268C19.535 17 18.357 17 16 17H8c-2.357 0-3.536 0-4.268-.732S3 14.357 3 12" color="currentColor"></svg:path>`,
})
export class HugeiconsInsertCenterImageIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
