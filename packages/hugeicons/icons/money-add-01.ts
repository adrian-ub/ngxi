import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsMoneyAdd01Icon],svg[hugeicons-money-add-01-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M22 11c0-3.537 0-5.306-1.053-6.487a4.4 4.4 0 0 0-.555-.522C19.138 3 17.26 3 13.5 3h-3c-3.759 0-5.638 0-6.893.99q-.301.24-.554.523C2 5.693 2 7.463 2 11s0 5.306 1.053 6.487q.253.284.554.522C4.862 19 6.741 19 10.5 19H12m6.5 2v-7M15 17.5h7M5.5 11h-.009"></svg:path><svg:path d="M14.5 11a2.5 2.5 0 1 1-5 0a2.5 2.5 0 0 1 5 0"></svg:path></svg:g>`,
})
export class HugeiconsMoneyAdd01Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
