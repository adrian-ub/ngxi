import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsRotateBottomRightIcon],svg[hugeicons-rotate-bottom-right-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M15 17c3.3 0 4.95 0 5.975-1.025S22 13.3 22 10s0-4.95-1.025-5.975S18.3 3 15 3s-4.95 0-5.975 1.025S8 6.7 8 10s0 4.95 1.025 5.975S11.7 17 15 17M2 14.42l1.11-1.346C3.701 12.358 3.996 12 4.364 12v1c0 3.771 0 5.657 1.171 6.828S8.592 21 12.364 21H13" color="currentColor"></svg:path>`,
})
export class HugeiconsRotateBottomRightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
