import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsRotateTopRightIcon],svg[hugeicons-rotate-top-right-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M7 15c0 3.3 0 4.95 1.025 5.975S10.7 22 14 22s4.95 0 5.975-1.025S21 18.3 21 15s0-4.95-1.025-5.975S17.3 8 14 8S9.05 8 8.025 9.025S7 11.7 7 15M9.58 2l1.346 1.11c.716.591 1.074.886 1.074 1.254h-1c-3.771 0-5.657 0-6.828 1.171S3 8.592 3 12.364V13" color="currentColor"></svg:path>`,
})
export class HugeiconsRotateTopRightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
