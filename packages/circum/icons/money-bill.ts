import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[circumMoneyBillIcon],svg[circum-money-bill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19.44 5.78H4.56a2.507 2.507 0 0 0-2.5 2.5v7.44a2.514 2.514 0 0 0 2.5 2.5h14.88a2.507 2.507 0 0 0 2.5-2.5V8.28a2.5 2.5 0 0 0-2.5-2.5M3.06 8.28a1.5 1.5 0 0 1 1.5-1.5h1.48a3.52 3.52 0 0 1-2.98 2.98Zm1.5 8.94a1.51 1.51 0 0 1-1.5-1.5v-1.48a3.52 3.52 0 0 1 2.98 2.98Zm16.38-1.5a1.5 1.5 0 0 1-1.5 1.5h-1.48a3.52 3.52 0 0 1 2.98-2.98Zm0-2.49a4.53 4.53 0 0 0-3.99 3.99h-9.9a4.53 4.53 0 0 0-3.99-3.99v-2.46a4.53 4.53 0 0 0 3.99-3.99h9.9a4.53 4.53 0 0 0 3.99 3.99Zm0-3.47a3.52 3.52 0 0 1-2.98-2.98h1.48a1.5 1.5 0 0 1 1.5 1.5Z"></svg:path><svg:circle cx="12.002" cy="11.998" r="2" fill="currentColor"></svg:circle>`,
})
export class CircumMoneyBillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
