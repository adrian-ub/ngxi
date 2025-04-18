import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[riMoneyEuroBoxFillIcon],svg[ri-money-euro-box-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3.005 3.003h18a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1h-18a1 1 0 0 1-1-1v-16a1 1 0 0 1 1-1m7.05 8a2.5 2.5 0 0 1 4.064-1.41l1.7-1.133a4.5 4.5 0 0 0-7.787 2.543H7.005v2h1.027a4.5 4.5 0 0 0 7.788 2.543l-1.701-1.134a2.5 2.5 0 0 1-4.064-1.41h4.95v-2z"></svg:path>`,
})
export class RiMoneyEuroBoxFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
