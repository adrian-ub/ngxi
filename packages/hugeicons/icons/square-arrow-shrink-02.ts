import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsSquareArrowShrink02Icon],svg[hugeicons-square-arrow-shrink-02-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M2.5 12c0-4.478 0-6.718 1.391-8.109S7.521 2.5 12 2.5c4.478 0 6.718 0 8.109 1.391S21.5 7.521 21.5 12c0 4.478 0 6.718-1.391 8.109S16.479 21.5 12 21.5c-4.478 0-6.718 0-8.109-1.391S2.5 16.479 2.5 12"></svg:path><svg:path d="M12.983 11.017C12.408 10.442 12.504 8 12.504 8m.48 3.017c.574.575 3.016.479 3.016.479m-3.017-.48L17 7m-5.987 5.987c-.575-.575-3.017-.48-3.017-.48m3.017.48c.575.575.48 3.016.48 3.016m-.48-3.016L7 17"></svg:path></svg:g>`,
})
export class HugeiconsSquareArrowShrink02Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
