import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsTvFixIcon],svg[hugeicons-tv-fix-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M2 14c0-3.771 0-5.657 1.172-6.828S6.229 6 10 6h4c3.771 0 5.657 0 6.828 1.172S22 10.229 22 14s0 5.657-1.172 6.828S17.771 22 14 22h-4c-3.771 0-5.657 0-6.828-1.172S2 17.771 2 14"></svg:path><svg:path d="m13.333 12.667l-2.666 2.666m2.666-2.667c.737.737 1.93.737 2.667 0m-2.667 0a1.886 1.886 0 0 1 0-2.666m-2.666 5.333c.736.737.736 1.93 0 2.667m0-2.667a1.886 1.886 0 0 0-2.667 0M9 3l3 3l4-4"></svg:path></svg:g>`,
})
export class HugeiconsTvFixIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
