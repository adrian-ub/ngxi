import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsInsertTopImageIcon],svg[hugeicons-insert-top-image-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M3 17h16M3 21h9M3 8c0-2.357 0-3.536.732-4.268S5.643 3 8 3h8c2.357 0 3.535 0 4.268.732S21 5.643 21 8s0 3.536-.732 4.268C19.535 13 18.357 13 16 13H8c-2.357 0-3.536 0-4.268-.732S3 10.357 3 8" color="currentColor"></svg:path>`,
})
export class HugeiconsInsertTopImageIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
