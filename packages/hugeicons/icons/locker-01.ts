import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsLocker01Icon],svg[hugeicons-locker-01-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M10 3h4c3.771 0 5.657 0 6.828 1.172S22 7.229 22 11s0 5.657-1.172 6.828S17.771 19 14 19h-4c-3.771 0-5.657 0-6.828-1.172S2 14.771 2 11s0-5.657 1.172-6.828S6.229 3 10 3M5.5 7h3m-3 3h3m7-3h3m-3 3h3m1.5 9v2M4 19v2m8-18v16m5.992-5h.009M8.5 14h.009" color="currentColor"></svg:path>`,
})
export class HugeiconsLocker01Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
