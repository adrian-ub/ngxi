import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsDiscount01Icon],svg[hugeicons-discount-01-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9.144 2.5c-2.657.06-4.209.315-5.27 1.375S2.562 6.487 2.5 9.145M14.856 2.5c2.657.06 4.209.315 5.27 1.375s1.313 2.612 1.374 5.27M14.856 21.5c2.657-.06 4.209-.315 5.27-1.375s1.313-2.612 1.374-5.27M9.144 21.5c-2.657-.06-4.209-.315-5.27-1.375s-1.313-2.612-1.374-5.27M8 8h.009M16 16h.009M8 16l8-8" color="currentColor"></svg:path>`,
})
export class HugeiconsDiscount01Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
