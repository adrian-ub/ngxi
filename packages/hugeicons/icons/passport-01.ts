import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsPassport01Icon],svg[hugeicons-passport-01-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M12.95 22c2.645 0 3.967 0 4.917-.756c.949-.757 1.252-2.051 1.857-4.64l1.918-8.197c.335-1.433.503-2.15.198-2.67C21.288 4.796 19.88 5 18.96 5"></svg:path><svg:path d="M2 9c0-3.3 0-4.95 1.025-5.975S5.7 2 9 2h3c3.3 0 4.95 0 5.975 1.025S19 5.7 19 9v6c0 3.3 0 4.95-1.025 5.975S15.3 22 12 22H9c-3.3 0-4.95 0-5.975-1.025S2 18.3 2 15z"></svg:path><svg:path d="M10.5 6a4 4 0 0 1 0 8m0-8a4 4 0 1 0 0 8m0-8C9.672 6 9 7.79 9 10s.672 4 1.5 4m0-8c.828 0 1.5 1.79 1.5 4s-.672 4-1.5 4M7 17h7"></svg:path></svg:g>`,
})
export class HugeiconsPassport01Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
