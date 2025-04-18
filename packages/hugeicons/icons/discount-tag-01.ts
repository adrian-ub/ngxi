import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsDiscountTag01Icon],svg[hugeicons-discount-tag-01-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M7.729 15.286h5m-2.502-2.5h.01m-.008 5h.01M6.5 3.697C9.533 6.782 14.536.124 17.496 2.54C19.199 3.93 18.66 7 16.449 9"></svg:path><svg:path d="M18.664 6.578c.983.179 1.204.765 1.497 2.392c.265 1.466.339 3.225.339 3.974a1.3 1.3 0 0 1-.338.743c-2.057 2.035-6.137 5.878-8.196 7.787c-.808.681-2.028.696-2.886.07c-1.756-1.491-3.443-3.178-5.097-4.701c-.664-.808-.648-1.956.076-2.717c2.178-2.135 6.12-5.789 8.346-7.807c.223-.18.496-.294.79-.319c.498 0 1.355.063 2.19.109"></svg:path></svg:g>`,
})
export class HugeiconsDiscountTag01Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
