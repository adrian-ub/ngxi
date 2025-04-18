import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsStepOverIcon],svg[hugeicons-step-over-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="m14 14l1.586 1.84c.667.773 1 1.16 1.414 1.16s.747-.387 1.414-1.16L20 14"></svg:path><svg:path d="M17 17v-6c0-2.809 0-4.213-.674-5.222a4 4 0 0 0-1.104-1.104C14.213 4 12.81 4 10 4s-4.213 0-5.222.674a4 4 0 0 0-1.104 1.104C3 6.787 3 8.19 3 11v6m4 3h6"></svg:path></svg:g>`,
})
export class HugeiconsStepOverIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
