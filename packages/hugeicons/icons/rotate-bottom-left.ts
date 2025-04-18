import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsRotateBottomLeftIcon],svg[hugeicons-rotate-bottom-left-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M2.001 10c0 3.3 0 4.95 1.025 5.975S5.701 17 9.001 17s4.95 0 5.975-1.025S16 13.3 16 10s0-4.95-1.025-5.975S12.3 3 9 3S4.05 3 3.025 4.025S2.001 6.7 2.001 10M22 14.42l-1.11-1.346c-.591-.716-.887-1.074-1.254-1.074v1c0 3.771 0 5.657-1.171 6.828S15.408 21 11.636 21H11" color="currentColor"></svg:path>`,
})
export class HugeiconsRotateBottomLeftIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
