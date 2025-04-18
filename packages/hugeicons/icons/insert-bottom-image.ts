import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsInsertBottomImageIcon],svg[hugeicons-insert-bottom-image-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M3 3h16M3 7h9m-9 9c0-2.357 0-3.536.732-4.268S5.643 11 8 11h8c2.357 0 3.535 0 4.268.732S21 13.643 21 16s0 3.535-.732 4.268C19.535 21 18.357 21 16 21H8c-2.357 0-3.536 0-4.268-.732C3 19.535 3 18.357 3 16" color="currentColor"></svg:path>`,
})
export class HugeiconsInsertBottomImageIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
